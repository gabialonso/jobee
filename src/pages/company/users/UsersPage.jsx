import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { apiFetch } from "../../../utils/api";
import { mockApi } from "../../../utils/mockData";
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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCandidates = async () => {
      try {
        const people = await apiFetch('/person/');
        if (!Array.isArray(people)) {
          throw new Error('Respuesta inválida del servidor');
        }
        const normalized = people.map((person) => ({
          ...person,
          completedCourses: Array.isArray(person.completedCourses) ? person.completedCourses : [],
          inProgressCourses: Array.isArray(person.inProgressCourses) ? person.inProgressCourses : [],
        }));
        setCandidates(normalized);
        setFilteredCandidates(normalized);
      } catch (err) {
        console.error('Error loading candidates:', err);
        const mockData = await mockApi.getCandidates();
        if (mockData.success) {
          setCandidates(mockData.data);
          setFilteredCandidates(mockData.data);
        }
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
        <PageHeader
          badge="Gestión de Candidatos"
          title="Candidatos"
          description="Gestioná y encontrá el talento ideal para tu empresa."
        />

        <div className="mb-6">
          <SearchBar
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Buscar por nombre, liceo o curso..."
            className="max-w-md"
          />
        </div>

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

        {filteredCandidates.length === 0 ? (
          <EmptyState
            icon={HiUsers}
            title="No se encontraron candidatos"
            description="Intentá con otros términos de búsqueda."
          />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCandidates.map((candidate) => (
              <CandidateCard key={candidate.id} candidate={candidate} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
