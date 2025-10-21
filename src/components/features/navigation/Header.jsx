import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiMenu, FiSearch, FiX } from "react-icons/fi";
import { logout } from "../../../utils/auth";
import Logo from "../../../assets/Jobee_Logo.png";

const NAV_CONFIG = {
  public: [
    { label: "Inicio", href: "/" },
    { label: "Cursos", href: "#cursos" },
    { label: "Empresas", href: "#empresas" },
    { label: "Contactos", href: "#contactos" },
  ],
  user: [
    { label: "Dashboard", path: "/user/dashboard" },
    { label: "Perfil", path: "/user/profile" },
    { label: "Empresas", path: "/user/company" },
    { label: "Cursos", path: "/user/courses" },
    { label: "Contactos", path: "/user/contacts" },
  ],
  company: [
    { label: "Dashboard", path: "/company/dashboard" },
    { label: "Perfil", path: "/company/profile" },
    { label: "Candidatos", path: "/company/users" },
    { label: "Cursos", path: "/company/courses" },
    { label: "Contactos", path: "/company/contacts" },
  ],
};

export default function Header({ mode = "public", currentPath = "" }) {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = NAV_CONFIG[mode] || NAV_CONFIG.public;
  const isAuthenticated = mode === "user" || mode === "company";

  const handleLogout = () => {
    logout();
    navigate('/');
  };

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
              className="inline-flex items-center gap-2 rounded-xl border-b-4 border-[#E69C00] bg-white px-3 py-2 text-sm font-semibold text-[#1F2937] transition hover:bg-[#FFF8E7] md:hidden"
            >
              {isMenuOpen ? <><FiX className="text-lg" />Cerrar</> : <><FiMenu className="text-lg" />Menú</>}
            </button>
          </div>

          {/* Navegación */}
          <div className={`${isMenuOpen ? "flex" : "hidden"} flex-col gap-4 border-t-2 border-[#E69C00] pt-4 md:flex md:flex-1 md:flex-row md:items-center md:justify-between md:border-t-0 md:pt-0`}>
            <nav className="flex flex-col gap-3 text-sm font-semibold md:flex-row md:flex-1 md:justify-center md:text-base">
              {navLinks.map(({ label, href, path }) => {
                const isActive = currentPath === path;
                const linkClass = `rounded-xl px-4 py-2 text-center transition ${isActive ? "bg-white border-b-4 border-[#E69C00] font-semibold text-[#1F2937]" : "text-[#374151] hover:bg-[#FFF0C2] hover:text-[#1F2937]"}`;

                if (href?.startsWith("#")) {
                  return <a key={href} href={href} className={linkClass} onClick={() => setIsMenuOpen(false)}>{label}</a>;
                }

                return (
                  <Link key={path || href} to={path || href} className={linkClass} onClick={() => setIsMenuOpen(false)}>
                    {label}
                  </Link>
                );
              })}
            </nav>

            {/* Botones de acción */}
            <div className="flex flex-col gap-3 md:flex-row md:items-center">
              {!isAuthenticated && (
                <>
                  <div className="flex items-center gap-2 rounded-xl border-b-4 border-[#E69C00] bg-white px-3 py-2">
                    <FiSearch className="text-lg text-[#1F2937]" />
                    <input
                      type="text"
                      placeholder="Buscar"
                      className="w-full border-none bg-transparent text-sm text-[#1F2937] placeholder:text-[#4B5563] focus:outline-none md:w-36"
                    />
                  </div>
                  <Link
                    to="/auth/login"
                    className="rounded-xl border-b-4 border-[#E69C00] bg-white px-5 py-2 text-center text-sm font-semibold text-[#1F2937] transition hover:bg-[#FFF8E7] md:text-base"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Acceder
                  </Link>
                  <Link
                    to="/auth/signup/user"
                    className="rounded-xl border-b-4 border-[#E69C00] bg-[#FFF0C2] px-5 py-2 text-center text-sm font-semibold text-[#1F2937] transition hover:bg-gray-50 md:text-base"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Crear cuenta
                  </Link>
                </>
              )}

              {isAuthenticated && (
                <button
                  onClick={handleLogout}
                  className="rounded-xl border-b-4 border-[#E69C00] bg-white px-5 py-2 text-center text-sm font-semibold text-[#1F2937] transition hover:bg-[#FFF8E7] md:text-base"
                >
                  Cerrar sesión
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
