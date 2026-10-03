const services = [
  {
    title: "Health Service Provider Management",
    desc: "Manage claims, patients, revenue, financial information, reporting and communication across hospitals, clinics, pharmacies and laboratories.",
    icon: "🏥",
  },
  {
    title: "Medical Aid Funder Administration",
    desc: "Manage members, claims, benefits, preauthorisations, contributions, payments and funder operations from one integrated platform.",
    icon: "💳",
  },
  {
    title: "Claims Management & Reconciliation",
    desc: "Track claims from submission to payment and identify paid, pending, rejected, unpaid and short-paid claims for faster follow-up.",
    icon: "📋",
  },
  {
    title: "Smart Preauthorisation",
    desc: "Apply configurable rules based on benefit balances, eligibility, hospital acceptance, benefit limits and policy requirements.",
    icon: "⚡",
  },
  {
    title: "Patient & Client Self-Service",
    desc: "Give patients secure access to benefits, membership status, appointments, notifications, healthcare networks and claim information.",
    icon: "👤",
  },
  {
    title: "Dashboard & Analytics",
    desc: "Access real-time visibility into revenue, claims, debts, patient trends, medical aid utilisation and operational performance.",
    icon: "📊",
  },
  {
    title: "Communication Centre",
    desc: "Automate important communication through Email, SMS, WhatsApp and in-system notifications.",
    icon: "💬",
  },
  {
    title: "Debt & Revenue Monitoring",
    desc: "Monitor outstanding balances, overdue debts and collections while giving management better visibility of financial performance.",
    icon: "💰",
  },
  {
    title: "Benefit & Membership Management",
    desc: "Track membership, contributions, dependants, benefit usage, global limits and member status.",
    icon: "🛡️",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-24">
      <div className="container-x">

        <div className="max-w-3xl">
          <p className="section-eyebrow">
            What We Do
          </p>

          <h2 className="mt-3 text-3xl font-bold text-ink-900 sm:text-4xl">
            One platform for smarter healthcare administration
          </h2>

          <p className="mt-4 text-ink-700/80">
            Aidme Medical Solutions brings healthcare providers, medical aid
            funders and patients into one connected digital ecosystem.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-2xl border border-ink-900/5 bg-white p-7 shadow-card transition hover:-translate-y-1 hover:border-brand-200"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-2xl">
                {service.icon}
              </div>

              <h3 className="mt-5 text-lg font-semibold text-ink-900">
                {service.title}
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-ink-700/75">
                {service.desc}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}