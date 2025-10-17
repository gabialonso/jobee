export default function StatCard({
  label,
  value,
  icon: Icon,
  borderColor = "border-[#0B7285]",
  iconBgColor = "bg-[#0B7285]/10",
  iconColor = "text-[#0B7285]"
}) {
  return (
    <article className={`bg-white rounded-2xl border-b-4 ${borderColor} p-6 transition`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-[#6F442C]">{label}</p>
          <p className="text-4xl font-bold text-[#2F1C10] mt-3">{value}</p>
        </div>
        {Icon && (
          <div className={`p-4 ${iconBgColor} rounded-xl border-b-4 ${borderColor}`}>
            <Icon className={`w-8 h-8 ${iconColor}`} />
          </div>
        )}
      </div>
    </article>
  );
}
