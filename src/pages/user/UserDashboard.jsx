import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { apiFetch } from "../../utils/api.js";
import AuthenticatedHeader from "../../components/features/navigation/AuthenticatedHeader";
import ActionCard from "../../components/common/ActionCard";
import { HiUser, HiBookOpen, HiBuildingOffice2, HiChatBubbleLeftRight } from "react-icons/hi2";

export default function UserDashboard() {
  const location = useLocation();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        // fetch user profile from backend
        const data = await apiFetch('/users/profile');
        setProfile(data.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  return (
    <div className="min-h-screen bg-[#FFF8E7]">
      <AuthenticatedHeader
        mode="user"
        currentPath={location.pathname}
      />

      {/* Main content */}
      <main className="mx-auto w-full max-w-container px-5 py-12 md:px-8 lg:px-12">
        <div className="mb-10">
          <span className="inline-flex items-center rounded-full bg-[#9B1756]/10 border border-[#9B1756] px-4 py-1 text-xs font-semibold uppercase tracking-wide text-[#9B1756] mb-4">
            Panel de Usuario
          </span>
          <h1 className="text-3xl font-bold text-[#1F2937] md:text-4xl lg:text-5xl">
            ¡Hola{profile?.name ? `, ${profile.name}` : ''}!
          </h1>
          <p className="text-base leading-relaxed text-[#4B5563] mt-3 md:text-lg">
            Acá podés ver tu progreso, explorar oportunidades y gestionar tu perfil profesional.
          </p>
        </div>

        {loading && (
          <div className="text-center py-12">
            <p className="text-[#6F442C]">Cargando tu perfil...</p>
          </div>
        )}

        {error && (
          <div className="bg-[#DC2626]/10 border-b-4 border-[#DC2626] text-[#DC2626] px-6 py-4 rounded-xl mb-6">
            Error: {error}
          </div>
        )}

        {profile && (
          <>
            <section className="grid gap-6 rounded-3xl bg-[#FFF0C2] p-6 mb-12 md:p-8">
              <h2 className="text-2xl font-bold text-[#1F2937] md:text-3xl">Tu Información</h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <article className="flex flex-col gap-2 rounded-2xl border-b-4 border-[#E69C00] bg-white px-5 py-4">
                  <span className="text-xs font-medium uppercase tracking-wide text-[#4B5563]">ID de Usuario</span>
                  <span className="text-lg font-bold text-[#1F2937]">{profile.id}</span>
                </article>
                <article className="flex flex-col gap-2 rounded-2xl border-b-4 border-[#E69C00] bg-white px-5 py-4">
                  <span className="text-xs font-medium uppercase tracking-wide text-[#4B5563]">Email</span>
                  <span className="text-lg font-bold text-[#1F2937] truncate">{profile.email}</span>
                </article>
                <article className="flex flex-col gap-2 rounded-2xl border-b-4 border-[#E69C00] bg-white px-5 py-4 sm:col-span-2 lg:col-span-1">
                  <span className="text-xs font-medium uppercase tracking-wide text-[#4B5563]">Nombre</span>
                  <span className="text-lg font-bold text-[#1F2937]">{profile.name}</span>
                </article>
              </div>
            </section>

            {/* Quick Actions */}
            <section className="grid gap-6 rounded-3xl bg-[#FFF8E7] p-6 md:p-8">
              <header className="flex flex-col gap-2">
                <p className="text-sm font-semibold uppercase tracking-wide text-[#9B1756]">Acceso Rápido</p>
                <h2 className="text-2xl font-bold text-[#1F2937] md:text-3xl">¿Qué querés hacer hoy?</h2>
              </header>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <ActionCard
                  to="/user/profile"
                  icon={HiUser}
                  title="Editar Perfil"
                  description="Actualizá tu información profesional"
                  color="#F5C34D"
                />
                <ActionCard
                  to="/user/courses"
                  icon={HiBookOpen}
                  title="Ver Cursos"
                  description="Explorá cursos para tu desarrollo"
                  color="#2A8A9E"
                />
                <ActionCard
                  to="/user/company"
                  icon={HiBuildingOffice2}
                  title="Empresas"
                  description="Descubrí oportunidades laborales"
                  color="#E84D4D"
                />
                <ActionCard
                  to="/user/contacts"
                  icon={HiChatBubbleLeftRight}
                  title="Mensajes"
                  description="Gestioná tus contactos"
                  color="#2A8A9E"
                />
              </div>
            </section>
          </>
        )}

        {!loading && !error && !profile && (
          <div className="bg-[#F3B61F]/20 border-b-4 border-[#F3B61F] text-[#6F442C] px-6 py-4 rounded-xl">
            Por favor inicia sesión para ver tu dashboard
          </div>
        )}
      </main>
    </div>
  );
}
