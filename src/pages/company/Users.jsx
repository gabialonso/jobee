import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { mockApi } from "../../utils/mockData";
import AuthenticatedHeader from "../../components/common/AuthenticatedHeader";
import { HiUsers, HiAcademicCap, HiCheckCircle } from "react-icons/hi2";
import { FiSearch } from "react-icons/fi";

export default function CompanyUsers() {
  const location = useLocation();
  const [candidates, setCandidates] = useState([]);
  const [filteredCandidates, setFilteredCandidates] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCandidates = async () => {
      try {
        const data = await mockApi.getCandidates();
        if (data.success) {
          setCandidates(data.data);
          setFilteredCandidates(data.data);
        }
      } catch (err) {
        console.error('Error loading candidates:', err);
      } finally {
        setLoading(false);
      }
    };

    loadCandidates();
  }, []);

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredCandidates(candidates);
    } else {
      const filtered = candidates.filter(candidate =>
        `${candidate.firstName} ${candidate.lastName}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
        candidate.highSchool?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        candidate.completedCourses.some(course => course.toLowerCase().includes(searchTerm.toLowerCase()))
      );
      setFilteredCandidates(filtered);
    }
  }, [searchTerm, candidates]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#FFF8E7] flex items-center justify-center">
        <p className="text-[#6F442C]">Cargando candidatos...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FFF8E7]">
      <AuthenticatedHeader mode="company" currentPath={location.pathname} />

      <main className="mx-auto w-full max-w-container px-5 py-12 md:px-8 lg:px-12">
        <div className="mb-10">
          <span className="inline-flex items-center rounded-full bg-[#9B1756]/10 border border-[#9B1756] px-4 py-1 text-xs font-semibold uppercase tracking-wide text-[#9B1756] mb-4">
            Gestión de Candidatos
          </span>
          <h1 className="text-3xl font-bold text-[#1F2937] md:text-4xl lg:text-5xl">
            Candidatos
          </h1>
          <p className="text-base leading-relaxed text-[#4B5563] mt-3 md:text-lg">
            Gestioná y encontrá el talento ideal para tu empresa.
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative max-w-md">
            <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#4B5563] w-5 h-5" />
            <input
              type="text"
              placeholder="Buscar por nombre, liceo o curso..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-[#E69C00] bg-white text-[#1F2937] focus:outline-none focus:ring-2 focus:ring-[#FFD65B]"
            />
          </div>
        </div>

        {/* Stats */}
        <div className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-2xl border-b-4 border-[#E69C00] p-4">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-[#0B7285]/10 rounded-xl">
                <HiUsers className="w-6 h-6 text-[#0B7285]" />
              </div>
              <div>
                <p className="text-xs text-[#4B5563]">Total Candidatos</p>
                <p className="text-2xl font-bold text-[#1F2937]">{candidates.length}</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl border-b-4 border-[#E69C00] p-4">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-[#10B981]/10 rounded-xl">
                <HiCheckCircle className="w-6 h-6 text-[#10B981]" />
              </div>
              <div>
                <p className="text-xs text-[#4B5563]">Con Cursos Completos</p>
                <p className="text-2xl font-bold text-[#1F2937]">
                  {candidates.filter(c => c.completedCourses.length > 0).length}
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl border-b-4 border-[#E69C00] p-4">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-[#F59E0B]/10 rounded-xl">
                <HiAcademicCap className="w-6 h-6 text-[#F59E0B]" />
              </div>
              <div>
                <p className="text-xs text-[#4B5563]">Estudiando Ahora</p>
                <p className="text-2xl font-bold text-[#1F2937]">
                  {candidates.filter(c => c.inProgressCourses.length > 0).length}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Candidates List */}
        {filteredCandidates.length === 0 ? (
          <section className="rounded-3xl bg-white border-b-4 border-[#E69C00] p-10 md:p-16">
            <div className="text-center">
              <div className="inline-flex p-6 bg-[#FFF0C2] rounded-3xl border-b-4 border-[#E69C00] mb-6">
                <HiUsers className="w-16 h-16 text-[#E69C00]" />
              </div>
              <h2 className="text-2xl font-bold text-[#1F2937] mb-3">
                No se encontraron candidatos
              </h2>
              <p className="text-[#4B5563] leading-relaxed max-w-md mx-auto">
                Intentá con otros términos de búsqueda.
              </p>
            </div>
          </section>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCandidates.map((candidate) => (
              <div
                key={candidate.id}
                className="bg-white rounded-3xl border-b-4 border-[#E69C00] p-6 transition-all hover:scale-105 cursor-pointer"
              >
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
                <button className="w-full mt-4 px-4 py-2 rounded-xl bg-[#0B7285] border-b-4 border-[#074C59] text-white font-semibold transition-all hover:scale-105">
                  Ver Perfil Completo
                </button>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
