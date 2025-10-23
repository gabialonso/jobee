import { Link } from "react-router-dom";
import PublicHeader from "../../components/features/PublicHeader.jsx";
import CourseCarousel from "../../components/features/CourseCarousel.jsx";
import { COURSES } from "../../data/courses.js";
import BannerImage from "../../assets/LandingBannerImg.svg";
import { MdPlace } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { GoMail } from "react-icons/go";

function CompanyHero() {
  return (
    <section className="grid gap-10 rounded-3xl bg-[#FCE7F3] p-8 md:grid-cols-2 md:items-center lg:p-12">
      <div className="flex flex-col gap-6 text-left">
        <span className="text-sm font-semibold uppercase tracking-wide text-[#C21D6B]">
          Reclutamiento inteligente
        </span>
        <h1 className="text-3xl font-bold text-[#1F2937] md:text-4xl lg:text-5xl">
          Encontrá el talento joven que tu empresa necesita
        </h1>
        <p className="text-base leading-relaxed text-[#4B5563] md:text-lg">
          <strong>¿Buscás empleados comprometidos?</strong> Accedé a miles de jóvenes profesionales
          capacitados, motivados y listos para crecer en tu empresa.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            to="/auth/signup/company"
            className="rounded-xl border-b-4 border-[#C21D6B] bg-white px-6 py-2 text-sm font-semibold text-[#C21D6B]"
          >
            Registrar mi empresa
          </Link>
          <a
            href="#beneficios"
            className="rounded-xl border-b-4 border-[#C21D6B] bg-[#C21D6B] px-6 py-2 text-sm font-semibold text-white"
          >
            Conocé los beneficios
          </a>
        </div>
      </div>
      <div className="relative flex justify-center">
        <img
          src={BannerImage}
          alt="Empresas conectando con talento joven"
          className="h-64 w-full max-w-md rounded-[32px] object-cover md:h-72 lg:h-80"
        />
        <div className="absolute -bottom-6 right-6 hidden rounded-xl bg-[#FFF8E7] px-4 py-3 text-sm text-[#1F2937] md:block">
          <p className="font-semibold">¡Sumate como aliado!</p>
          <p className="text-xs text-[#4B5563]">Tu próximo colaborador está acá</p>
        </div>
      </div>
    </section>
  );
}

function CompanyBenefits() {
  return (
    <section id="beneficios" className="grid gap-6 rounded-3xl bg-[#FFF8E7] px-6 py-2 sm:grid-cols-2 lg:grid-cols-4">
      <article className="flex flex-col justify-center gap-3 rounded-2xl border-b-4 border-[#C21D6B] bg-white px-5 py-3">
        <h3 className="text-lg font-semibold -mb-1 text-[#1F2937]">Talento pre-seleccionado</h3>
        <p className="text-sm text-[#4B5563]">
          Accedé a candidatos capacitados y verificados entre 18-24 años
        </p>
      </article>
      <article className="flex flex-col justify-center gap-3 rounded-2xl border-b-4 border-[#C21D6B] bg-[#FCE7F3] px-5 py-3">
        <h3 className="text-lg font-semibold -mb-1 text-[#1F2937]">Impacto social positivo</h3>
        <p className="text-sm text-[#4B5563]">
          Apostá al futuro dando primeras oportunidades laborales
        </p>
      </article>
      <article className="flex flex-col justify-center gap-3 rounded-2xl border-b-4 border-[#0B7285] bg-[#D4E9EC] px-5 py-3">
        <h3 className="text-lg font-semibold -mb-1 text-[#1F2937]">Gestión simplificada</h3>
        <p className="text-sm text-[#4B5563]">
          Publicá ofertas, revisá perfiles y contactá candidatos en un solo lugar
        </p>
      </article>
      <article className="flex flex-col justify-center gap-3 rounded-2xl border-b-4 border-[#E69C00] bg-[#FFF0C2] px-5 py-3">
        <h3 className="text-lg font-semibold -mb-1 text-[#1F2937]">Sin costos ocultos</h3>
        <p className="text-sm text-[#4B5563]">
          Plataforma transparente con planes accesibles para tu empresa
        </p>
      </article>
    </section>
  );
}

