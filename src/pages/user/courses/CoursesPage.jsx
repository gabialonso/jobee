import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { apiFetch } from "../../../utils/api";
import { mockApi } from "../../../utils/mockData";
import { COURSES } from "../../../data/courses.js";
import CourseCard from "../../../components/features/courses/CourseCard";
import AuthenticatedHeader from "../../../components/features/navigation/AuthenticatedHeader";

export default function UserCourses() {
  const location = useLocation();
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [enrolling, setEnrolling] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const data = await apiFetch('/course/');
        const mappedCourses = (data.data || []).map(course => ({
          title: course.title,
          description: course.description,
          duration: course.duration ? `${course.duration}h` : null,
          plan: 'basico',
          planLabel: 'Curso',
          modality: 'Online',
          courseId: course.courseId
        }));
        setCourses(mappedCourses);
      } catch (err) {
        // backend: si no hay backend disponible, usa datos mock de /data/courses.js
        console.error('error al cargar cursos, usando datos mock:', err);
        setCourses(COURSES);
      } finally {
        setLoading(false);
      }
    };
    fetchCourses();
  }, []);

  const handleEnroll = async (courseId) => {
    setEnrolling(courseId);
    try {
      // backend: reemplazar mockApi por apiFetch cuando esté el endpoint
      // await apiFetch('/enrollments/', { method: 'POST', body: { courseId } });
      await mockApi.enrollInCourse(1, courseId);
      alert('¡Inscripción exitosa!');
    } catch (err) {
      console.error('Error enrolling in course:', err);
      alert('Error al inscribirse en el curso');
    } finally {
      setEnrolling(null);
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF8E7]">
      <AuthenticatedHeader mode="user" currentPath={location.pathname} />

      {/* Main content */}
      <main className="mx-auto w-full max-w-container px-5 py-12 md:px-8 lg:px-12">
        <div className="mb-10">
          <span className="inline-flex items-center rounded-full bg-[#9B1756]/10 border border-[#9B1756] px-4 py-1 text-xs font-semibold uppercase tracking-wide text-[#9B1756] mb-4">
            Catálogo de Cursos
          </span>
          <h1 className="text-3xl font-bold text-[#1F2937] md:text-4xl lg:text-5xl">
            Cursos Disponibles
          </h1>
          <p className="text-base leading-relaxed text-[#4B5563] mt-3 md:text-lg">
            Desarrollá nuevas habilidades con nuestros cursos especializados para tu crecimiento profesional.
          </p>
        </div>

        {loading && (
          <div className="text-center py-12">
            <p className="text-[#6F442C]">Cargando cursos...</p>
          </div>
        )}

        {!loading && courses.length > 0 && (
          <section className="grid gap-6 rounded-3xl bg-[#FFF8E7] p-6 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => (
              <div key={course.courseId} className="flex flex-col">
                <CourseCard course={course} />
                <button
                  onClick={() => handleEnroll(course.courseId)}
                  disabled={enrolling === course.courseId}
                  className="mt-4 w-full px-5 py-3 rounded-xl bg-[#10B981] border-b-4 border-[#059669] text-white font-semibold transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {enrolling === course.courseId ? 'Inscribiendo...' : 'Inscribirse Ahora'}
                </button>
              </div>
            ))}
          </section>
        )}

        {!loading && courses.length === 0 && (
          <section className="rounded-3xl bg-white border-b-4 border-[#E69C00] p-10 md:p-16">
            <div className="text-center">
              <div className="inline-flex p-6 bg-[#FFF0C2] rounded-3xl border-b-4 border-[#E69C00] mb-6">
                <svg className="w-16 h-16 text-[#E69C00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-[#1F2937] mb-3">
                No hay cursos disponibles
              </h2>
              <p className="text-[#4B5563] leading-relaxed max-w-md mx-auto">
                En este momento no hay cursos disponibles. Volvé pronto para descubrir nuevas oportunidades de aprendizaje.
              </p>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
