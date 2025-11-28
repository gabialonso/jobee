export default function PageHeader({
  badge,
  title,
  description,
  actions,
  className = ""
}) {
  return (
    <div className={`flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 ${className}`}>
      <div>
        {badge && (
          <span className="inline-flex items-center rounded-full bg-[#9B1756]/10 border border-[#9B1756] px-4 py-1 text-xs font-semibold uppercase tracking-wide text-[#9B1756] mb-4">
            {badge}
          </span>
        )}
        <h1 className="text-3xl font-bold text-[#1F2937] md:text-4xl lg:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="text-base leading-relaxed text-[#4B5563] mt-3 md:text-lg">
            {description}
          </p>
        )}
      </div>
      {actions && (
        <div className="flex gap-3">
          {actions}
        </div>
      )}
    </div>
  );
}
