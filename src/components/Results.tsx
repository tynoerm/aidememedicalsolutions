const benefits = [
  {
    value: "60%",
    label: "Potential reduction in claims revenue losses",
  },
  {
    value: "3",
    label: "Connected stakeholder groups",
  },
  {
    value: "5",
    label: "Integrated solution pillars",
  },
  {
    value: "3+",
    label: "Communication channels",
  },
];

export default function Results() {
  return (
    <section id="results" className="bg-brand-50 py-20">
      <div className="container-x">

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {benefits.map((item) => (
            <div key={item.label} className="text-center">

              <div className="text-4xl font-bold text-brand-700">
                {item.value}
              </div>

              <p className="mx-auto mt-2 max-w-[220px] text-sm font-medium text-ink-700/80">
                {item.label}
              </p>

            </div>
          ))}

        </div>

        <p className="mt-8 text-center text-xs text-ink-700/50">
          The 60% figure reflects the potential claims-loss reduction stated
          in the Aidme Medical Solutions company profile.
        </p>

      </div>
    </section>
  );
}