const stakeholders = [
  {
    title: "Healthcare Providers",
    desc: "Hospitals, clinics, pharmacies and laboratories can manage claims, patients, revenue, reporting and communication.",
    icon: "🏥",
  },
  {
    title: "Medical Aid Funders",
    desc: "Manage members, claims, benefits, preauthorisation, contributions, payments and funder operations.",
    icon: "💳",
  },
  {
    title: "Patients & Clients",
    desc: "Access benefits, membership information, appointments, notifications and healthcare network information.",
    icon: "👤",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-white py-24">
      <div className="container-x">

        <div className="max-w-2xl">
          <p className="section-eyebrow">
            Connected Healthcare
          </p>

          <h2 className="mt-3 text-3xl font-bold text-ink-900 sm:text-4xl">
            One platform connecting the healthcare ecosystem
          </h2>

          <p className="mt-4 text-ink-700/75">
            Aidme is designed around the needs of the three key stakeholder
            groups that interact throughout the healthcare administration
            process.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">

          {stakeholders.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-ink-900/5 bg-white p-8 shadow-card"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-2xl">
                {item.icon}
              </div>

              <h3 className="mt-6 text-xl font-semibold text-ink-900">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-ink-700/70">
                {item.desc}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}