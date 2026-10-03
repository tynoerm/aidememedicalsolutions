import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef7ff",
          100: "#d9edff",
          200: "#bce0ff",
          300: "#8ecdff",
          400: "#59b1ff",
          500: "#2f8fff",
          600: "#1a6ff5",
          700: "#1558e0",
          800: "#1846b5",
          900: "#193f8f",
          950: "#132758",
        },
        ink: {
          900: "#0b1220",
          800: "#131c2e",
          700: "#1c2a41",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 10px 30px -12px rgba(19, 39, 88, 0.25)",
      },
    },
  },
  plugins: [],
};
export default config;
