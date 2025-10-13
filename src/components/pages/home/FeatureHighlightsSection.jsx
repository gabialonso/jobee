import FeatureCard from "./FeatureCard.jsx";

export default function FeatureHighlightsSection({ items = [] }) {
  if (!items.length) return null;

  return (
    <section className="grid gap-6 rounded-3xl bg-[#FFF8E7] px-6 py-2 sm:grid-cols-2 lg:grid-cols-4">
      {items.map(({ title, description }) => (
        <FeatureCard key={title} title={title} description={description} />
      ))}
    </section>
  );
}
