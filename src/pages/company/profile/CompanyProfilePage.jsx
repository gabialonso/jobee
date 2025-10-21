import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { apiFetch } from "../../utils/api";
import { getUser } from "../../utils/auth";
import { mockApi } from "../../utils/mockData";
import AuthenticatedHeader from "../../components/features/navigation/AuthenticatedHeader";
import StatCard from "../../components/common/StatCard";
import { HiUsers, HiBriefcase, HiBookOpen } from "react-icons/hi2";
import { FiEdit2, FiGlobe, FiMapPin, FiCamera, FiX, FiCheck } from "react-icons/fi";

export default function CompanyProfile() {
  const location = useLocation();
  const [formData, setFormData] = useState({
    rut: '',
    name: '',
    legalReason: '',
    groupName: '',
    subGroupName: '',
    description: '',
    industry: '',
    website: '',
    location: '',
    logoPhoto: '',
    bannerPhoto: ''
  });
  const [companyId, setCompanyId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [stats, setStats] = useState({
    totalCandidates: '-',
    activeJobs: '-',
    publishedCourses: '-'
  });

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const user = getUser();
        if (!user?.id) {
          setMessage('User not found');
          setLoading(false);
          return;
        }

        const data = await apiFetch(`/company/user/${user.id}`);

        if (data.data && data.data.length > 0) {
          const company = data.data[0];
          setCompanyId(company.companyId);
          setFormData({
            rut: company.rut || '',
            name: company.name || '',
            legalReason: company.legalReason || '',
            groupName: company.groupName || '',
            subGroupName: company.subGroupName || '',
            description: company.description || '',
            industry: company.industry || '',
            website: company.website || '',
            location: company.location || '',
            logoPhoto: company.logoPhoto || '',
            bannerPhoto: company.bannerPhoto || ''
          });
          setIsEditing(true);

          const statsData = await mockApi.getCompanyStats(company.companyId);
          if (statsData.success) {
            setStats(statsData.data);
          }
        }
      } catch (err) {
        console.error('Error loading company profile:', err);
      } finally {
        setLoading(false);
      }
    };

    loadProfile();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    try {
      if (isEditing && companyId) {
        await apiFetch(`/company/${companyId}`, {
          method: 'PUT',
          body: formData
        });
        setMessage('Perfil de empresa actualizado exitosamente');
      } else {
        const data = await apiFetch('/company/', {
          method: 'POST',
          body: formData
        });
        setCompanyId(data.data.companyId);
        setIsEditing(true);
        setMessage('Perfil de empresa creado exitosamente');
      }
      setEditMode(false);
    } catch (err) {
      console.error('Error saving company profile:', err);
      setMessage(`Error: ${err.message || 'Failed to save company profile'}`);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#FFF8E7] flex items-center justify-center">
        <p className="text-[#6F442C]">Cargando perfil de empresa...</p>
      </div>
    );
  }

  const companyName = formData.name || 'Tu Empresa';

  return (
    <div className="min-h-screen bg-[#FFF8E7]">
      <AuthenticatedHeader
        mode="company"
        currentPath={location.pathname}
      />

      <main className="mx-auto w-full max-w-container px-5 py-10 md:px-8 lg:px-12">
        {message && (
          <div className={`mb-6 px-6 py-4 rounded-xl border-b-4 ${message.includes('Error') || message.includes('error')
              ? 'bg-[#DC2626]/10 border-[#DC2626] text-[#DC2626]'
              : 'bg-[#10B981]/10 border-[#10B981] text-[#10B981]'
            }`}>
            {message}
          </div>
        )}

        <section className="relative mb-8 rounded-3xl overflow-hidden bg-white border-b-4 border-[#E69C00]">
          <div className="relative h-48 md:h-64 bg-gradient-to-r from-[#0B7285] via-[#10B981] to-[#0B7285]">
            {formData.bannerPhoto && (
              <img
                src={formData.bannerPhoto}
                alt="Banner"
                className="w-full h-full object-cover"
              />
            )}
            {editMode && (
              <button
                type="button"
                className="absolute top-4 right-4 p-3 bg-white/90 rounded-xl border-b-4 border-[#E69C00] text-[#1F2937]"
              >
                <FiCamera className="w-5 h-5" />
              </button>
            )}
          </div>

          <div className="relative px-6 pb-6 md:px-8">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <div className="relative -mt-16 md:-mt-20">
                <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-2xl border-4 border-white bg-white overflow-hidden">
                  {formData.logoPhoto ? (
                    <img
                      src={formData.logoPhoto}
                      alt={companyName}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-4xl md:text-5xl font-bold text-[#E69C00] bg-[#FFF0C2]">
                      {formData.name?.[0] || 'E'}
                    </div>
                  )}
                  {editMode && (
                    <button
                      type="button"
                      className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 hover:opacity-100"
                    >
                      <FiCamera className="w-6 h-6 text-white" />
                    </button>
                  )}
                </div>
              </div>

              <div className="flex-1 flex flex-col md:flex-row md:items-end md:justify-between gap-4 pt-2">
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold text-[#1F2937]">{companyName}</h1>
                  <p className="text-base text-[#4B5563] mt-1">
                    {formData.industry || 'Industria'} {formData.location && `• ${formData.location}`}
                  </p>
                  <div className="flex gap-3 mt-3">
                    {formData.website && (
                      <a
                        href={formData.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-2 rounded-xl bg-[#FFF8E7] border-b-4 border-[#0B7285] text-[#0B7285] transition-transform duration-150 ease-out hover:scale-105 text-sm font-semibold"
                      >
                        <FiGlobe className="w-4 h-4" />
                        Sitio Web
                      </a>
                    )}
                    {formData.location && (
                      <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-[#FFF8E7] border-b-4 border-[#DC2626] text-[#DC2626] text-sm font-semibold">
                        <FiMapPin className="w-4 h-4" />
                        {formData.location}
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-3 self-start md:self-auto">
                  <button
                    onClick={() => setEditMode(!editMode)}
                    className={`px-5 py-2 rounded-xl border-b-4 font-semibold flex items-center gap-2 transition-all duration-150 ease-out hover:scale-105 hover:bg-[#FFF8E7] ${
                      editMode
                        ? 'bg-[#FCE7F3] border-[#9B1756] text-[#9B1756]'
                        : 'bg-[#FFF0C2] border-[#E69C00] text-[#1F2937]'
                    }`}
                  >
                    {editMode ? <FiX className="w-4 h-4" /> : <FiEdit2 className="w-4 h-4" />}
                    {editMode ? 'Cancelar' : 'Editar Perfil'}
                  </button>

                  {editMode && (
                    <button
                      onClick={handleSubmit}
                      className="px-5 py-2 rounded-xl border-b-4 border-[#2A8B9F] bg-[#D4E9EC] text-[#2A8B9F] font-semibold flex items-center gap-2 transition-all duration-150 ease-out hover:scale-105 hover:bg-[#FFF8E7]"
                    >
                      <FiCheck className="w-4 h-4" />
                      Guardar
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {editMode ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <section className="rounded-3xl bg-[#FFF0C2] p-6 md:p-8">
              <h2 className="text-2xl font-bold text-[#1F2937] mb-6">Información de la Empresa</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-[#2F1C10] mb-2">
                    Nombre de la Empresa <span className="text-[#DC2626]">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border-b-4 border-[#E69C00] rounded-xl bg-white text-[#1F2937] focus:outline-none focus:ring-2 focus:ring-[#F3B61F] transition"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#2F1C10] mb-2">
                    RUT <span className="text-[#DC2626]">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.rut}
                    onChange={(e) => setFormData({ ...formData, rut: e.target.value })}
                    className="w-full px-4 py-3 border-b-4 border-[#E69C00] rounded-xl bg-white text-[#1F2937] focus:outline-none focus:ring-2 focus:ring-[#F3B61F] transition"
                    required
                    placeholder="12-34567890-1"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#2F1C10] mb-2">
                    Razón Social
                  </label>
                  <input
                    type="text"
                    value={formData.legalReason}
                    onChange={(e) => setFormData({ ...formData, legalReason: e.target.value })}
                    className="w-full px-4 py-3 border-b-4 border-[#E69C00] rounded-xl bg-white text-[#1F2937] focus:outline-none focus:ring-2 focus:ring-[#F3B61F] transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#2F1C10] mb-2">
                    Industria
                  </label>
                  <input
                    type="text"
                    value={formData.industry}
                    onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                    className="w-full px-4 py-3 border-b-4 border-[#E69C00] rounded-xl bg-white text-[#1F2937] focus:outline-none focus:ring-2 focus:ring-[#F3B61F] transition"
                    placeholder="Tecnología, Retail, etc."
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#2F1C10] mb-2">
                    Ubicación
                  </label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-4 py-3 border-b-4 border-[#E69C00] rounded-xl bg-white text-[#1F2937] focus:outline-none focus:ring-2 focus:ring-[#F3B61F] transition"
                    placeholder="Montevideo, Uruguay"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#2F1C10] mb-2">
                    Sitio Web
                  </label>
                  <input
                    type="url"
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    className="w-full px-4 py-3 border-b-4 border-[#E69C00] rounded-xl bg-white text-[#1F2937] focus:outline-none focus:ring-2 focus:ring-[#F3B61F] transition"
                    placeholder="https://..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#2F1C10] mb-2">
                    Nombre del Grupo
                  </label>
                  <input
                    type="text"
                    value={formData.groupName}
                    onChange={(e) => setFormData({ ...formData, groupName: e.target.value })}
                    className="w-full px-4 py-3 border-b-4 border-[#E69C00] rounded-xl bg-white text-[#1F2937] focus:outline-none focus:ring-2 focus:ring-[#F3B61F] transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#2F1C10] mb-2">
                    Nombre del Subgrupo
                  </label>
                  <input
                    type="text"
                    value={formData.subGroupName}
                    onChange={(e) => setFormData({ ...formData, subGroupName: e.target.value })}
                    className="w-full px-4 py-3 border-b-4 border-[#E69C00] rounded-xl bg-white text-[#1F2937] focus:outline-none focus:ring-2 focus:ring-[#F3B61F] transition"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-[#2F1C10] mb-2">
                    Descripción de la Empresa
                  </label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full px-4 py-3 border-b-4 border-[#E69C00] rounded-xl bg-white text-[#1F2937] focus:outline-none focus:ring-2 focus:ring-[#F3B61F] transition resize-none"
                    rows="4"
                    placeholder="Describí tu empresa, su misión y valores..."
                  />
                </div>
              </div>
            </section>
          </form>
        ) : (
          <div className="space-y-8">
            <section className="rounded-3xl bg-[#FFF0C2] p-6 md:p-8">
              <h2 className="text-2xl font-bold text-[#1F2937] mb-4">Sobre la Empresa</h2>
              <p className="text-base leading-relaxed text-[#4B5563]">
                {formData.description || 'Aún no has agregado una descripción de tu empresa. Editá tu perfil para agregar información sobre tu organización.'}
              </p>

              {(formData.legalReason || formData.groupName || formData.subGroupName) && (
                <div className="mt-6 pt-6 border-t-2 border-[#FFD65B]">
                  <h3 className="text-sm font-semibold text-[#6F442C] mb-3">Información Legal</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {formData.legalReason && (
                      <div>
                        <p className="text-xs text-[#4B5563] mb-1">Razón Social</p>
                        <p className="text-base font-semibold text-[#1F2937]">{formData.legalReason}</p>
                      </div>
                    )}
                    {formData.groupName && (
                      <div>
                        <p className="text-xs text-[#4B5563] mb-1">Grupo</p>
                        <p className="text-base font-semibold text-[#1F2937]">{formData.groupName}</p>
                      </div>
                    )}
                    {formData.subGroupName && (
                      <div>
                        <p className="text-xs text-[#4B5563] mb-1">Subgrupo</p>
                        <p className="text-base font-semibold text-[#1F2937]">{formData.subGroupName}</p>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </section>

            <section className="rounded-3xl bg-[#FFF8E7] p-6 md:p-8">
              <h2 className="text-2xl font-bold text-[#1F2937] mb-6">Estadísticas</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <StatCard
                  label="Candidatos Contactados"
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
          </div>
        )}
      </main>
    </div>
  );
}
