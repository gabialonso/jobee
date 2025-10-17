import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { apiFetch } from "../../utils/api";
import Header from "../../components/common/Header";
import { HiPlus, HiBookOpen, HiClock, HiCurrencyDollar, HiTag } from "react-icons/hi2";

export default function CompanyCourses() {
  const location = useLocation();
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  return (
    <div className="min-h-screen bg-[#FFF8E7]">
      <Header mode="company" currentPath={location.pathname} />

      {/* Main content */}
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
            className="flex items-center gap-2 rounded-xl border-b-4 border-[#E69C00] bg-[#FFD65B] px-5 py-3 text-sm font-semibold text-[#1F2937] transition hover:bg-[#FFF0C2]"
            onClick={() => alert('Funcionalidad de crear curso próximamente')}
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
                className="rounded-3xl bg-white border-b-4 border-[#E69C00] p-6 transition hover:shadow-lg"
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
                      onClick={() => alert('Función de editar próximamente')}
                      className="flex-1 lg:flex-none px-4 py-2 text-sm font-semibold text-[#0B7285] bg-[#0B7285]/10 rounded-xl border-b-4 border-[#0B7285] hover:bg-[#0B7285]/20 transition"
                    >
                      Editar
                    </button>
                    <button
                      onClick={() => alert('Función de eliminar próximamente')}
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
                onClick={() => alert('Funcionalidad de crear curso próximamente')}
                className="inline-flex items-center gap-2 rounded-xl border-b-4 border-[#E69C00] bg-[#FFD65B] px-6 py-3 text-sm font-semibold text-[#1F2937] transition hover:bg-[#FFF0C2]"
              >
                <HiPlus className="w-5 h-5" />
                Crear Mi Primer Curso
              </button>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
