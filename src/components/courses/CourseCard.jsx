import { Link } from "react-router-dom";

const PLAN_STYLES = {
  basico: {
    border: "border-b-7 border-x-4 border-t-4 border-[#F5C34D]",
    badge: "bg-[#F5C34D]/30 text-[#1F2937]",
    button: "border-b-4 border-[#F5C34D] bg-white text-[#1F2937]",
  },
  medio: {
    border: "border-b-7 border-x-4 border-t-4 border-[#2A8A9E]",
    badge: "bg-[#2A8A9E]/20 text-[#2A8A9E]",
    button: "border-b-4 border-[#2A8A9E] bg-white text-[#2A8A9E]",
  },
  avanzado: {
    border: "border-b-7 border-x-4 border-t-4 border-[#E84D4D]",
    badge: "bg-[#E84D4D]/20 text-[#E84D4D]",
    button: "border-b-4 border-[#E84D4D] bg-white text-[#E84D4D]",
  },
};

export default function CourseCard({ course }) {
  const { plan, planLabel, title, description, duration, modality } = course;
  const styles = PLAN_STYLES[plan] ?? PLAN_STYLES.basico;

  return (
    <article
      className={`flex min-h-[18rem] flex-1 flex-col justify-between gap-4 rounded-3xl bg-[#FFF8E7] p-6 transition-transform duration-150 ease-out hover:scale-[1.02] ${styles.border}`}
    >
      <div className="space-y-3">
        <span
          className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${styles.badge}`}
        >
          {planLabel}
        </span>
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-[#1F2937] md:text-xl">{title}</h3>
          <p className="text-sm leading-relaxed text-[#4B5563] md:text-base">{description}</p>
        </div>
      </div>

      <div className="space-y-2 text-xs text-[#4B5563] md:text-sm">
        {duration ? (
          <p>
            <span className="font-semibold">Duración:</span> {duration}
          </p>
        ) : null}
        {modality ? (
          <p>
            <span className="font-semibold">Modalidad:</span> {modality}
          </p>
        ) : null}
      </div>

      <Link
        to="/auth/login"
        className={`inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold transition-transform duration-150 ease-out hover:scale-105 ${styles.button}`}
      >
        Conocer más
      </Link>
    </article>
  );
}
