import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { apiFetch } from "../../utils/api";
import AuthenticatedHeader from "../../components/common/AuthenticatedHeader";
import { HiPlus, HiBookOpen, HiClock, HiCurrencyDollar, HiTag, HiX } from "react-icons/hi2";

export default function CompanyCourses() {
  const location = useLocation();
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('create'); // 'create', 'edit', 'delete'
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    duration: '',
    price: '',
    theme: ''
  });

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const data = await apiFetch('/course/');
      setCourses(data.data || []);
    } catch (err) {
      console.error('Error fetching courses:', err);
      setError('Error al cargar los cursos');
    } finally {
      setLoading(false);
    }
  };

  const openModal = (type, course = null) => {
    setModalType(type);
    setSelectedCourse(course);
    if (type === 'create') {
      setFormData({ title: '', description: '', duration: '', price: '', theme: '' });
    } else if (type === 'edit' && course) {
      setFormData({
        title: course.title || '',
        description: course.description || '',
        duration: course.duration || '',
        price: course.price || '',
        theme: course.theme || ''
      });
    }
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedCourse(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (modalType === 'create') {
        // Simulated create - in real implementation would call apiFetch
        alert('Curso creado (simulación). Cuando integres con backend, descomentá la línea de apiFetch.');
        // await apiFetch('/course/', { method: 'POST', body: formData });
      } else if (modalType === 'edit') {
        // Simulated edit - in real implementation would call apiFetch
        alert('Curso editado (simulación). Cuando integres con backend, descomentá la línea de apiFetch.');
        // await apiFetch(`/course/${selectedCourse.courseId}`, { method: 'PUT', body: formData });
      }

      closeModal();
      // fetchCourses(); // Refresh after real API call
    } catch (err) {
      console.error('Error saving course:', err);
      alert('Error al guardar el curso');
    }
  };

  const handleDelete = async () => {
    try {
      // Simulated delete - in real implementation would call apiFetch
      alert('Curso eliminado (simulación). Cuando integres con backend, descomentá la línea de apiFetch.');
      // await apiFetch(`/course/${selectedCourse.courseId}`, { method: 'DELETE' });

      closeModal();
      // fetchCourses(); // Refresh after real API call
    } catch (err) {
      console.error('Error deleting course:', err);
      alert('Error al eliminar el curso');
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF8E7]">
      <AuthenticatedHeader mode="company" currentPath={location.pathname} />

      <main className="mx-auto w-full max-w-container px-5 py-12 md:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <span className="inline-flex items-center rounded-full bg-[#9B1756]/10 border border-[#9B1756] px-4 py-1 text-xs font-semibold uppercase tracking-wide text-[#9B1756] mb-4">
              Gestión de Cursos
            </span>
            <h1 className="text-3xl font-bold text-[#1F2937] md:text-4xl lg:text-5xl">
              Tus Cursos
            </h1>
            <p className="text-base leading-relaxed text-[#4B5563] mt-3 md:text-lg">
              Creá y administrá los cursos de capacitación para tu empresa.
            </p>
          </div>
          <button
            className="flex items-center gap-2 rounded-xl border-b-4 border-[#E69C00] bg-[#FFD65B] px-5 py-3 text-sm font-semibold text-[#1F2937] transition-transform duration-150 ease-out hover:scale-105"
            onClick={() => openModal('create')}
          >
            <HiPlus className="w-5 h-5" />
            Crear Nuevo Curso
          </button>
        </div>

        {loading && (
          <div className="text-center py-12">
            <p className="text-[#6F442C]">Cargando cursos...</p>
          </div>
        )}

        {error && (
          <div className="bg-[#DC2626]/10 border-b-4 border-[#DC2626] text-[#DC2626] px-6 py-4 rounded-xl mb-6">
            {error}
          </div>
        )}

        {!loading && !error && courses.length > 0 && (
          <div className="space-y-6">
            {courses.map((course) => (
              <article
                key={course.courseId}
                className="rounded-3xl bg-white border-b-4 border-[#E69C00] p-6 transition"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-[#1F2937] mb-3">
                      {course.title}
                    </h3>
                    <p className="text-[#4B5563] leading-relaxed mb-4">{course.description}</p>
                    <div className="flex flex-wrap gap-3">
                      {course.duration && (
                        <div className="flex items-center gap-2 px-3 py-2 bg-[#FFF0C2] rounded-xl border-b-4 border-[#F3B61F]">
                          <HiClock className="w-4 h-4 text-[#E69C00]" />
                          <span className="text-sm font-semibold text-[#1F2937]">{course.duration}h</span>
                        </div>
                      )}
                      {course.price && (
                        <div className="flex items-center gap-2 px-3 py-2 bg-[#10B981]/10 rounded-xl border-b-4 border-[#10B981]">
                          <HiCurrencyDollar className="w-4 h-4 text-[#10B981]" />
                          <span className="text-sm font-semibold text-[#1F2937]">${course.price}</span>
                        </div>
                      )}
                      {course.theme && (
                        <div className="flex items-center gap-2 px-3 py-2 bg-[#0B7285]/10 rounded-xl border-b-4 border-[#0B7285]">
                          <HiTag className="w-4 h-4 text-[#0B7285]" />
                          <span className="text-sm font-semibold text-[#1F2937]">{course.theme}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex lg:flex-col gap-3">
                    <button
                      onClick={() => openModal('edit', course)}
                      className="flex-1 lg:flex-none px-4 py-2 text-sm font-semibold text-[#0B7285] bg-[#0B7285]/10 rounded-xl border-b-4 border-[#0B7285] hover:bg-[#0B7285]/20 transition"
                    >
                      Editar
                    </button>
                    <button
                      onClick={() => openModal('delete', course)}
                      className="flex-1 lg:flex-none px-4 py-2 text-sm font-semibold text-[#DC2626] bg-[#DC2626]/10 rounded-xl border-b-4 border-[#DC2626] hover:bg-[#DC2626]/20 transition"
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {!loading && !error && courses.length === 0 && (
          <section className="rounded-3xl bg-white border-b-4 border-[#E69C00] p-8 md:p-12">
            <div className="text-center">
              <div className="inline-flex p-6 bg-[#FFF0C2] rounded-3xl border-b-4 border-[#E69C00] mb-6">
                <HiBookOpen className="w-16 h-16 text-[#E69C00]" />
              </div>
              <h2 className="text-2xl font-bold text-[#1F2937] mb-3">
                Aún no has creado cursos
              </h2>
              <p className="text-[#4B5563] max-w-md mx-auto mb-6">
                Creá tu primer curso para comenzar a ofrecer capacitación a candidatos y empleados.
              </p>
              <button
                onClick={() => openModal('create')}
                className="inline-flex items-center gap-2 rounded-xl border-b-4 border-[#E69C00] bg-[#FFD65B] px-6 py-3 text-sm font-semibold text-[#1F2937] transition-transform duration-150 ease-out hover:scale-105"
              >
                <HiPlus className="w-5 h-5" />
                Crear Mi Primer Curso
              </button>
            </div>
          </section>
        )}
      </main>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl border-b-4 border-[#E69C00] w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-[#1F2937]">
                  {modalType === 'create' && 'Crear Nuevo Curso'}
                  {modalType === 'edit' && 'Editar Curso'}
                  {modalType === 'delete' && 'Eliminar Curso'}
                </h2>
                <button onClick={closeModal} className="p-2 hover:bg-[#FFF8E7] rounded-xl transition">
                  <HiX className="w-6 h-6 text-[#4B5563]" />
                </button>
              </div>

              {modalType === 'delete' ? (
                <div>
                  <p className="text-[#4B5563] mb-6">
                    ¿Estás seguro de que querés eliminar el curso <strong>"{selectedCourse?.title}"</strong>?
                    Esta acción no se puede deshacer.
                  </p>
                  <div className="flex gap-3 justify-end">
                    <button
                      onClick={closeModal}
                      className="px-5 py-2 rounded-xl bg-[#FFF8E7] border-b-4 border-[#E69C00] text-[#1F2937] font-semibold hover:bg-[#FFF0C2] transition"
                    >
                      Cancelar
                    </button>
                    <button
                      onClick={handleDelete}
                      className="px-5 py-2 rounded-xl bg-[#DC2626] border-b-4 border-[#991B1B] text-white font-semibold hover:bg-[#B91C1C] transition"
                    >
                      Eliminar Curso
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-[#2F1C10] mb-2">
                      Título del Curso <span className="text-[#DC2626]">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-[#E69C00] rounded-xl bg-white text-[#1F2937] focus:outline-none focus:ring-2 focus:ring-[#FFD65B]"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#2F1C10] mb-2">
                      Descripción
                    </label>
                    <textarea
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-[#E69C00] rounded-xl bg-white text-[#1F2937] focus:outline-none focus:ring-2 focus:ring-[#FFD65B] resize-none"
                      rows="4"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-[#2F1C10] mb-2">
                        Duración (horas)
                      </label>
                      <input
                        type="number"
                        value={formData.duration}
                        onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                        className="w-full px-4 py-3 border-2 border-[#E69C00] rounded-xl bg-white text-[#1F2937] focus:outline-none focus:ring-2 focus:ring-[#FFD65B]"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-[#2F1C10] mb-2">
                        Precio (USD)
                      </label>
                      <input
                        type="number"
                        value={formData.price}
                        onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                        className="w-full px-4 py-3 border-2 border-[#E69C00] rounded-xl bg-white text-[#1F2937] focus:outline-none focus:ring-2 focus:ring-[#FFD65B]"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-[#2F1C10] mb-2">
                        Tema
                      </label>
                      <input
                        type="text"
                        value={formData.theme}
                        onChange={(e) => setFormData({ ...formData, theme: e.target.value })}
                        className="w-full px-4 py-3 border-2 border-[#E69C00] rounded-xl bg-white text-[#1F2937] focus:outline-none focus:ring-2 focus:ring-[#FFD65B]"
                      />
                    </div>
                  </div>

                  <div className="flex gap-3 justify-end pt-4">
                    <button
                      type="button"
                      onClick={closeModal}
                      className="px-5 py-2 rounded-xl bg-[#FFF8E7] border-b-4 border-[#E69C00] text-[#1F2937] font-semibold hover:bg-[#FFF0C2] transition"
                    >
                      Cancelar
                    </button>
                    <button
                      type="submit"
                      className="px-5 py-2 rounded-xl bg-[#FFD65B] border-b-4 border-[#E69C00] text-[#1F2937] font-semibold hover:bg-[#FFC933] transition"
                    >
                      {modalType === 'create' ? 'Crear Curso' : 'Guardar Cambios'}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
