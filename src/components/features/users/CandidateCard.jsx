import { HiCheckCircle, HiAcademicCap } from "react-icons/hi2";

export default function CandidateCard({ candidate, onViewProfile }) {
  return (
    <div className="bg-white rounded-3xl border-b-4 border-[#E69C00] p-6 transition-all hover:scale-105 cursor-pointer">
      {/* Profile Photo */}
      <div className="flex items-center gap-4 mb-4">
        <div className="w-16 h-16 rounded-full bg-[#FFD65B] flex items-center justify-center text-[#1F2937] text-2xl font-bold">
          {candidate.firstName[0]}{candidate.lastName[0]}
        </div>
        <div>
          <h3 className="text-lg font-bold text-[#1F2937]">
            {candidate.firstName} {candidate.lastName}
          </h3>
          <p className="text-sm text-[#4B5563]">{candidate.highSchool}</p>
        </div>
      </div>

      {/* Description */}
      {candidate.description && (
        <p className="text-sm text-[#4B5563] mb-4 line-clamp-2">
          {candidate.description}
        </p>
      )}

      {/* Birthday */}
      <div className="mb-4 text-xs text-[#4B5563]">
        <span className="font-semibold">Año:</span> {candidate.birthday}
      </div>

      {/* Completed Courses */}
      {candidate.completedCourses.length > 0 && (
        <div className="mb-3">
          <div className="flex items-center gap-2 mb-2">
            <HiCheckCircle className="w-4 h-4 text-[#10B981]" />
            <p className="text-xs font-semibold text-[#10B981]">
              Cursos Completados ({candidate.completedCourses.length})
            </p>
          </div>
          <div className="flex flex-wrap gap-1">
            {candidate.completedCourses.map((course, idx) => (
              <span
                key={idx}
                className="text-xs bg-[#10B981]/10 text-[#10B981] px-2 py-1 rounded-lg border border-[#10B981]"
              >
                {course}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* In Progress Courses */}
      {candidate.inProgressCourses.length > 0 && (
        <div>
          <div className="flex items-center gap-2 mb-2">
            <HiAcademicCap className="w-4 h-4 text-[#F59E0B]" />
            <p className="text-xs font-semibold text-[#F59E0B]">
              En Progreso ({candidate.inProgressCourses.length})
            </p>
          </div>
          <div className="flex flex-wrap gap-1">
            {candidate.inProgressCourses.map((course, idx) => (
              <span
                key={idx}
                className="text-xs bg-[#F59E0B]/10 text-[#F59E0B] px-2 py-1 rounded-lg border border-[#F59E0B]"
              >
                {course}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Action Button */}
      <button
        onClick={() => onViewProfile && onViewProfile(candidate)}
        className="w-full mt-4 px-4 py-2 rounded-xl bg-[#0B7285] border-b-4 border-[#074C59] text-white font-semibold transition-all hover:scale-105"
      >
        Ver Perfil Completo
      </button>
    </div>
  );
}
