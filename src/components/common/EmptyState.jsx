export default function EmptyState({
  icon: Icon,
  title,
  description,
  actionButton,
  className = ""
}) {
  return (
    <section className={`rounded-3xl bg-white border-b-4 border-[#E69C00] p-10 md:p-16 ${className}`}>
      <div className="text-center">
        {Icon && (
          <div className="inline-flex p-6 bg-[#FFF0C2] rounded-3xl border-b-4 border-[#E69C00] mb-6">
            <Icon className="w-16 h-16 text-[#E69C00]" />
          </div>
        )}
        <h2 className="text-2xl font-bold text-[#1F2937] mb-3">
          {title}
        </h2>
        <p className="text-[#4B5563] leading-relaxed max-w-md mx-auto">
          {description}
        </p>
        {actionButton && (
          <div className="mt-6">
            {actionButton}
          </div>
        )}
      </div>
    </section>
  );
}
