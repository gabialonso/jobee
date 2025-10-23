import { Link } from "react-router-dom";
import PublicHeader from "../../components/features/PublicHeader.jsx";
import CourseCarousel from "../../components/features/CourseCarousel.jsx";
import { COURSES } from "../../data/courses.js";
import BannerImage from "../../assets/LandingBannerImg.svg";
import { MdPlace } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { GoMail } from "react-icons/go";

function UserHero() {
  return (
    <section className="grid gap-10 rounded-3xl bg-[#D4E9EC] p-8 md:grid-cols-2 md:items-center lg:p-12">
      <div className="flex flex-col gap-6 text-left">
        <span className="text-sm font-semibold uppercase tracking-wide text-[#0B7285]">
          Tu primera oportunidad laboral
        </span>
        <h1 className="text-3xl font-bold text-[#1F2937] md:text-4xl lg:text-5xl">
          Empezá tu carrera profesional con Jobee
        </h1>
        <p className="text-base leading-relaxed text-[#4B5563] md:text-lg">
          <strong>¿Tenés entre 18 y 24 años?</strong> Capacitate con cursos profesionales,
          creá tu perfil destacado y conectá con empresas que buscan talento joven como vos.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            to="/auth/signup/user"
            className="rounded-xl border-b-4 border-[#0B7285] bg-white px-6 py-2 text-sm font-semibold text-[#0B7285]"
          >
            Registrate gratis
          </Link>
          <a
            href="#cursos"
            className="rounded-xl border-b-4 border-[#0B7285] bg-[#0B7285] px-6 py-2 text-sm font-semibold text-white"
          >
            Ver cursos
          </a>
        </div>
      </div>
      <div className="relative flex justify-center">
        <img
          src={BannerImage}
          alt="Jóvenes profesionales conectando con oportunidades"
          className="h-64 w-full max-w-md rounded-[32px] object-cover md:h-72 lg:h-80"
        />
        <div className="absolute -bottom-6 right-6 hidden rounded-xl bg-[#FFF8E7] px-4 py-3 text-sm text-[#1F2937] md:block">
          <p className="font-semibold">¡Empezá hoy!</p>
          <p className="text-xs text-[#4B5563]">Tu primer trabajo está a un clic</p>
        </div>
      </div>
    </section>
  );
}

function UserBenefits() {
  return (
    <section className="grid gap-6 rounded-3xl bg-[#FFF8E7] px-6 py-2 sm:grid-cols-2 lg:grid-cols-4">
      <article className="flex flex-col justify-center gap-3 rounded-2xl border-b-4 border-[#0B7285] bg-white px-5 py-3">
        <h3 className="text-lg font-semibold -mb-1 text-[#1F2937]">Cursos profesionales</h3>
        <p className="text-sm text-[#4B5563]">
          Accedé a formación de calidad diseñada para tu primer empleo
        </p>
      </article>
      <article className="flex flex-col justify-center gap-3 rounded-2xl border-b-4 border-[#0B7285] bg-[#FCE7F3] px-5 py-3">
        <h3 className="text-lg font-semibold -mb-1 text-[#1F2937]">Perfil destacado</h3>
        <p className="text-sm text-[#4B5563]">
          Creá tu CV digital y mostrá tus habilidades a empresas reales
        </p>
      </article>
      <article className="flex flex-col justify-center gap-3 rounded-2xl border-b-4 border-[#0B7285] bg-[#FFF0C2] px-5 py-3">
        <h3 className="text-lg font-semibold -mb-1 text-[#1F2937]">Conexión directa</h3>
        <p className="text-sm text-[#4B5563]">
          Chateá directamente con reclutadores y empresas interesadas
        </p>
      </article>
      <article className="flex flex-col justify-center gap-3 rounded-2xl border-b-4 border-[#0B7285] bg-[#FFF8E7] px-5 py-3">
        <h3 className="text-lg font-semibold -mb-1 text-[#1F2937]">Oportunidades reales</h3>
        <p className="text-sm text-[#4B5563]">
          Accedé a ofertas laborales exclusivas para jóvenes talentos
        </p>
      </article>
    </section>
  );
}

