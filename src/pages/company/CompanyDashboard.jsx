import { useLocation } from "react-router-dom";
import { getUser } from "../../utils/auth";
import Header from "../../components/common/Header";
import StatCard from "../../components/common/StatCard";
import ActionCard from "../../components/common/ActionCard";
import { HiUsers, HiBriefcase, HiBookOpen, HiUser, HiPlus, HiMagnifyingGlass, HiChatBubbleLeftRight } from "react-icons/hi2";

export default function CompanyDashboard() {
  const user = getUser();
  const location = useLocation();

  return (
    <div className="min-h-screen bg-[#FFF8E7]">
      <Header
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
              value="-"
              icon={HiUsers}
              borderColor="border-[#0B7285]"
              iconBgColor="bg-[#0B7285]/10"
              iconColor="text-[#0B7285]"
            />
            <StatCard
              label="Ofertas Activas"
              value="-"
              icon={HiBriefcase}
              borderColor="border-[#10B981]"
              iconBgColor="bg-[#10B981]/10"
              iconColor="text-[#10B981]"
            />
            <StatCard
              label="Cursos Publicados"
              value="-"
              icon={HiBookOpen}
              borderColor="border-[#DC2626]"
              iconBgColor="bg-[#DC2626]/10"
              iconColor="text-[#DC2626]"
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
              borderColor="border-[#F3B61F]"
              iconBorderColor="border-[#E69C00]"
              iconColor="text-[#E69C00]"
            />
            <ActionCard
              to="/company/courses"
              icon={HiPlus}
              title="Gestionar Cursos"
              description="Creá y administrá cursos de capacitación"
              borderColor="border-[#DC2626]"
              iconBorderColor="border-[#DC2626]"
              iconColor="text-[#DC2626]"
            />
            <ActionCard
              to="/company/users"
              icon={HiMagnifyingGlass}
              title="Buscar Candidatos"
              description="Encontrá el talento ideal para tu empresa"
              borderColor="border-[#0B7285]"
              iconBorderColor="border-[#0B7285]"
              iconColor="text-[#0B7285]"
            />
            <ActionCard
              to="/company/contacts"
              icon={HiChatBubbleLeftRight}
              title="Mensajes"
              description="Gestioná tu comunicación con candidatos"
              borderColor="border-[#10B981]"
              iconBorderColor="border-[#10B981]"
              iconColor="text-[#10B981]"
            />
          </div>
        </section>
      </main>
    </div>
  );
}
