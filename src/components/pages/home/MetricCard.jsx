export default function MetricCard({ label, detail }) {
  return (
    <div className="flex flex-col gap-2 rounded-2xl border-b-4 border-[#E69C00] bg-[#FFF0C2] px-4 py-6">
      <span className="text-3xl font-bold text-[#1F2937] md:text-4xl">{label}</span>
      <span className="text-sm font-medium uppercase tracking-wide text-[#4B5563]">
        {detail}
      </span>
    </div>
  );
}
