import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { apiFetch } from "../../utils/api";
import AuthenticatedHeader from "../../components/features/navigation/AuthenticatedHeader";
import PageHeader from "../../components/features/shared/PageHeader";
import EmptyState from "../../components/common/EmptyState";
import CourseModal from "../../components/features/courses/CourseModal";
import { HiPlus, HiBookOpen, HiClock, HiCurrencyDollar, HiTag } from "react-icons/hi2";

export default function CompanyCourses() {
  const location = useLocation();
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('create');
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
        // backend: descomentar la siguiente línea para crear curso
        // await apiFetch('/course/', { method: 'POST', body: formData });
        alert('Curso creado (simulación)');
      } else if (modalType === 'edit') {
        // backend: descomentar la siguiente línea para editar curso
        // await apiFetch(`/course/${selectedCourse.courseId}`, { method: 'PUT', body: formData });
        alert('Curso editado (simulación)');
      }
      closeModal();
      // backend: descomentar para refrescar lista después de crear/editar
      // fetchCourses();
    } catch (err) {
      console.error('Error saving course:', err);
      alert('Error al guardar el curso');
    }
  };

  const handleDelete = async () => {
    try {
      // backend: descomentar la siguiente línea para eliminar curso
      // await apiFetch(`/course/${selectedCourse.courseId}`, { method: 'DELETE' });
      alert('Curso eliminado (simulación)');
      closeModal();
      // backend: descomentar para refrescar lista después de eliminar
      // fetchCourses();
    } catch (err) {
      console.error('Error deleting course:', err);
      alert('Error al eliminar el curso');
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF8E7]">
      <AuthenticatedHeader mode="company" currentPath={location.pathname} />

      <main className="mx-auto w-full max-w-container px-5 py-12 md:px-8 lg:px-12">
        <PageHeader
          badge="Gestión de Cursos"
          title="Tus Cursos"
          description="Creá y administrá los cursos de capacitación para tu empresa."
          actions={
            <button
              className="flex items-center gap-2 rounded-xl border-b-4 border-[#E69C00] bg-[#FFD65B] px-5 py-3 text-sm font-semibold text-[#1F2937] transition-transform duration-150 ease-out hover:scale-105"
              onClick={() => openModal('create')}
            >
              <HiPlus className="w-5 h-5" />
              Crear Nuevo Curso
            </button>
          }
        />

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
          <EmptyState
            icon={HiBookOpen}
            title="Aún no has creado cursos"
            description="Creá tu primer curso para comenzar a ofrecer capacitación a candidatos y empleados."
            actionButton={
              <button
                onClick={() => openModal('create')}
                className="inline-flex items-center gap-2 rounded-xl border-b-4 border-[#E69C00] bg-[#FFD65B] px-6 py-3 text-sm font-semibold text-[#1F2937] transition-transform duration-150 ease-out hover:scale-105"
              >
                <HiPlus className="w-5 h-5" />
                Crear Mi Primer Curso
              </button>
            }
          />
        )}
      </main>

      <CourseModal
        show={showModal}
        type={modalType}
        course={selectedCourse}
        formData={formData}
        onClose={closeModal}
        onSubmit={handleSubmit}
        onDelete={handleDelete}
        onChange={setFormData}
      />
    </div>
  );
}
