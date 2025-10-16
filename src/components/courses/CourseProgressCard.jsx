const STATUS_STYLES = {
  completed: {
    border: "border-[#2A8A9E]",
    badge: "bg-[#2A8A9E]/20 text-[#2A8A9E]",
    progressBg: "bg-[#2A8A9E]",
  },
  in_progress: {
    border: "border-[#F5C34D]",
    badge: "bg-[#F5C34D]/30 text-[#1F2937]",
    progressBg: "bg-[#F5C34D]",
  },
};

export default function CourseProgressCard({ course }) {
  const { title, description, progress = 0, status = "in_progress" } = course;
  const styles = STATUS_STYLES[status] ?? STATUS_STYLES.in_progress;
  const statusLabel = status === "completed" ? "Completado" : "En Progreso";

  return (
    <article
      className={`flex flex-col gap-4 rounded-2xl border-b-4 ${styles.border} bg-white p-5 transition hover:shadow-lg`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 space-y-2">
          <h3 className="text-base font-semibold text-[#1F2937] md:text-lg">{title}</h3>
          {description && (
            <p className="text-sm leading-relaxed text-[#4B5563]">{description}</p>
          )}
        </div>
        <span
          className={`inline-flex shrink-0 items-center rounded-full px-3 py-1 text-xs font-semibold ${styles.badge}`}
        >
          {statusLabel}
        </span>
      </div>

      {/* Progress bar */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs font-semibold text-[#4B5563]">
          <span>Progreso</span>
          <span>{progress}%</span>
        </div>
        <div className="h-2 w-full overflow-hidden rounded-full bg-[#FFF0C2]">
          <div
            className={`h-full transition-all duration-500 ${styles.progressBg}`}
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </article>
  );
}
