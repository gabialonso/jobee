import { useState, useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";
import { apiFetch } from "../../../utils/api";
import AuthenticatedHeader from "../../../components/features/navigation/AuthenticatedHeader";
import PageHeader from "../../../components/features/shared/PageHeader";
import SearchBar from "../../../components/common/SearchBar";
import EmptyState from "../../../components/common/EmptyState";
import CandidateCard from "../../../components/features/users/CandidateCard";
import { HiUsers, HiAcademicCap, HiCheckCircle } from "react-icons/hi2";

export default function CompanyUsers() {
  const location = useLocation();
  const [candidates, setCandidates] = useState([]);
  const [filteredCandidates, setFilteredCandidates] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedArea, setSelectedArea] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCandidates = async () => {
      try {
        const applications = await apiFetch('/company/users');
        if (!Array.isArray(applications)) {
          throw new Error('Respuesta inválida del servidor');
        }
        const seen = new Set();
        const cleaned = applications.filter((application) => {
          if (!application) return false;
          const companyId = application.company?.id ?? application.postulation?.company?.id;
          if (!companyId) return false;

          const person = application.candidate ?? {};
          const candidateId = person.id ?? application.id;
          const postulationId = application.postulation?.id ?? application.postulationId ?? "legacy";
          const key = `${candidateId}-${postulationId}`;

          if (seen.has(key)) return false;
          seen.add(key);
          return true;
        });

        const normalized = cleaned.map((application) => {
          const person = application?.candidate ?? {};
          const user = person?.user ?? {};
          const fullName = user?.name ?? '';
          const [firstFallback, ...restFallback] = fullName.split(' ').filter(Boolean);

          const completedCourses = Array.isArray(person.completedCourses) ? person.completedCourses : [];
          const inProgressCourses = Array.isArray(person.inProgressCourses) ? person.inProgressCourses : [];

          return {
            id: person.id ?? application.id,
            firstName: person.firstName ?? firstFallback ?? '',
            lastName: person.lastName ?? restFallback.join(' ') ?? '',
            birthday: person.birthday ?? null,
            highSchool: person.highSchool ?? '',
            description: person.description ?? '',
            cv: person.cv ?? '',
            linkedin: person.linkedin ?? '',
            profilePhoto: person.profilePhoto ?? '',
            email: user.email ?? '',
            completedCourses,
            inProgressCourses,
            application: {
              id: application.id,
              appliedAt: application.appliedAt,
              message: application.message,
              postulation: application.postulation ?? null,
              company: application.company ?? null,
            },
            area: application.postulation?.area ?? 'General',
            postulationTitle: application.postulation?.title ?? '',
            status: application.postulation?.status ?? 'ACTIVA',
          };
        });

        setCandidates(normalized);
        setFilteredCandidates(normalized);
      } catch (err) {
        console.error('Error loading candidates:', err);
        setCandidates([]);
        setFilteredCandidates([]);
      } finally {
        setLoading(false);
      }
    };

    loadCandidates();
  }, []);

  const highlightMetrics = useMemo(() => {
    const total = candidates.length;
    const withCourses = candidates.filter((c) => c.completedCourses.length > 0).length;
    const inProgress = candidates.filter((c) => c.inProgressCourses.length > 0).length;
    const recent = [...candidates]
      .sort((a, b) => new Date(b.application?.appliedAt ?? 0) - new Date(a.application?.appliedAt ?? 0))
      .slice(0, 1)
      .map((c) => c.firstName || c.lastName)
      .join(" & ");

    return {
      total,
      withCourses,
      inProgress,
      recent,
    };
  }, [candidates]);

  const areas = useMemo(() => {
    const allAreas = candidates
      .map((candidate) => candidate.area)
      .filter(Boolean);
    return Array.from(new Set(allAreas));
  }, [candidates]);

  useEffect(() => {
    const term = searchTerm.trim().toLowerCase();

    const filtered = candidates.filter((candidate) => {
      const matchesSearch =
        term === '' ||
        `${candidate.firstName} ${candidate.lastName}`.toLowerCase().includes(term) ||
        candidate.highSchool?.toLowerCase().includes(term) ||
        candidate.completedCourses.some((course) => course.toLowerCase().includes(term));

      const matchesArea =
        selectedArea === 'all' ||
        candidate.area?.toLowerCase() === selectedArea.toLowerCase();

      const matchesStatus =
        selectedStatus === 'all' ||
        candidate.status?.toLowerCase() === selectedStatus.toLowerCase();

      return matchesSearch && matchesArea && matchesStatus;
    });

    setFilteredCandidates(filtered);
  }, [searchTerm, candidates, selectedArea, selectedStatus]);

  const handleAreaChange = (area) => {
    setSelectedArea((prev) => (prev === area ? 'all' : area));
  };

  const handleStatusChange = (status) => {
    setSelectedStatus((prev) => (prev === status ? 'all' : status));
  };

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

      <main className="mx-auto w-full max-w-container px-5 py-12 md:px-8 lg:px-12 space-y-10">
        <section className="rounded-3xl border border-[#E5E7EB] border-b-4 bg-white px-6 py-10 md:px-10" style={{ borderBottomColor: "#E69C00" }}>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-xl space-y-6">
              <PageHeader
                badge="Gestión de Candidatos"
                title="Candidatos"
                description="Organizá postulaciones, descubrí talento y analizá rápidamente las aptitudes de cada persona."
              />
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 md:max-w-3xl">
                <MetricCard
                  icon={<HiUsers className="h-6 w-6" />}
                  label="Total"
                  value={highlightMetrics.total}
                  tone="primary"
                />
                <MetricCard
                  icon={<HiCheckCircle className="h-6 w-6" />}
                  label="Con cursos"
                  value={highlightMetrics.withCourses}
                  tone="secondary"
                />
                <MetricCard
                  icon={<HiAcademicCap className="h-6 w-6" />}
                  label="Estudiando"
                  value={highlightMetrics.inProgress}
                  tone="secondary"
                />
                <MetricCard
                  icon={<HiUsers className="h-6 w-6" />}
                  label="Última incorporación"
                  value={highlightMetrics.recent || "—"}
                  tone="neutral"
                  isText
                />
              </div>
            </div>
            <div className="w-full max-w-md space-y-4 rounded-3xl border border-[#E5E7EB] border-b-4 bg-[#FFFDF6] p-6" style={{ borderBottomColor: "#E69C00" }}>
              <SearchBar
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Buscar por nombre, liceo o curso..."
                className="rounded-2xl border border-[#F3B61F] bg-white p-1"
              />
              <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
                {areas.slice(0, 4).map((area) => (
                  <button
                    key={area}
                    onClick={() => handleAreaChange(area)}
                    className={`rounded-2xl border px-4 py-2 text-sm font-semibold transition-all ${
                      selectedArea === area
                        ? "border-[#E69C00] bg-[#E69C00] text-white"
                        : "border-[#F3B61F] bg-white text-[#6F442C] hover:bg-[#FFF8E7]"
                    }`}
                  >
                    {area}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[280px,1fr]">
          <aside className="space-y-6 rounded-3xl border border-[#E5E7EB] border-b-4 bg-white p-6" style={{ borderBottomColor: "#E69C00" }}>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-[#9B1756]">Filtros inteligentes</h3>
              <p className="mt-1 text-sm text-[#4B5563]">
                Filtrá las postulaciones por área, estado o cursos completados.
              </p>
            </div>

            <FilterSection
              title="Áreas de interés"
              options={areas}
              selected={selectedArea}
              onSelect={handleAreaChange}
            />

            <FilterSection
              title="Estado de la postulación"
              options={["ACTIVA", "CERRADA"]}
              selected={selectedStatus}
              onSelect={handleStatusChange}
            />

            <div className="rounded-2xl border border-[#F3B61F] bg-[#FFF8E7] p-5">
              <h4 className="text-sm font-semibold uppercase tracking-wide text-[#6F442C]">Tip Jobee</h4>
              <p className="mt-2 text-sm text-[#6F442C]/80">
                Analizá los mensajes personalizados que envía cada candidato para priorizar entrevistas.
              </p>
            </div>
          </aside>

          <section className="space-y-8">
            {filteredCandidates.length === 0 ? (
              <EmptyState
                icon={HiUsers}
                title="No se encontraron candidatos"
                description="Intentá con otros filtros o términos de búsqueda."
              />
            ) : (
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {filteredCandidates.map((candidate) => (
                  <CandidateCard key={candidate.id} candidate={candidate} />
                ))}
              </div>
            )}
          </section>
        </div>
      </main>
    </div>
  );
}

function MetricCard({ icon, label, value, tone, isText = false }) {
  const toneClasses = {
    primary: { icon: "#E69C00", bg: "#FFF8E7", border: "#E69C00" },
    secondary: { icon: "#B7791F", bg: "#FFF4D6", border: "#F3B61F" },
    neutral: { icon: "#6B7280", bg: "#F3F4F6", border: "#D1D5DB" },
  };

  const palette = toneClasses[tone] ?? toneClasses.primary;
  const borderColor = palette.border ?? "#E69C00";

  return (
    <div className="flex flex-col gap-2 rounded-2xl border border-[#E5E7EB] border-b-4 px-4 py-3" style={{ backgroundColor: palette.bg, borderBottomColor: borderColor }}>
      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide" style={{ color: palette.icon }}>
        {icon}
        {label}
      </div>
      <span className={`text-lg font-bold text-[#1F2937] ${isText ? "truncate" : ""}`}>{value}</span>
    </div>
  );
}

function FilterSection({ title, options, selected, onSelect }) {
  if (!options.length) return null;

  return (
    <div className="space-y-3">
      <p className="text-xs font-semibold uppercase tracking-wide text-[#1F2937]/60">{title}</p>
      <div className="flex flex-col gap-2">
        {options.map((option) => (
          <button
            key={option}
            onClick={() => onSelect(option)}
            className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition-all ${
              selected === option
                ? "border-[#E69C00] bg-[#E69C00] text-white"
                : "border-[#F3B61F] bg-white text-[#6F442C] hover:bg-[#FFF8E7]"
            }`}
          >
            {option}
          </button>
        ))}
        <button
          onClick={() => onSelect('all')}
          className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition-all ${
            selected === 'all'
              ? "border-[#6F442C] bg-[#6F442C] text-white"
              : "border-[#6F442C]/20 bg-white text-[#6F442C] hover:bg-[#FFF8E7]"
          }`}
        >
          Todos
        </button>
      </div>
    </div>
  );
}
