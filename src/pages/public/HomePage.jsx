import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { apiFetch } from "../../utils/api.js";
import { COURSES } from "../../data/courses.js";
import PublicHeader from "../../components/features/navigation/PublicHeader.jsx";
import CourseCarousel from "../../components/features/courses/CourseCarousel.jsx";
import { PLAN_STYLES } from "../../components/features/courses/CourseCard.jsx";
import BannerImage from "../../assets/LandingBannerImg.svg";
import { MdPlace } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { GoMail } from "react-icons/go";

const PLAN_LABELS = {
  basico: "Plan Básico",
  medio: "Plan Medio",
  avanzado: "Plan Avanzado",
};

const PLAN_ALIASES = [
  { match: ["basico", "básico", "basic", "descubrí", "discover"], value: "basico" },
  { match: ["medio", "plus", "impulsá", "impulsa"], value: "medio" },
  { match: ["avanzado", "premium", "pro"], value: "avanzado" },
];

const PLANS = [
  {
    key: "basico",
    name: "Plan Descubrí",
    tagline: "Ideal para quienes recién comienzan",
    price: "Gratis",
    features: [
      "Acceso a cursos introductorios",
      "Perfil visible para empresas aliadas",
      "Soporte por correo en 48 hs",
    ],
  },
  {
    key: "medio",
    name: "Plan Impulsá",
    tagline: "Sumá proyectos y mentorías",
    price: "9.99 USD/mes",
    features: [
      "Mentorías grupales quincenales",
      "Participación en simulacros de entrevistas",
      "Prioridad en postulaciones destacadas",
    ],
  },
];

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
            className="rounded-xl border-b-4 border-[#E69C00] bg-white px-6 py-2 text-sm font-semibold text-[#1F2937] transition-all duration-150 ease-out hover:opacity-90 md:text-base"
          >
            Registrate como usuario
          </Link>
          <Link
            to="/auth/signup/company"
            className="rounded-xl border-b-4 border-[#E69C00] bg-white px-6 py-2 text-sm font-semibold text-[#1F2937] transition-all duration-150 ease-out hover:opacity-90 md:text-base"
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

function PlansSection() {
  return (
    <section className="px-6 py-12 md:px-10">
      <header className="mb-8 text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-[#0B7285]">Planes Jobee</p>
        <h2 className="mt-2 text-2xl font-bold text-[#1F2937] md:text-3xl">
          Elegí la experiencia que mejor se adapte a vos
        </h2>
        <p className="mt-2 text-sm text-[#4B5563] md:text-base">
          Podés empezar gratis y luego escalar cuando quieras mentorías y postulaciones priorizadas.
        </p>
      </header>

      <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
        {PLANS.map((plan) => {
          const planStyles = PLAN_STYLES[plan.key] ?? PLAN_STYLES.basico;

          return (
            <article
              key={plan.name}
              className="flex flex-col gap-5 rounded-3xl p-6 text-left"
              style={{
                backgroundColor: planStyles.background,
                borderBottomWidth: "8px",
                borderBottomColor: planStyles.border,
              }}
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide" style={{ color: planStyles.badgeColor }}>
                  {plan.name}
                </p>
                <h3 className="mt-1 text-lg font-semibold text-[#1F2937]">{plan.tagline}</h3>
              </div>
              <p className="text-2xl font-bold text-[#1F2937]">{plan.price}</p>
              <ul className="space-y-3 text-sm text-[#4B5563]">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <span className="mt-1 inline-flex h-2.5 w-2.5 flex-shrink-0 rounded-full" style={{ backgroundColor: planStyles.accent }} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/auth/signup/user"
                className="mt-auto inline-flex items-center justify-center rounded-xl border-b-4 px-4 py-2 text-sm font-semibold transition-all duration-150 ease-out hover:opacity-90"
                style={{
                  backgroundColor: planStyles.buttonBg,
                  color: planStyles.buttonText,
                  borderBottomColor: planStyles.buttonBorder,
                }}
              >
                Empezar ahora
              </Link>
            </article>
          );
        })}
      </div>
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
          className="rounded-xl border-b-4 border-[#E69C00] bg-white px-6 py-2 text-sm font-semibold text-[#1F2937] transition-all duration-150 ease-out hover:opacity-90 md:text-base"
        >
          Crear cuenta joven
        </Link>
        <Link
          to="/auth/signup/company"
          className="rounded-xl border-b-4 border-[#E69C00] bg-white px-6 py-2 text-sm font-semibold text-[#1F2937] transition-all duration-150 ease-out hover:opacity-90 md:text-base"
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
        const coursesData = await apiFetch('/course/');
        if (!Array.isArray(coursesData)) {
          throw new Error('Respuesta inválida del servidor');
        }
        const mappedCourses = coursesData.map(course => ({
          title: course.title,
          description: course.description,
          duration: course.duration ? `${course.duration}h` : null,
          plan: course.plan || 'basico',
          planLabel: course.planLabel || 'Curso',
          modality: course.modality || 'Online',
          courseId: course.courseId || course.id
        }));
        setCourses(mappedCourses);
      } catch (err) {
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
        <PlansSection />
        <CallToAction />
      </main>
      <ContactFooter />
    </div>
  );
}
