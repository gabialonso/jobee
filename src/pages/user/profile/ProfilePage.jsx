import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { apiFetch } from "../../utils/api";
import { getUser } from "../../utils/auth";
import { mockApi } from "../../utils/mockData";
import AuthenticatedHeader from "../../components/features/navigation/AuthenticatedHeader";
import CourseProgressCard from "../../components/features/courses/CourseProgressCard";
import { FiEdit2, FiLinkedin, FiFileText, FiCamera, FiX, FiCheck } from "react-icons/fi";

export default function UserProfile() {
  const location = useLocation();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    birthday: '',
    Ci: '',
    highSchool: '',
    description: '',
    cv: '',
    linkedin: '',
    profilePhoto: '',
    bannerPhoto: ''
  });
  const [personId, setPersonId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const user = getUser();
        if (!user?.id) {
          setMessage('User not found');
          setLoading(false);
          return;
        }

        const data = await apiFetch(`/person/user/${user.id}`);

        if (data.data && data.data.length > 0) {
          const person = data.data[0];
          setPersonId(person.personId);
          setFormData({
            firstName: person.firstName || '',
            lastName: person.lastName || '',
            birthday: person.birthday || '',
            Ci: person.Ci || '',
            highSchool: person.highSchool || '',
            description: person.description || '',
            cv: person.cv || '',
            linkedin: person.linkedin || '',
            profilePhoto: person.profilePhoto || '',
            bannerPhoto: person.bannerPhoto || ''
          });
          setIsEditing(true);

          const coursesData = await mockApi.getUserCourses(user.id);
          if (coursesData.success) {
            setCourses(coursesData.data);
          }
        }
      } catch (err) {
        console.error('Error loading profile:', err);
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
      if (isEditing && personId) {
        await apiFetch(`/person/${personId}`, {
          method: 'PUT',
          body: formData
        });
        setMessage('Perfil actualizado exitosamente');
      } else {
        const data = await apiFetch('/person/', {
          method: 'POST',
          body: formData
        });
        setPersonId(data.data.personId);
        setIsEditing(true);
        setMessage('Perfil creado exitosamente');
      }
      setEditMode(false);
    } catch (err) {
      console.error('Error saving profile:', err);
      setMessage(`Error: ${err.message || 'Failed to save profile'}`);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#FFF8E7] flex items-center justify-center">
        <p className="text-[#6F442C]">Cargando perfil...</p>
      </div>
    );
  }

  const fullName = formData.firstName && formData.lastName
    ? `${formData.firstName} ${formData.lastName}`
    : 'Tu Nombre';

  return (
    <div className="min-h-screen bg-[#FFF8E7]">
      <AuthenticatedHeader
        mode="user"
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
          <div className="relative h-48 md:h-64 bg-gradient-to-r from-[#FFD65B] via-[#FFF0C2] to-[#FFD65B]">
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
                <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-2xl border-4 border-white bg-[#FFF0C2] overflow-hidden">
                  {formData.profilePhoto ? (
                    <img
                      src={formData.profilePhoto}
                      alt={fullName}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-4xl md:text-5xl font-bold text-[#E69C00]">
                      {formData.firstName?.[0] || 'U'}
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
                  <h1 className="text-2xl md:text-3xl font-bold text-[#1F2937]">{fullName}</h1>
                  <p className="text-base text-[#4B5563] mt-1">
                    {formData.highSchool || 'Estudiante en Jobee'}
                  </p>
                  <div className="flex gap-3 mt-3">
                    {formData.linkedin && (
                      <a
                        href={formData.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-xl bg-[#FFF8E7] border-b-4 border-[#0B7285] text-[#0B7285] transition-transform duration-150 ease-out hover:scale-110"
                      >
                        <FiLinkedin className="w-5 h-5" />
                      </a>
                    )}
                    {formData.cv && (
                      <a
                        href={formData.cv}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-xl bg-[#FFF8E7] border-b-4 border-[#DC2626] text-[#DC2626] transition-transform duration-150 ease-out hover:scale-110"
                      >
                        <FiFileText className="w-5 h-5" />
                      </a>
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
              <h2 className="text-2xl font-bold text-[#1F2937] mb-6">Información Personal</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-[#2F1C10] mb-2">
                    Nombre <span className="text-[#DC2626]">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="w-full px-4 py-3 border-b-4 border-[#E69C00] rounded-xl bg-white text-[#1F2937] focus:outline-none focus:ring-2 focus:ring-[#F3B61F] transition"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#2F1C10] mb-2">
                    Apellido <span className="text-[#DC2626]">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="w-full px-4 py-3 border-b-4 border-[#E69C00] rounded-xl bg-white text-[#1F2937] focus:outline-none focus:ring-2 focus:ring-[#F3B61F] transition"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#2F1C10] mb-2">
                    Año de Nacimiento
                  </label>
                  <input
                    type="number"
                    value={formData.birthday}
                    onChange={(e) => setFormData({ ...formData, birthday: e.target.value })}
                    className="w-full px-4 py-3 border-b-4 border-[#E69C00] rounded-xl bg-white text-[#1F2937] focus:outline-none focus:ring-2 focus:ring-[#F3B61F] transition"
                    placeholder="2000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#2F1C10] mb-2">
                    CI (Cédula de Identidad)
                  </label>
                  <input
                    type="number"
                    value={formData.Ci}
                    onChange={(e) => setFormData({ ...formData, Ci: e.target.value })}
                    className="w-full px-4 py-3 border-b-4 border-[#E69C00] rounded-xl bg-white text-[#1F2937] focus:outline-none focus:ring-2 focus:ring-[#F3B61F] transition"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-[#2F1C10] mb-2">
                    Liceo o Institución
                  </label>
                  <input
                    type="text"
                    value={formData.highSchool}
                    onChange={(e) => setFormData({ ...formData, highSchool: e.target.value })}
                    className="w-full px-4 py-3 border-b-4 border-[#E69C00] rounded-xl bg-white text-[#1F2937] focus:outline-none focus:ring-2 focus:ring-[#F3B61F] transition"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-[#2F1C10] mb-2">
                    Descripción Personal
                  </label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full px-4 py-3 border-b-4 border-[#E69C00] rounded-xl bg-white text-[#1F2937] focus:outline-none focus:ring-2 focus:ring-[#F3B61F] transition resize-none"
                    rows="4"
                    placeholder="Cuéntanos sobre ti, tus habilidades y experiencia..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#2F1C10] mb-2">
                    URL del CV
                  </label>
                  <input
                    type="url"
                    value={formData.cv}
                    onChange={(e) => setFormData({ ...formData, cv: e.target.value })}
                    className="w-full px-4 py-3 border-b-4 border-[#E69C00] rounded-xl bg-white text-[#1F2937] focus:outline-none focus:ring-2 focus:ring-[#F3B61F] transition"
                    placeholder="https://..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#2F1C10] mb-2">
                    Perfil de LinkedIn
                  </label>
                  <input
                    type="url"
                    value={formData.linkedin}
                    onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                    className="w-full px-4 py-3 border-b-4 border-[#E69C00] rounded-xl bg-white text-[#1F2937] focus:outline-none focus:ring-2 focus:ring-[#F3B61F] transition"
                    placeholder="https://linkedin.com/in/..."
                  />
                </div>
              </div>
            </section>
          </form>
        ) : (
          <div className="space-y-8">
            <section className="rounded-3xl bg-[#FFF0C2] p-6 md:p-8">
              <h2 className="text-2xl font-bold text-[#1F2937] mb-4">Sobre mí</h2>
              <p className="text-base leading-relaxed text-[#4B5563]">
                {formData.description || 'Aún no has agregado una descripción personal. Editá tu perfil para agregar información sobre ti.'}
              </p>

              {formData.birthday && (
                <div className="mt-6 pt-6 border-t-2 border-[#FFD65B]">
                  <h3 className="text-sm font-semibold text-[#6F442C] mb-3">Información adicional</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs text-[#4B5563] mb-1">Año de Nacimiento</p>
                      <p className="text-base font-semibold text-[#1F2937]">{formData.birthday}</p>
                    </div>
                    {formData.Ci && (
                      <div>
                        <p className="text-xs text-[#4B5563] mb-1">Cédula</p>
                        <p className="text-base font-semibold text-[#1F2937]">{formData.Ci}</p>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </section>

            <section className="rounded-3xl bg-[#FFF8E7] p-6 md:p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-[#1F2937]">Mis Cursos</h2>
                  <p className="text-sm text-[#4B5563] mt-1">
                    Tu progreso de aprendizaje
                  </p>
                </div>
                <span className="text-sm font-semibold text-[#9B1756] bg-[#9B1756]/10 border border-[#9B1756] px-3 py-1 rounded-full">
                  {courses.filter(c => c.status === 'completed').length} Completados
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {courses.map((course) => (
                  <CourseProgressCard key={course.id} course={course} />
                ))}
              </div>

              {courses.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-[#4B5563]">Aún no estás inscripto en ningún curso.</p>
                  <a
                    href="/user/courses"
                    className="inline-block mt-4 px-6 py-2 rounded-xl bg-[#FFD65B] border-b-4 border-[#E69C00] text-[#1F2937] font-semibold transition-transform duration-150 ease-out hover:scale-105"
                  >
                    Explorar Cursos
                  </a>
                </div>
              )}
            </section>
          </div>
        )}
      </main>
    </div>
  );
}
