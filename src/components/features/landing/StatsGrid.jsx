export default function StatsGrid({ stats }) {
  return (
    <section className="grid gap-6 rounded-3xl bg-[#FFF8E7] px-4 text-center sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <article key={index} className="flex flex-col gap-2 rounded-2xl border-b-4 border-[#E69C00] bg-[#FFF0C2] px-4 py-6">
          <span className="text-3xl font-bold text-[#1F2937] md:text-4xl">{stat.value}</span>
          <span className="text-sm font-medium uppercase tracking-wide text-[#4B5563]">
            {stat.label}
          </span>
        </article>
      ))}
    </section>
  );
}
