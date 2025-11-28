export default function BenefitsGrid({ benefits }) {
  const borderColors = [
    'border-[#0B7285]',
    'border-[#DC2626]',
    'border-[#10B981]',
    'border-[#E69C00]'
  ];

  return (
    <section id="beneficios" className="grid gap-6 rounded-3xl bg-[#FFF8E7] px-6 py-2 sm:grid-cols-2 lg:grid-cols-4">
      {benefits.map((benefit, index) => (
        <article
          key={index}
          className={`flex flex-col justify-center gap-3 rounded-2xl border-b-4 ${borderColors[index % borderColors.length]} bg-[#FFF0C2] px-5 py-3`}
        >
          <h3 className="text-lg font-semibold -mb-1 text-[#1F2937]">{benefit.title}</h3>
          <p className="text-sm text-[#4B5563]">
            {benefit.description}
          </p>
        </article>
      ))}
    </section>
  );
}
