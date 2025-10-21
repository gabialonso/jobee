import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getUser } from "../../utils/auth";
import { apiFetch } from "../../utils/api";
import { mockApi } from "../../utils/mockData";
import AuthenticatedHeader from "../../components/features/navigation/AuthenticatedHeader";
import StatCard from "../../components/common/StatCard";
import ActionCard from "../../components/common/ActionCard";
import { HiUsers, HiBriefcase, HiBookOpen, HiUser, HiPlus, HiMagnifyingGlass, HiChatBubbleLeftRight } from "react-icons/hi2";

export default function CompanyDashboard() {
  const user = getUser();
  const location = useLocation();
  const [stats, setStats] = useState({
    totalCandidates: '-',
    activeJobs: '-',
    publishedCourses: '-'
  });

  useEffect(() => {
    const loadStats = async () => {
      try {
        const user = getUser();
        if (!user?.id) return;

        // Obtener companyId del usuario
        const companyData = await apiFetch(`/company/user/${user.id}`);
        if (companyData.data && companyData.data.length > 0) {
          const company = companyData.data[0];

          // Cargar estadísticas (datos simulados)
          const statsData = await mockApi.getCompanyStats(company.companyId);
          if (statsData.success) {
            setStats(statsData.data);
          }
        }
      } catch (err) {
        console.error('Error loading stats:', err);
      }
    };

    loadStats();
  }, []);

  return (
    <div className="min-h-screen bg-[#FFF8E7]">
      <AuthenticatedHeader
        mode="company"
        currentPath={location.pathname}
      />

      {/* Main content */}
      <main className="mx-auto w-full max-w-container px-5 py-12 md:px-8 lg:px-12">
        <div className="mb-10">
          <span className="inline-flex items-center rounded-full bg-[#9B1756]/10 border border-[#9B1756] px-4 py-1 text-xs font-semibold uppercase tracking-wide text-[#9B1756] mb-4">
            Panel de Empresa
          </span>
          <h1 className="text-3xl font-bold text-[#1F2937] md:text-4xl lg:text-5xl">
            Dashboard de Empresa
          </h1>
          <p className="text-base leading-relaxed text-[#4B5563] mt-3 md:text-lg">
            Bienvenido, {user?.email || 'Empresa'}
          </p>
        </div>

        {/* Stats Grid */}
        <section className="grid gap-6 rounded-3xl bg-[#FFF0C2] p-6 mb-12 md:p-8">
          <h2 className="text-2xl font-bold text-[#1F2937] md:text-3xl">Estadísticas</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StatCard
              label="Total de Candidatos"
              value={stats.totalCandidates}
              icon={HiUsers}
              color="#2A8A9E"
            />
            <StatCard
              label="Ofertas Activas"
              value={stats.activeJobs}
              icon={HiBriefcase}
              color="#F5C34D"
            />
            <StatCard
              label="Cursos Publicados"
              value={stats.publishedCourses}
              icon={HiBookOpen}
              color="#E84D4D"
            />
          </div>
        </section>

        {/* Quick Actions */}
        <section className="grid gap-6 rounded-3xl bg-[#FFF8E7] p-6 md:p-8">
          <header className="flex flex-col gap-2">
            <p className="text-sm font-semibold uppercase tracking-wide text-[#9B1756]">Acceso Rápido</p>
            <h2 className="text-2xl font-bold text-[#1F2937] md:text-3xl">Acciones Rápidas</h2>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <ActionCard
              to="/company/profile"
              icon={HiUser}
              title="Editar Perfil"
              description="Actualizá la información de tu empresa"
              color="#F5C34D"
            />
            <ActionCard
              to="/company/courses"
              icon={HiPlus}
              title="Gestionar Cursos"
              description="Creá y administrá cursos de capacitación"
              color="#E84D4D"
            />
            <ActionCard
              to="/company/users"
              icon={HiMagnifyingGlass}
              title="Buscar Candidatos"
              description="Encontrá el talento ideal para tu empresa"
              color="#2A8A9E"
            />
            <ActionCard
              to="/company/contacts"
              icon={HiChatBubbleLeftRight}
              title="Mensajes"
              description="Gestioná tu comunicación con candidatos"
              color="#2A8A9E"
            />
          </div>
        </section>
      </main>
    </div>
  );
}
