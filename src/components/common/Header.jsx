import { FiSearch } from "react-icons/fi";
import Logo from "../../assets/Jobee_Logo.png";

const NAV_LINKS = [
  { label: "Inicio", href: "/" },
  { label: "Cursos", href: "#cursos" },
  { label: "Empresas", href: "#empresas" },
  { label: "Contactos", href: "#contactos" },
];

export default function Header() {
  return (
    <header className="w-full rounded-b-xl border-b-4 border-[#E69C00] bg-[#FFD65B]">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-5 py-5 md:flex-row md:items-center md:justify-between md:px-6 lg:px-8">
        <a href="/" className="flex items-center gap-3">
          <img src={Logo} alt="Logo de Jobee" className="h-9 w-auto md:h-10" />
          <span className="text-2xl font-bold text-[#1F2937] md:text-3xl">Jobee</span>
        </a>

        <nav className="flex flex-wrap items-center gap-6 text-sm font-semibold text-[#374151] md:flex-nowrap md:gap-8 md:text-base">
          {NAV_LINKS.map(({ label, href }) => (
            <a key={href} href={href} className="transition hover:text-[#4B5563]">
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 rounded-xl border-b-4 border-[#E69C00] bg-white px-3 py-2">
            <FiSearch className="text-lg text-[#1F2937]" />
            <input
              type="text"
              placeholder="Buscar"
              className="w-28 border-none bg-transparent text-sm text-[#1F2937] placeholder:text-[#4B5563] focus:outline-none md:w-36"
            />
          </div>

          <a
            href="/auth/login"
            className="rounded-xl border-b-4 border-[#E69C00] bg-white px-5 py-2 text-sm font-semibold text-[#1F2937] transition hover:bg-[#FFF8E7] md:text-base"
          >
            Acceder
          </a>
          <a
            href="/auth/signup/user"
            className="rounded-xl border-b-4 border-[#E69C00]  bg-[#FFF0C2] px-5 py-2 text-sm font-semibold text-[#1F2937] transition hover:bg-white md:text-base"
          >
            Crear cuenta
          </a>
        </div>
      </div>
    </header>
  );
}
