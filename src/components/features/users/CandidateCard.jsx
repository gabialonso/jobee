import { HiCheckCircle, HiAcademicCap, HiCalendar, HiEnvelope, HiDocumentText } from "react-icons/hi2";
import Button from "../../ui/Button";

const dateFormatter = new Intl.DateTimeFormat("es-UY", { day: "2-digit", month: "2-digit", year: "numeric" });

export default function CandidateCard({ candidate, onViewProfile }) {
  const completedCourses = Array.isArray(candidate.completedCourses) ? candidate.completedCourses : [];
  const inProgressCourses = Array.isArray(candidate.inProgressCourses) ? candidate.inProgressCourses : [];
  const firstInitial = candidate.firstName?.[0] ?? "";
  const lastInitial = candidate.lastName?.[0] ?? "";
  const area = candidate.area ?? candidate.application?.postulation?.area ?? "General";
  const companyName = candidate.application?.company?.name ?? "Empresa Jobee";
  const postulationTitle = candidate.postulationTitle ?? candidate.application?.postulation?.title ?? "";
  const appliedAt = candidate.application?.appliedAt ? dateFormatter.format(new Date(candidate.application.appliedAt)) : null;
  const message = candidate.application?.message ?? "";

  const accent = "#E69C00";

  return (
    <article className="flex flex-col gap-5 rounded-3xl border border-[#E5E7EB] border-b-4 bg-white p-6" style={{ borderBottomColor: accent }}>
      <header className="flex items-start gap-4">
        <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl border-b-4 bg-[#FFF8E7] text-2xl font-bold text-[#1F2937]" style={{ borderBottomColor: accent }}>
          {firstInitial}
          {lastInitial}
        </div>
        <div className="flex-1 space-y-2">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#1F2937]" style={{ borderColor: accent, backgroundColor: "#FFF8E7" }}>
              {area}
            </span>
            {postulationTitle && <span className="truncate text-xs font-medium text-[#4B5563]">{postulationTitle}</span>}
          </div>

          <div>
            <h3 className="text-xl font-bold text-[#1F2937] truncate">
              {candidate.firstName} {candidate.lastName}
            </h3>
            {candidate.highSchool && <p className="text-sm font-medium text-[#4B5563] truncate">{candidate.highSchool}</p>}
          </div>

          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-[#4B5563]">
            {candidate.birthday && (
              <span className="inline-flex items-center gap-1 rounded-full border px-2 py-1" style={{ borderColor: "#F3B61F", backgroundColor: "#FFF8E7" }}>
                <HiCalendar className="h-3.5 w-3.5" style={{ color: accent }} />
                Año {candidate.birthday}
              </span>
            )}
            {appliedAt && <span>Postuló el {appliedAt}</span>}
          </div>
        </div>
      </header>

      {message && (
        <section className="rounded-2xl border px-4 py-3" style={{ borderColor: "#F3B61F", backgroundColor: "#FFF8E7" }}>
          <p className="text-xs font-semibold uppercase tracking-wide text-[#1F2937]">Mensaje al aplicar</p>
          <p className="mt-2 text-sm leading-relaxed text-[#4B5563]">{message}</p>
        </section>
      )}

      {candidate.description && (
        <section>
          <p className="text-xs font-semibold uppercase tracking-wide text-[#1F2937] mb-1">Perfil</p>
          <p className="text-sm leading-relaxed text-[#4B5563] line-clamp-3">{candidate.description}</p>
        </section>
      )}

      <SectionsList icon={HiCheckCircle} label="Cursos completados" data={completedCourses} emptyLabel="Sin cursos completados" />

      <SectionsList icon={HiAcademicCap} label="Cursos en progreso" data={inProgressCourses} emptyLabel="Sin cursos en progreso" />

      <footer className="flex flex-col gap-3 rounded-2xl border border-[#E5E7EB] bg-[#FFFDF6] px-4 py-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-[#4B5563]">Contacto</p>
            <p className="text-sm font-medium text-[#1F2937]">{companyName}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {candidate.email && (
              <a href={`mailto:${candidate.email}`} className="inline-flex items-center gap-1 rounded-full border px-3 py-1 text-xs font-semibold text-[#1F2937] transition-colors" style={{ borderColor: accent, backgroundColor: "#FFF8E7" }}>
                <HiEnvelope className="h-4 w-4" /> Email
              </a>
            )}
            {candidate.cv && (
              <a href={candidate.cv} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 rounded-full border px-3 py-1 text-xs font-semibold text-[#1F2937] transition-colors" style={{ borderColor: accent, backgroundColor: "#FFF8E7" }}>
                <HiDocumentText className="h-4 w-4" /> CV
              </a>
            )}
          </div>
        </div>
      </footer>

      <Button
        onClick={() => onViewProfile && onViewProfile(candidate)}
        variant="primary"
        size="lg"
        className="w-full justify-center"
      >
        Contactar al candidato
      </Button>
    </article>
  );
}

function SectionsList({ icon: Icon, label, data, emptyLabel }) {
  const hasItems = data.length > 0;
  const accent = "#E69C00";

  return (
    <section className="rounded-2xl border border-[#E5E7EB] bg-white px-4 py-3">
      <div className="mb-2 flex items-center gap-2 text-[#1F2937]">
        <div className="flex h-8 w-8 items-center justify-center rounded-xl border-b-4 bg-[#FFF8E7]" style={{ borderBottomColor: accent }}>
          <Icon className="h-5 w-5" style={{ color: accent }} />
        </div>
        <p className="text-xs font-semibold uppercase tracking-wide text-[#4B5563]">{label}</p>
      </div>
      {hasItems ? (
        <div className="flex flex-wrap gap-2">
          {data.map((item, idx) => (
            <span key={`${item}-${idx}`} className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium text-[#374151]" style={{ borderColor: "#E5E7EB", backgroundColor: "#FFFDF6" }}>
              {item}
            </span>
          ))}
        </div>
      ) : (
        <p className="text-sm text-[#6B7280]">{emptyLabel}</p>
      )}
    </section>
  );
}