function UserCoursesSection() {
  return (
    <section id="cursos" className="flex flex-col gap-6">
      <header className="flex flex-col gap-3 text-left">
        <p className="text-sm font-semibold uppercase tracking-wide text-[#0B7285]">Capacitación profesional</p>
        <h2 className="text-2xl font-bold text-[#1F2937] md:text-3xl">
          Aprendé las habilidades que las empresas buscan
        </h2>
        <p className="max-w-3xl text-sm text-[#4B5563] md:text-base">
          Nuestros cursos están diseñados junto a empresas líderes. Incluyen proyectos prácticos,
          certificados reconocidos y acceso directo a oportunidades laborales.
        </p>
      </header>
      <CourseCarousel courses={COURSES} />
    </section>
  );
}

function UserStats() {
  return (
    <section className="grid gap-6 rounded-3xl bg-[#D4E9EC] px-4 text-center sm:grid-cols-2 lg:grid-cols-4">
      <article className="flex flex-col gap-2 rounded-2xl border-b-4 border-[#0B7285] bg-white px-4 py-6">
        <span className="text-3xl font-bold text-[#1F2937] md:text-4xl">+12.000</span>
        <span className="text-sm font-medium uppercase tracking-wide text-[#4B5563]">
          jóvenes capacitados
        </span>
      </article>
      <article className="flex flex-col gap-2 rounded-2xl border-b-4 border-[#0B7285] bg-[#FFF8E7] px-4 py-6">
        <span className="text-3xl font-bold text-[#1F2937] md:text-4xl">+80</span>
        <span className="text-sm font-medium uppercase tracking-wide text-[#4B5563]">
          empresas contratando
        </span>
      </article>
      <article className="flex flex-col gap-2 rounded-2xl border-b-4 border-[#0B7285] bg-white px-4 py-6">
        <span className="text-3xl font-bold text-[#1F2937] md:text-4xl">+1.500</span>
        <span className="text-sm font-medium uppercase tracking-wide text-[#4B5563]">
          ofertas disponibles
        </span>
      </article>
      <article className="flex flex-col gap-2 rounded-2xl border-b-4 border-[#0B7285] bg-[#FFF8E7] px-4 py-6">
        <span className="text-3xl font-bold text-[#1F2937] md:text-4xl">85%</span>
        <span className="text-sm font-medium uppercase tracking-wide text-[#4B5563]">
          consigue empleo en 3 meses
        </span>
      </article>
    </section>
  );
}

function UserCallToAction() {
  return (
    <section className="rounded-3xl bg-[#0B7285] px-8 py-12 text-center">
      <h3 className="text-2xl font-bold text-white md:text-3xl">
        ¿Listo para tu primera experiencia profesional?
      </h3>
      <p className="mt-3 text-sm text-[#FFF8E7] md:text-base">
        Registrate hoy, completá tu perfil y empezá a recibir propuestas de empresas.
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-4">
        <Link
          to="/auth/signup/user"
          className="rounded-xl border-b-4 border-[#FFF0C2] bg-white px-6 py-2 text-sm font-semibold text-[#0B7285]"
        >
          Crear mi cuenta
        </Link>
        <Link
          to="/auth/login"
          className="rounded-xl border-b-4 border-[#FFF0C2] bg-[#FFF0C2] px-6 py-2 text-sm font-semibold text-[#1F2937]"
        >
          Ya tengo cuenta
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
        <p className="text-lg font-semibold">¿Necesitás ayuda?</p>
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

export default function UserLanding() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-[#FFF8E7]">
      <PublicHeader />
      <main className="mx-auto flex w-full max-w-container flex-1 flex-col gap-16 px-5 pb-16 pt-6 md:px-8 lg:px-12">
        <UserHero />
        <UserBenefits />
        <UserCoursesSection />
        <UserStats />
        <UserCallToAction />
      </main>
      <ContactFooter />
    </div>
  );
}
