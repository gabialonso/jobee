export default function FeatureCard({ title, description }) {
  return (
    <div className="flex flex-col justify-center gap-3 rounded-2xl border-b-4 border-[#E69C00] bg-[#FFF0C2] px-5 py-3">
      <h3 className="text-lg font-semibold -mb-1 text-[#1F2937]">{title}</h3>
      <p className="text-sm text-[#4B5563]">{description}</p>
    </div>
  );
}
