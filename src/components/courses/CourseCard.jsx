import { Link } from "react-router-dom";

const PLAN_STYLES = {
  basico: {
    border: "border-b-7 border-x-4 border-t-4 border-[#F3B61F]",
    badge: "bg-[#F3B61F]/30 text-[#1F2937]",
    button: "border-b-4 border-[#F3B61F] bg-white text-[#1F2937]",
  },
  medio: {
    border: "border-b-7 border-x-4 border-t-4 border-[#0B7285]",
    badge: "bg-[#0B7285]/20 text-[#0B7285]",
    button: "border-b-4 border-[#0B7285] bg-white text-[#0B7285]",
  },
  avanzado: {
    border: "border-b-7 border-x-4 border-t-4 border-[#DC2626]",
    badge: "bg-[#DC2626]/20 text-[#DC2626]",
    button: "border-b-4 border-[#DC2626] bg-white text-[#DC2626]",
  },
};

export default function CourseCard({ course }) {
  const { plan, planLabel, title, description, duration, modality } = course;
  const styles = PLAN_STYLES[plan] ?? PLAN_STYLES.basico;

  return (
    <article
      className={`flex min-h-[18rem] flex-1 flex-col justify-between gap-4 rounded-3xl bg-[#FFF8E7] p-6 ${styles.border}`}
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
        className={`inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold transition ${styles.button}`}
      >
        Conocer más
      </Link>
    </article>
  );
}
