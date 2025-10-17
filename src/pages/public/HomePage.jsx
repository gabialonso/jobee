import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { apiFetch } from "../../utils/api.js";
import { COURSES } from "../../data/courses.js";
import PublicHeader from "../../components/common/PublicHeader.jsx";
import CourseCarousel from "../../components/courses/CourseCarousel.jsx";
import BannerImage from "../../assets/LandingBannerImg.svg";
import { MdPlace } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { GoMail } from "react-icons/go";

function Hero() {
  return (
    <section className="grid gap-10 rounded-3xl bg-[#FFF0C2] p-8 md:grid-cols-2 md:items-center lg:p-12">
      <div className="flex flex-col gap-6 text-left">
        <span className="text-sm font-semibold uppercase tracking-wide text-[#9B1756]">
          Primera experiencia laboral
        </span>
        <h1 className="text-3xl font-bold text-[#1F2937] md:text-4xl lg:text-5xl">
          Conectamos talento joven con empresas reales
        </h1>
        <p className="text-base leading-relaxed text-[#4B5563] md:text-lg">
          <strong>¿Tenés entre 18 y 24 años?</strong> Sumate a Jobee, aprendé nuevas
          habilidades y llegá a tu primera entrevista con respaldo y oportunidades reales.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            to="/auth/signup/user"
            className="rounded-xl border-b-4 border-[#E69C00] bg-white px-6 py-2 text-sm font-semibold text-[#1F2937] transition-all duration-150 ease-out hover:scale-105 hover:bg-[#FFF8E7] md:text-base"
          >
            Registrate como usuario
          </Link>
          <Link
            to="/auth/signup/company"
            className="rounded-xl border-b-4 border-[#E69C00] bg-white px-6 py-2 text-sm font-semibold text-[#1F2937] transition-all duration-150 ease-out hover:scale-105 hover:bg-[#FFF8E7] md:text-base"
          >
            Soy empresa aliada
          </Link>
        </div>
      </div>
      <div className="relative flex justify-center">
        <img
          src={BannerImage}
          alt="Ilustración de jóvenes conectando oportunidades laborales"
          className="h-64 w-full max-w-md rounded-[32px] object-cover md:h-72 lg:h-80"
        />
        <div className="absolute -bottom-6 right-6 hidden rounded-xl bg-[#FFF8E7] px-4 py-3 text-sm text-[#1F2937] md:block">
          <p className="font-semibold">¡Animáte a dar el paso!</p>
          <p className="text-xs text-[#4B5563]">Seguro tenemos un plan que se ajusta a vos.</p>
        </div>
      </div>
    </section>
  );
}

function FeatureHighlights() {
  return (
    <section className="grid gap-6 rounded-3xl bg-[#FFF8E7] px-6 py-2 sm:grid-cols-2 lg:grid-cols-4">
      <article className="flex flex-col justify-center gap-3 rounded-2xl border-b-4 border-[#E69C00] bg-[#FFF0C2] px-5 py-3">
        <h3 className="text-lg font-semibold -mb-1 text-[#1F2937]">Acceso directo a talento joven</h3>
        <p className="text-sm text-[#4B5563]">
          Encontrá candidatos entre 18–24 años listos para aprender. Sin filtros de años de experiencia.
        </p>
      </article>
      <article className="flex flex-col justify-center gap-3 rounded-2xl border-b-4 border-[#E69C00] bg-[#FFF0C2] px-5 py-3">
        <h3 className="text-lg font-semibold -mb-1 text-[#1F2937]">Impacto social positivo</h3>
        <p className="text-sm text-[#4B5563]">
          Apostá al futuro dando oportunidades a quienes recién comienzan su camino laboral.
        </p>
      </article>
      <article className="flex flex-col justify-center gap-3 rounded-2xl border-b-4 border-[#E69C00] bg-[#FFF0C2] px-5 py-3">
        <h3 className="text-lg font-semibold -mb-1 text-[#1F2937]">Cursos de diferentes niveles</h3>
        <p className="text-sm text-[#4B5563]">
          Entrá a la sección de cursos para elegir niveles, áreas específicas y formatos a tu medida.
        </p>
      </article>
      <article className="flex flex-col justify-center gap-3 rounded-2xl border-b-4 border-[#E69C00] bg-[#FFF0C2] px-5 py-3">
        <h3 className="text-lg font-semibold -mb-1 text-[#1F2937]">Gestión simple de ofertas</h3>
        <p className="text-sm text-[#4B5563]">
          Publicá, editá y gestioná postulaciones en minutos desde una plataforma intuitiva.
        </p>
      </article>
    </section>
  );
}

