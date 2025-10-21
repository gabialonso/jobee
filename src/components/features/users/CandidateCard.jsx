import { HiCheckCircle, HiAcademicCap, HiCalendar } from "react-icons/hi2";

export default function CandidateCard({ candidate, onViewProfile }) {
  return (
    <article className="flex flex-col gap-4 rounded-3xl bg-white border-b-4 border-[#E69C00] p-6 transition-all duration-200 hover:opacity-90">
      {/* Header con avatar e info */}
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-[#FFD65B] to-[#FFA500] flex items-center justify-center border-b-4 border-[#E69C00]">
          <span className="text-2xl font-bold text-[#1F2937]">
            {candidate.firstName[0]}{candidate.lastName[0]}
          </span>
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-xl font-bold text-[#1F2937] mb-1 truncate">
            {candidate.firstName} {candidate.lastName}
          </h3>
          <p className="text-sm font-medium text-[#6B7280] truncate mb-2">{candidate.highSchool}</p>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#FFF0C2] border border-[#E69C00]">
            <HiCalendar className="w-3.5 h-3.5 text-[#E69C00]" />
            <span className="text-xs font-semibold text-[#1F2937]">Año: {candidate.birthday}</span>
          </div>
        </div>
      </div>

      {/* Descripción */}
      {candidate.description && (
        <p className="text-sm text-[#4B5563] leading-relaxed line-clamp-2">
          {candidate.description}
        </p>
      )}

      {/* Cursos completados */}
      {candidate.completedCourses.length > 0 && (
        <div className="space-y-2.5">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-8 h-8 rounded-xl bg-[#10B981]/10 border-b-4 border-[#10B981]">
              <HiCheckCircle className="w-5 h-5 text-[#10B981]" />
            </div>
            <p className="text-xs font-semibold text-[#10B981] uppercase tracking-wide">
              {candidate.completedCourses.length} Curso{candidate.completedCourses.length !== 1 ? 's' : ''} Completado{candidate.completedCourses.length !== 1 ? 's' : ''}
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {candidate.completedCourses.map((course, idx) => (
              <span
                key={idx}
                className="inline-flex items-center px-3 py-1.5 rounded-lg bg-[#10B981]/10 text-[#10B981] text-xs font-medium border border-[#10B981]"
              >
                {course}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Cursos en progreso */}
      {candidate.inProgressCourses.length > 0 && (
        <div className="space-y-2.5">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-8 h-8 rounded-xl bg-[#F59E0B]/10 border-b-4 border-[#F59E0B]">
              <HiAcademicCap className="w-5 h-5 text-[#F59E0B]" />
            </div>
            <p className="text-xs font-semibold text-[#F59E0B] uppercase tracking-wide">
              {candidate.inProgressCourses.length} En Progreso
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {candidate.inProgressCourses.map((course, idx) => (
              <span
                key={idx}
                className="inline-flex items-center px-3 py-1.5 rounded-lg bg-[#F59E0B]/10 text-[#F59E0B] text-xs font-medium border border-[#F59E0B]"
              >
                {course}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Si no tiene cursos */}
      {candidate.completedCourses.length === 0 && candidate.inProgressCourses.length === 0 && (
        <div className="text-center py-3 px-4 bg-[#FFF8E7] rounded-xl border-b-4 border-[#F3B61F]">
          <p className="text-sm text-[#6B7280]">Sin cursos registrados</p>
        </div>
      )}

      {/* Botón */}
      <button
        onClick={() => onViewProfile && onViewProfile(candidate)}
        className="w-full mt-2 bg-[#0B7285] text-white py-3 px-4 rounded-xl font-semibold border-b-4 border-[#074C59] transition-all duration-200 hover:opacity-90"
      >
        Ver Perfil Completo
      </button>
    </article>
  );
}
