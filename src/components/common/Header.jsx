import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiSearch, FiX } from "react-icons/fi";
import Logo from "../../assets/Jobee_Logo.png";

const NAV_LINKS = [
  { label: "Inicio", href: "/" },
  { label: "Cursos", href: "#cursos" },
  { label: "Empresas", href: "#empresas" },
  { label: "Contactos", href: "#contactos" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
  };

  const renderNavLink = ({ label, href }) => {
    const baseClasses =
      "rounded-lg px-3 py-2 text-center transition hover:text-[#4B5563] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E69C00]/60 md:rounded-none md:px-0 md:py-0 md:text-[#374151]";

    if (href.startsWith("#")) {
      return (
        <a key={href} href={href} className={baseClasses} onClick={handleMenuItemClick}>
          {label}
        </a>
      );
    }

    return (
      <Link key={href} to={href} className={baseClasses} onClick={handleMenuItemClick}>
        {label}
      </Link>
    );
  };

  return (
    <header className="w-full rounded-b-xl border-b-4 border-[#E69C00] bg-[#FFD65B]">
      <div className="mx-auto w-full max-w-6xl px-5 py-5 md:px-6 lg:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between md:gap-6">
          <div className="flex items-center justify-between gap-4 md:gap-6">
            <Link to="/" className="flex items-center gap-3">
              <img src={Logo} alt="Logo de Jobee" className="h-9 w-auto md:h-10" />
              <span className="text-2xl font-bold text-[#1F2937] md:text-3xl">Jobee</span>
            </Link>

            <button
              type="button"
              onClick={toggleMenu}
              className="inline-flex items-center gap-2 rounded-xl border-b-4 border-[#E69C00] bg-white px-3 py-2 text-sm font-semibold text-[#1F2937] transition hover:bg-[#FFF8E7] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E69C00]/60 md:hidden"
              aria-expanded={isMenuOpen}
              aria-controls="primary-navigation"
            >
              {isMenuOpen ? (
                <>
                  <FiX className="text-lg" />
                  Cerrar
                </>
              ) : (
                <>
                  <FiMenu className="text-lg" />
                  Menú
                </>
              )}
            </button>
          </div>

          <div
            id="primary-navigation"
            className={`mt-4 ${isMenuOpen ? "flex" : "hidden"} flex-col gap-4 border-t-2 border-[#E69C00] pt-4 md:mt-0 md:flex md:flex-1 md:flex-row md:items-center md:justify-between md:border-t-0 md:pt-0`}
          >
            <nav className="flex flex-col gap-3 text-sm font-semibold text-[#1F2937] md:flex-row md:flex-1 md:items-center md:justify-center md:gap-8 md:text-base">
              {NAV_LINKS.map((link) => renderNavLink(link))}
            </nav>

            <div className="flex flex-col gap-3 md:ml-auto md:flex-row md:items-center md:gap-3">
              <div className="flex w-full items-center gap-2 rounded-xl border-b-4 border-[#E69C00] bg-white px-3 py-2 md:w-auto">
                <FiSearch className="text-lg text-[#1F2937]" />
                <input
                  type="text"
                  placeholder="Buscar"
                  className="w-full border-none bg-transparent text-sm text-[#1F2937] placeholder:text-[#4B5563] focus:outline-none md:w-36"
                />
              </div>

              <Link
                to="/auth/login"
                className="w-full rounded-xl border-b-4 border-[#E69C00] bg-white px-5 py-2 text-center text-sm font-semibold text-[#1F2937] transition hover:bg-[#FFF8E7] md:w-auto md:text-base"
                onClick={handleMenuItemClick}
              >
                Acceder
              </Link>
              <Link
                to="/auth/signup/user"
                className="w-full rounded-xl border-b-4 border-[#E69C00] bg-[#FFF0C2] px-5 py-2 text-center text-sm font-semibold text-[#1F2937] transition hover:bg-gray-50 md:w-auto md:text-base"
                onClick={handleMenuItemClick}
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