function CoursesSection({ courses }) {
  return (
    <section id="cursos" className="flex flex-col gap-6">
      <header className="flex flex-col gap-3 text-left">
        <p className="text-sm font-semibold uppercase tracking-wide text-[#9B1756]">Cursos destacados</p>
        <h2 className="text-2xl font-bold text-[#1F2937] md:text-3xl">
          Diseñados para impulsar tu próximo paso
        </h2>
        <p className="max-w-3xl text-sm text-[#4B5563] md:text-base">
          Cada plan incluye proyectos reales, acompañamiento personalizado y acceso a oportunidades laborales
          de nuestra red. Elegí por dónde empezar y avanzá a tu ritmo.
        </p>
      </header>
      {courses.length > 0 ? (
        <CourseCarousel courses={courses} />
      ) : (
        <div className="text-center py-12 rounded-xl bg-[#FFF0C2]">
          <p className="text-[#4B5563]">Próximamente habrá cursos disponibles</p>
        </div>
      )}
    </section>
  );
}

function Metrics() {
  return (
    <section
      id="empresas"
      className="grid gap-6 rounded-3xl bg-[#FFF8E7] px-4 text-center sm:grid-cols-2 lg:grid-cols-4"
    >
      <article className="flex flex-col gap-2 rounded-2xl border-b-4 border-[#E69C00] bg-[#FFF0C2] px-4 py-6">
        <span className="text-3xl font-bold text-[#1F2937] md:text-4xl">+12.000</span>
        <span className="text-sm font-medium uppercase tracking-wide text-[#4B5563]">
          jóvenes registrados
        </span>
      </article>
      <article className="flex flex-col gap-2 rounded-2xl border-b-4 border-[#E69C00] bg-[#FFF0C2] px-4 py-6">
        <span className="text-3xl font-bold text-[#1F2937] md:text-4xl">+80</span>
        <span className="text-sm font-medium uppercase tracking-wide text-[#4B5563]">
          empresas aliadas
        </span>
      </article>
      <article className="flex flex-col gap-2 rounded-2xl border-b-4 border-[#E69C00] bg-[#FFF0C2] px-4 py-6">
        <span className="text-3xl font-bold text-[#1F2937] md:text-4xl">+1.500</span>
        <span className="text-sm font-medium uppercase tracking-wide text-[#4B5563]">
          ofertas publicadas
        </span>
      </article>
      <article className="flex flex-col gap-2 rounded-2xl border-b-4 border-[#E69C00] bg-[#FFF0C2] px-4 py-6">
        <span className="text-3xl font-bold text-[#1F2937] md:text-4xl">9/10</span>
        <span className="text-sm font-medium uppercase tracking-wide text-[#4B5563]">
          empresas recomiendan Jobee
        </span>
      </article>
    </section>
  );
}

function CallToAction() {
  return (
    <section className="rounded-3xl bg-[#FFF0C2] px-8 py-12 text-center">
      <h3 className="text-2xl font-bold text-[#1F2937] md:text-3xl">
        ¿Listo para dar tu primer paso profesional?
      </h3>
      <p className="mt-3 text-sm text-[#4B5563] md:text-base">
        Creamos un espacio sencillo para aprender, practicar y conectar. Elegí tu plan y empecemos hoy.
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-4">
        <Link
          to="/auth/signup/user"
          className="rounded-xl border-b-4 border-[#E69C00] bg-white px-6 py-2 text-sm font-semibold text-[#1F2937] transition-all duration-150 ease-out hover:scale-105 hover:bg-[#FFF8E7] md:text-base"
        >
          Crear cuenta joven
        </Link>
        <Link
          to="/auth/signup/company"
          className="rounded-xl border-b-4 border-[#E69C00] bg-white px-6 py-2 text-sm font-semibold text-[#1F2937] transition-all duration-150 ease-out hover:scale-105 hover:bg-[#FFF8E7] md:text-base"
        >
          Sumarse como empresa
        </Link>
      </div>
    </section>
  );
}

function ContactFooter() {
  return (
    <footer
      id="contactos"
      className="mt-auto w-full rounded-t-xl border-t-4 border-t-[#4B5563] bg-[#111827] px-6 py-6 text-[#FFF8E7] md:px-10"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-6 md:flex-row md:justify-between">
        <p className="text-lg font-semibold">Conectemos</p>
        <div className="flex flex-col items-center gap-4 text-sm md:flex-row md:gap-10 md:text-base">
          <span className="flex items-center gap-2">
            <MdPlace />
            Canelones 1564
          </span>
          <span className="flex items-center gap-2">
            <FaPhoneAlt />
            +598 92 502 958
          </span>
          <span className="flex items-center gap-2">
            <GoMail />
            animajobee@gmail.com
          </span>
        </div>
      </div>
    </footer>
  );
}

export default function HomePage() {
  const [courses, setCourses] = useState([]);

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
      }
    };
    fetchCourses();
  }, []);

  return (
    <div className="flex min-h-screen w-full flex-col bg-[#FFF8E7]">
      <PublicHeader />
      <main className="mx-auto flex w-full max-w-container flex-1 flex-col gap-16 px-5 pb-16 pt-6 md:px-8 lg:px-12">
        <Hero />
        <FeatureHighlights />
        <CoursesSection courses={courses} />
        <Metrics />
        <CallToAction />
      </main>
      <ContactFooter />
    </div>
  );
}
