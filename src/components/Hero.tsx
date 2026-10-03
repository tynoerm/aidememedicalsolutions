export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink-900">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 right-0 h-96 w-96 rounded-full bg-brand-600/30 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-brand-400/10 blur-3xl" />
      </div>

      <div className="container-x relative py-24 lg:py-32">
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* LEFT */}
          <div>
            <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-300">
              Digital Healthcare Administration
            </span>

            <h1 className="mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Connecting Healthcare.
              <span className="block text-brand-400">
                Simplifying Administration.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
              Aidme Medical Solutions connects healthcare providers,
              medical aid funders, and patients through one intelligent
              digital healthcare administration platform.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#contact" className="btn-primary">
                Request a Demo
              </a>

              <a href="#services" className="btn-secondary">
                Explore Our Solutions
              </a>
            </div>

            <dl className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-white/10 pt-8">
              <div>
                <dt className="text-xs uppercase tracking-wide text-white/50">
                  Stakeholders
                </dt>
                <dd className="mt-1 text-2xl font-bold text-white">
                  3
                </dd>
              </div>

              <div>
                <dt className="text-xs uppercase tracking-wide text-white/50">
                  Solution Pillars
                </dt>
                <dd className="mt-1 text-2xl font-bold text-white">
                  5
                </dd>
              </div>

              <div>
                <dt className="text-xs uppercase tracking-wide text-white/50">
                  Channels
                </dt>
                <dd className="mt-1 text-2xl font-bold text-white">
                  3+
                </dd>
              </div>
            </dl>
          </div>

          {/* RIGHT */}
          <div className="relative">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur">

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-white">
                    Aidme Healthcare Platform
                  </p>

                  <p className="mt-1 text-xs text-white/50">
                    Integrated Healthcare Administration
                  </p>
                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500/20 text-brand-300">
                  +
                </div>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">

                <div className="rounded-2xl bg-white/10 p-5">
                  <div className="text-2xl">🏥</div>
                  <h3 className="mt-3 text-sm font-semibold text-white">
                    Providers
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-white/50">
                    Claims, patients, revenue, reporting and operations.
                  </p>
                </div>

                <div className="rounded-2xl bg-white/10 p-5">
                  <div className="text-2xl">💳</div>
                  <h3 className="mt-3 text-sm font-semibold text-white">
                    Medical Aid Funders
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-white/50">
                    Members, claims, benefits, preauthorisation and payments.
                  </p>
                </div>

                <div className="rounded-2xl bg-white/10 p-5">
                  <div className="text-2xl">👤</div>
                  <h3 className="mt-3 text-sm font-semibold text-white">
                    Patients
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-white/50">
                    Benefits, appointments, notifications and self-service.
                  </p>
                </div>

                <div className="rounded-2xl bg-brand-500/20 p-5">
                  <div className="text-2xl">📊</div>
                  <h3 className="mt-3 text-sm font-semibold text-white">
                    Real-Time Intelligence
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-white/60">
                    Dashboards, analytics, claims and financial visibility.
                  </p>
                </div>

              </div>

              <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-white/60">
                    Healthcare Ecosystem
                  </span>

                  <span className="text-xs font-semibold text-brand-300">
                    Connected
                  </span>
                </div>

                <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-[85%] rounded-full bg-brand-400" />
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}