function CompanyCoursesSection() {
  return (
    <section id="cursos" className="flex flex-col gap-6">
      <header className="flex flex-col gap-3 text-left">
        <p className="text-sm font-semibold uppercase tracking-wide text-[#C21D6B]">Cursos para empresas</p>
        <h2 className="text-2xl font-bold text-[#1F2937] md:text-3xl">
          Capacitá a tus empleados con nuestros programas
        </h2>
        <p className="max-w-3xl text-sm text-[#4B5563] md:text-base">
          Ofrecemos planes de capacitación corporativa para que tu equipo se mantenga actualizado
          en las últimas tendencias y tecnologías del mercado.
        </p>
      </header>
      <CourseCarousel courses={COURSES} />
    </section>
  );
}

function CompanyStats() {
  return (
    <section className="grid gap-6 rounded-3xl bg-[#FCE7F3] px-4 text-center sm:grid-cols-2 lg:grid-cols-4">
      <article className="flex flex-col gap-2 rounded-2xl border-b-4 border-[#C21D6B] bg-white px-4 py-6">
        <span className="text-3xl font-bold text-[#1F2937] md:text-4xl">+12.000</span>
        <span className="text-sm font-medium uppercase tracking-wide text-[#4B5563]">
          candidatos disponibles
        </span>
      </article>
      <article className="flex flex-col gap-2 rounded-2xl border-b-4 border-[#C21D6B] bg-[#FFF8E7] px-4 py-6">
        <span className="text-3xl font-bold text-[#1F2937] md:text-4xl">+80</span>
        <span className="text-sm font-medium uppercase tracking-wide text-[#4B5563]">
          empresas aliadas
        </span>
      </article>
      <article className="flex flex-col gap-2 rounded-2xl border-b-4 border-[#C21D6B] bg-white px-4 py-6">
        <span className="text-3xl font-bold text-[#1F2937] md:text-4xl">+1.500</span>
        <span className="text-sm font-medium uppercase tracking-wide text-[#4B5563]">
          contrataciones exitosas
        </span>
      </article>
      <article className="flex flex-col gap-2 rounded-2xl border-b-4 border-[#C21D6B] bg-[#FFF8E7] px-4 py-6">
        <span className="text-3xl font-bold text-[#1F2937] md:text-4xl">9/10</span>
        <span className="text-sm font-medium uppercase tracking-wide text-[#4B5563]">
          empresas nos recomiendan
        </span>
      </article>
    </section>
  );
}

function CompanyCallToAction() {
  return (
    <section className="rounded-3xl bg-[#C21D6B] px-8 py-12 text-center">
      <h3 className="text-2xl font-bold text-white md:text-3xl">
        ¿Listo para encontrar tu próximo talento?
      </h3>
      <p className="mt-3 text-sm text-[#FFF8E7] md:text-base">
        Registrá tu empresa gratis y empezá a buscar candidatos hoy mismo.
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-4">
        <Link
          to="/auth/signup/company"
          className="rounded-xl border-b-4 border-[#FFF0C2] bg-white px-6 py-2 text-sm font-semibold text-[#C21D6B]"
        >
          Registrar empresa
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
        <p className="text-lg font-semibold">Contactanos</p>
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

export default function CompanyLanding() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-[#FFF8E7]">
      <PublicHeader />
      <main className="mx-auto flex w-full max-w-container flex-1 flex-col gap-16 px-5 pb-16 pt-6 md:px-8 lg:px-12">
        <CompanyHero />
        <CompanyBenefits />
        <CompanyCoursesSection />
        <CompanyStats />
        <CompanyCallToAction />
      </main>
      <ContactFooter />
    </div>
  );
}
