const solutions = [
  {
    number: "01",
    title: "Health Service Provider Management",
    desc: "Connect hospitals, clinics, pharmacies and laboratories with claims, patient management, financial reporting and communication tools.",
  },
  {
    number: "02",
    title: "Medical Aid Funder Administration",
    desc: "Manage members, claims, benefits, preauthorisations, contributions, payments and claims administration.",
  },
  {
    number: "03",
    title: "Patient / Client Self-Service Portal",
    desc: "Give patients secure access to benefits, membership information, appointments, notifications and healthcare network information.",
  },
  {
    number: "04",
    title: "Dashboard & Analytics",
    desc: "Give management real-time visibility into claims, revenue, debts, patient trends, medical aid utilisation and operational performance.",
  },
  {
    number: "05",
    title: "Communication & Notification Centre",
    desc: "Automate communication through Email, SMS, WhatsApp and in-system alerts to improve responsiveness and reduce missed actions.",
  },
];

export default function Solutions() {
  return (
    <section id="solutions" className="bg-ink-900 py-24">
      <div className="container-x">

        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-300">
            Our Platform
          </p>

          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            Five pillars. One connected healthcare ecosystem.
          </h2>

          <p className="mt-4 text-white/70">
            Aidme is designed to work as individual modules or as one
            integrated healthcare administration platform.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-5">

          {solutions.map((solution) => (
            <div
              key={solution.number}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
            >
              <span className="text-4xl font-bold text-brand-400/40">
                {solution.number}
              </span>

              <h3 className="mt-5 text-lg font-semibold text-white">
                {solution.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-white/60">
                {solution.desc}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}