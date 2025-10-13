import MetricCard from "./MetricCard.jsx";

export default function MetricsSection({ items = [], id }) {
  if (!items.length) return null;

  return (
    <section
      id={id}
      className="grid gap-6 rounded-3xl bg-[#FFF8E7] px-4 text-center sm:grid-cols-2 lg:grid-cols-4"
    >
      {items.map(({ label, detail }) => (
        <MetricCard key={detail} label={label} detail={detail} />
      ))}
    </section>
  );
}
