const steps = [
  {
    step: "01",
    title: "Connect",
    desc: "Connect healthcare providers, medical aid funders, patients and staff through one digital platform.",
  },
  {
    step: "02",
    title: "Centralise",
    desc: "Bring claims, members, patients, benefits, debts, appointments and financial information into one environment.",
  },
  {
    step: "03",
    title: "Automate",
    desc: "Automate claims tracking, preauthorisation, reminders, notifications, reporting and other repetitive workflows.",
  },
  {
    step: "04",
    title: "Analyse",
    desc: "Use dashboards and analytics to monitor revenue, claims, debts, patient trends and operational performance.",
  },
];

export default function Process() {
  return (
    <section id="process" className="bg-ink-900 py-24">
      <div className="container-x">

        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-300">
            How It Works
          </p>

          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            From fragmented processes to connected healthcare
          </h2>

          <p className="mt-4 text-white/70">
            Aidme centralises healthcare administration and uses automation
            and real-time information to improve coordination across the
            healthcare ecosystem.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          {steps.map((step, index) => (
            <div
              key={step.step}
              className="relative rounded-2xl border border-white/10 bg-white/5 p-7"
            >
              <span className="text-4xl font-bold text-brand-400/40">
                {step.step}
              </span>

              <h3 className="mt-4 text-lg font-semibold text-white">
                {step.title}
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-white/60">
                {step.desc}
              </p>

              {index < steps.length - 1 && (
                <div className="absolute -right-3 top-1/2 hidden h-px w-6 -translate-y-1/2 bg-white/20 lg:block" />
              )}
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}