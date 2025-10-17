import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import Logo from "../../assets/Jobee_Logo.png";

const NAV_LINKS = [
  { label: "Inicio", href: "/" },
  { label: "Cursos", href: "#cursos" },
  { label: "Empresas", href: "#empresas" },
  { label: "Contactos", href: "#contactos" },
];

export default function PublicHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full rounded-b-xl border-b-4 border-[#E69C00] bg-[#FFD65B]">
      <div className="mx-auto w-full max-w-container px-5 py-5 md:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          {/* Logo y botón de menú móvil */}
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3">
              <img src={Logo} alt="Logo de Jobee" className="h-9 w-auto md:h-10" />
              <span className="text-2xl font-bold text-[#1F2937] md:text-3xl">Jobee</span>
            </Link>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center gap-2 rounded-xl border-b-4 border-[#E69C00] bg-white px-3 py-2 text-sm font-semibold text-[#1F2937] md:hidden"
            >
              {isMenuOpen ? <><FiX className="text-lg" />Cerrar</> : <><FiMenu className="text-lg" />Menú</>}
            </button>
          </div>

          {/* Navegación */}
          <div className={`${isMenuOpen ? "flex" : "hidden"} flex-col gap-4 border-t-2 border-[#E69C00] pt-4 md:flex md:flex-1 md:flex-row md:items-center md:justify-between md:border-t-0 md:pt-0`}>
            <nav className="flex flex-col gap-3 text-sm font-semibold md:flex-row md:flex-1 md:justify-center md:text-base">
              {NAV_LINKS.map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  className="rounded-xl px-4 py-2 text-center text-[#374151]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {label}
                </a>
              ))}
            </nav>

            {/* Botones de acción */}
            <div className="flex flex-col gap-3 md:flex-row md:items-center">
              <Link
                to="/auth/login"
                className="rounded-xl border-b-4 border-[#E69C00] bg-white px-5 py-2 text-center text-sm font-semibold text-[#1F2937] transition-all duration-150 ease-out hover:scale-105 hover:bg-[#FFF8E7] md:text-base"
                onClick={() => setIsMenuOpen(false)}
              >
                Acceder
              </Link>
              <Link
                to="/auth/signup/user"
                className="rounded-xl border-b-4 border-[#E69C00] bg-[#FFF0C2] px-5 py-2 text-center text-sm font-semibold text-[#1F2937] transition-all duration-150 ease-out hover:scale-105 hover:bg-[#FFF8E7] md:text-base"
                onClick={() => setIsMenuOpen(false)}
              >
                Crear cuenta
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
