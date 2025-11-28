import { Link } from "react-router-dom";

export const PLAN_STYLES = {
  basico: {
    background: "#FFF0C2",
    border: "#F5C34D",
    badgeBg: "#FDF3C4",
    badgeColor: "#6F442C",
    buttonBg: "#F5C34D",
    buttonText: "#1F2937",
    buttonBorder: "#D48A00",
    accent: "#F5C34D",
  },
  medio: {
    background: "#D4E9EC",
    border: "#2A8A9E",
    badgeBg: "#C0E3E8",
    badgeColor: "#0B7285",
    buttonBg: "#2A8A9E",
    buttonText: "#FFFFFF",
    buttonBorder: "#0B7285",
    accent: "#2A8A9E",
  },
  avanzado: {
    background: "#FDE8E8",
    border: "#E84D4D",
    badgeBg: "#F8CCCC",
    badgeColor: "#842029",
    buttonBg: "#E84D4D",
    buttonText: "#FFFFFF",
    buttonBorder: "#B91C1C",
    accent: "#E84D4D",
  },
};

export default function CourseCard({ course, actionButton }) {
  const { plan, planLabel, title, description, duration, modality } = course;
  const styles = PLAN_STYLES[plan] ?? PLAN_STYLES.basico;

  return (
    <article
      className="flex min-h-[18rem] flex-1 flex-col justify-between gap-4 rounded-3xl border-2 p-6 transition-all duration-150 ease-out hover:opacity-95"
      style={{
        backgroundColor: styles.background,
        borderColor: styles.border,
        borderBottomWidth: "6px",
      }}
    >
      <div className="space-y-3">
        <span
          className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold"
          style={{ backgroundColor: styles.badgeBg, color: styles.badgeColor }}
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

      {actionButton || (
        <Link
          to="/auth/login"
          className="inline-flex items-center justify-center rounded-xl border-b-4 px-4 py-2 text-sm font-semibold transition-all duration-150 ease-out hover:opacity-90"
          style={{
            backgroundColor: styles.buttonBg,
            color: styles.buttonText,
            borderBottomColor: styles.buttonBorder,
          }}
        >
          Conocer más
        </Link>
      )}
    </article>
  );
}
