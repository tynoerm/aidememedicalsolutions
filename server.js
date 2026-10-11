/**
 * Aidme Medical Solutions — application server
 *
 * Starts the Next.js website behind a Node HTTP server.
 *
 *   node server.js            -> production (builds automatically if needed)
 *   node server.js --dev      -> development with hot reload
 *
 * Environment variables:
 *   PORT       Port to listen on            (default: 3000)
 *   HOST       Interface to bind to         (default: 0.0.0.0)
 *   NODE_ENV   "production" | "development" (default: production unless --dev)
 */

const http = require("http");
const fs = require("fs");
const path = require("path");
const { spawnSync } = require("child_process");
const next = require("next");

const args = process.argv.slice(2);
const dev = args.includes("--dev") || process.env.NODE_ENV === "development";
process.env.NODE_ENV = dev ? "development" : "production";

const port = parseInt(process.env.PORT, 10) || 3000;
const hostname = process.env.HOST || "0.0.0.0";
const rootDir = __dirname;
const startedAt = Date.now();

const SECURITY_HEADERS = {
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "SAMEORIGIN",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "Permissions-Policy": "camera=(), microphone=(), geolocation=()",
  ...(dev ? {} : { "Strict-Transport-Security": "max-age=63072000; includeSubDomains" }),
};

const log = (level, msg) => {
  const line = `[${new Date().toISOString()}] ${level.padEnd(5)} ${msg}`;
  (level === "ERROR" ? console.error : console.log)(line);
};

function ensureProductionBuild() {
  if (dev || fs.existsSync(path.join(rootDir, ".next", "BUILD_ID"))) return;

  log("INFO", "No production build found — running `next build`...");
  const result = spawnSync(process.execPath, [require.resolve("next/dist/bin/next"), "build"], {
    cwd: rootDir,
    stdio: "inherit",
    env: process.env,
  });
  if (result.status !== 0) {
    log("ERROR", "Build failed. Fix the errors above and try again.");
    process.exit(result.status || 1);
  }
}

function sendHealth(res) {
  res.writeHead(200, { "Content-Type": "application/json", "Cache-Control": "no-store" });
  res.end(
    JSON.stringify({
      status: "ok",
      mode: dev ? "development" : "production",
      uptimeSeconds: Math.round((Date.now() - startedAt) / 1000),
    })
  );
}

async function main() {
  ensureProductionBuild();

  const app = next({ dev, hostname, port, dir: rootDir });
  const handle = app.getRequestHandler();
  await app.prepare();

  const server = http.createServer(async (req, res) => {
    const start = process.hrtime.bigint();

    for (const [key, value] of Object.entries(SECURITY_HEADERS)) res.setHeader(key, value);

    res.on("finish", () => {
      const isAsset = req.url.startsWith("/_next/") || req.url.startsWith("/__nextjs");
      if (dev && isAsset) return;
      const ms = Number(process.hrtime.bigint() - start) / 1e6;
      log("HTTP", `${req.method} ${req.url} ${res.statusCode} ${ms.toFixed(1)}ms`);
    });

    try {
      if (req.url === "/healthz" || req.url === "/api/health") return sendHealth(res);
      await handle(req, res);
    } catch (err) {
      log("ERROR", `Unhandled error for ${req.method} ${req.url}: ${err.stack || err}`);
      if (!res.headersSent) {
        res.statusCode = 500;
        res.end("Internal Server Error");
      }
    }
  });

  server.keepAliveTimeout = 65_000;
  server.headersTimeout = 66_000;

  server.on("error", (err) => {
    if (err.code === "EADDRINUSE") {
      log("ERROR", `Port ${port} is already in use. Set a different PORT, e.g. PORT=3001 node server.js`);
    } else {
      log("ERROR", err.stack || String(err));
    }
    process.exit(1);
  });

  server.listen(port, hostname, () => {
    const displayHost = hostname === "0.0.0.0" ? "localhost" : hostname;
    log("INFO", `Aidme Medical Solutions running in ${dev ? "development" : "production"} mode`);
    log("INFO", `Local:  http://${displayHost}:${port}`);
    log("INFO", `Health: http://${displayHost}:${port}/healthz`);
  });

  let shuttingDown = false;
  const shutdown = (signal) => {
    if (shuttingDown) return;
    shuttingDown = true;
    log("INFO", `${signal} received — shutting down gracefully...`);
    server.close(async () => {
      await app.close?.();
      log("INFO", "Server closed. Goodbye.");
      process.exit(0);
    });
    server.closeIdleConnections?.();
    setTimeout(() => {
      log("ERROR", "Forcing shutdown after 10s timeout.");
      process.exit(1);
    }, 10_000).unref();
  };

  process.on("SIGINT", () => shutdown("SIGINT"));
  process.on("SIGTERM", () => shutdown("SIGTERM"));
}

process.on("unhandledRejection", (reason) => log("ERROR", `Unhandled rejection: ${reason?.stack || reason}`));
process.on("uncaughtException", (err) => {
  log("ERROR", `Uncaught exception: ${err.stack || err}`);
  process.exit(1);
});

main().catch((err) => {
  log("ERROR", `Failed to start server: ${err.stack || err}`);
  process.exit(1);
});
