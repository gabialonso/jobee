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
    description: "Sumá talento joven a tu organización y gestioná postulaciones desde Jobee.",
  },
];

const baseToggleClass =
  "rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-wide transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FFD65B]";

const inputClass =
  "w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFD65B]";

export default function SignUpUserPage() {
  const [person, setPerson] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
    ci: "",
    birthDate: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const currentType = "user";
  const { title, description } = SIGNUP_TYPES.find(({ id }) => id === currentType);

  const handleToggle = (type) => {
    if (type === currentType) return;
    navigate("/auth/signup/company");
  };

  const handleChange = ({ target: { name, value } }) => {
    setPerson((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setError("");

    if (person.password !== person.confirmPassword) {
      setError("Las contraseñas no coinciden.");
      return;
    }

    if (person.password.length < 8) {
      setError("La contraseña debe tener al menos 8 caracteres.");
      return;
    }

    navigate("/user/dashboard");

    setPerson({
      email: "",
      password: "",
      confirmPassword: "",
      name: "",
      ci: "",
      birthDate: "",
    });
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
        <section className="w-full max-w-2xl">
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
              <div className="space-y-2 md:col-span-2">
                <label htmlFor="email" className="text-sm font-semibold text-gray-700">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className={inputClass}
                  value={person.email}
                  onChange={handleChange}
                  placeholder="tu@email.com"
                  required
                />
              </div>

              <div className="space-y-2 md:col-span-2">
                <label htmlFor="password" className="text-sm font-semibold text-gray-700">
                  Contraseña
                </label>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    className={inputClass}
                    value={person.password}
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

              <div className="space-y-2 md:col-span-2">
                <label htmlFor="confirmPassword" className="text-sm font-semibold text-gray-700">
                  Confirmar contraseña
                </label>
                <div className="relative">
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    className={inputClass}
                    value={person.confirmPassword}
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
                  Nombre completo
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className={inputClass}
                  value={person.name}
                  onChange={handleChange}
                  placeholder="Tu nombre y apellido"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="ci" className="text-sm font-semibold text-gray-700">
                  Documento de identidad
                </label>
                <input
                  id="ci"
                  name="ci"
                  type="text"
                  className={inputClass}
                  value={person.ci}
                  onChange={handleChange}
                  placeholder="Cédula sin puntos ni guiones"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="birthDate" className="text-sm font-semibold text-gray-700">
                  Fecha de nacimiento
                </label>
                <input
                  id="birthDate"
                  name="birthDate"
                  type="date"
                  className={inputClass}
                  value={person.birthDate}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="md:col-span-2 space-y-3">
                {error ? <p className="text-sm font-semibold text-red-500">{error}</p> : null}
                <button
                  type="submit"
                  className="w-full rounded-2xl border-b-4 border-[#E69C00] bg-[#FFF0C2] px-4 py-3 text-sm font-semibold text-[#1F2937] transition hover:bg-[#FFE8A0]"
                >
                  Registrar usuario
                </button>
                <p className="text-sm text-gray-500 text-center">
                  ¿Querés ser empresa?{" "}
                  <Link className="font-semibold text-[#1769E0]" to="/auth/signup/company">
                    Registrate como empresa
                  </Link>
                </p>
                <p className="text-sm text-gray-500 text-center">
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
