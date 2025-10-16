export default function StatCard({ label, value, icon: Icon, color = "#E69C00" }) {
  const hexToRgba = (hex, alpha = 0.1) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  return (
    <article
      className="bg-white rounded-2xl border-b-4 p-6"
      style={{ borderBottomColor: color }}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-[#6F442C]">{label}</p>
          <p className="text-4xl font-bold text-[#2F1C10] mt-3">{value}</p>
        </div>
        {Icon && (
          <div
            className="p-4 rounded-xl border-b-4"
            style={{
              backgroundColor: hexToRgba(color),
              borderBottomColor: color
            }}
          >
            <Icon className="w-8 h-8" style={{ color }} />
          </div>
        )}
      </div>
    </article>
  );
}
