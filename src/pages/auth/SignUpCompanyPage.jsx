import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import JobeeLogo from "../../assets/Jobee_Logo.png";

const SIGNUP_TYPES = [
  {
    id: "user",
    label: "Usuario",
    activeClasses: "bg-[#FFF0C2] text-[#E69C00]",
    title: "Crear cuenta usuario",
    description: "Registrate para acceder a cursos, mentorías y oportunidades reales para tu primera experiencia laboral.",
  },
  {
    id: "company",
    label: "Empresa",
    activeClasses: "bg-gray-300 text-gray-800",
    title: "Crear cuenta empresa",
    description: "Creá tu cuenta empresa y gestioná postulaciones de talento joven desde Jobee.",
  },
];

const baseToggleClass =
  "rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-wide transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FFD65B]";

const inputClass =
  "w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFD65B]";

export default function SignUpCompanyPage() {
  const [company, setCompany] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
    rut: "",
    legalReason: "",
    socialGroup: "",
    subGroup: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const currentType = "company";
  const { title, description } = SIGNUP_TYPES.find(({ id }) => id === currentType);

  const handleToggle = (type) => {
    if (type === currentType) return;
    navigate("/auth/signup/user");
  };

  const handleChange = ({ target: { name, value } }) => {
    setCompany((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setSuccess("");

    if (company.password !== company.confirmPassword) {
      setError("Las contraseñas no coinciden.");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/api/companyService", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(company),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Error en el registro.");
        return;
      }

      setSuccess("Registro exitoso ✅");
      setCompany({
        email: "",
        password: "",
        confirmPassword: "",
        name: "",
        rut: "",
        legalReason: "",
        socialGroup: "",
        subGroup: "",
      });
      navigate("/company/dashboard");
    } catch {
      setError("Error de red o del servidor.");
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <header className="flex items-center gap-3 px-5 py-4 md:px-6">
        <a href="/" className="flex items-center gap-3">
          <img src={JobeeLogo} alt="Jobee" className="h-9 w-auto md:h-10" />
          <span className="text-2xl font-bold tracking-tight text-gray-900 md:text-3xl">
            Jobee
          </span>
        </a>
      </header>

      <main className="flex flex-1 items-center justify-center px-6 py-8 md:px-12 md:py-10">
        <section className="w-full max-w-3xl">
          <article className="flex flex-col gap-6 rounded-3xl border-b-7 border-x-4 border-t-4 border-gray-300 bg-white p-6 shadow-lg">
            <div className="space-y-3 text-center">
              <div className="flex justify-center">
                <div className="inline-flex items-center rounded-full border border-gray-200 bg-gray-100 p-1">
                  {SIGNUP_TYPES.map(({ id, label, activeClasses }) => (
                    <button
                      key={id}
                      type="button"
                      onClick={() => handleToggle(id)}
                      aria-pressed={currentType === id}
                      className={`${baseToggleClass} ${currentType === id ? activeClasses : "text-gray-500"
                        }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>
              <div className="space-y-2">
                <h1 className="text-2xl font-semibold text-gray-900 md:text-3xl">{title}</h1>
                <p className="text-sm leading-relaxed text-gray-500 md:text-base">{description}</p>
              </div>
            </div>

            <form className="grid gap-4 text-left md:grid-cols-2" onSubmit={handleSubmit} noValidate>
              <div className="md:col-span-2 space-y-2">
                <label htmlFor="email" className="text-sm font-semibold text-gray-700">
                  Email corporativo
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className={inputClass}
                  value={company.email}
                  onChange={handleChange}
                  placeholder="talento@tuempresa.com"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-semibold text-gray-700">
                  Contraseña
                </label>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    className={inputClass}
                    value={company.password}
                    onChange={handleChange}
                    placeholder="Mínimo 8 caracteres"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((value) => !value)}
                    className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                    aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
                  >
                    {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="confirmPassword" className="text-sm font-semibold text-gray-700">
                  Confirmar contraseña
                </label>
                <div className="relative">
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    className={inputClass}
                    value={company.confirmPassword}
                    onChange={handleChange}
                    placeholder="Repetí tu contraseña"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword((value) => !value)}
                    className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                    aria-label={showConfirmPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
                  >
                    {showConfirmPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-semibold text-gray-700">
                  Nombre de la empresa
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className={inputClass}
                  value={company.name}
                  onChange={handleChange}
                  placeholder="Nombre comercial"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="rut" className="text-sm font-semibold text-gray-700">
                  RUT
                </label>
                <input
                  id="rut"
                  name="rut"
                  type="text"
                  className={inputClass}
                  value={company.rut}
                  onChange={handleChange}
                  placeholder="RUT sin puntos ni guiones"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="legalReason" className="text-sm font-semibold text-gray-700">
                  Razón social
                </label>
                <input
                  id="legalReason"
                  name="legalReason"
                  type="text"
                  className={inputClass}
                  value={company.legalReason}
                  onChange={handleChange}
                  placeholder="Razón social registrada"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="socialGroup" className="text-sm font-semibold text-gray-700">
                  Grupo empresarial
                </label>
                <input
                  id="socialGroup"
                  name="socialGroup"
                  type="text"
                  className={inputClass}
                  value={company.socialGroup}
                  onChange={handleChange}
                  placeholder="Grupo o sector"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="subGroup" className="text-sm font-semibold text-gray-700">
                  Subgrupo
                </label>
                <input
                  id="subGroup"
                  name="subGroup"
                  type="text"
                  className={inputClass}
                  value={company.subGroup}
                  onChange={handleChange}
                  placeholder="Subgrupo o categoría"
                  required
                />
              </div>

              <div className="md:col-span-2 space-y-3">
                {error ? <p className="text-sm font-semibold text-red-500">{error}</p> : null}
                {success ? <p className="text-sm font-semibold text-green-600">{success}</p> : null}

                <button
                  type="submit"
                  className="w-full rounded-2xl border-b-4 border-[#E69C00] bg-[#FFF0C2] px-4 py-3 text-sm font-semibold text-[#1F2937] transition hover:bg-[#FFE8A0]"
                >
                  Registrar empresa
                </button>
                <p className="text-center text-sm text-gray-500">
                  ¿Querés registrarte como usuario?{" "}
                  <Link className="font-semibold text-[#1769E0]" to="/auth/signup/user">
                    Crear cuenta usuario
                  </Link>
                </p>
                <p className="text-center text-sm text-gray-500">
                  ¿Ya tenés una cuenta?{" "}
                  <Link className="font-semibold text-[#1769E0]" to="/auth/login">
                    Iniciar sesión
                  </Link>
                </p>
              </div>
            </form>
          </article>
        </section>
      </main>
    </div>
  );
}
