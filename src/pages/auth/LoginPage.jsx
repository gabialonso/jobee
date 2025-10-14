import { useState } from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import AuthLayout from "../../components/auth/AuthLayout.jsx";

function MicrosoftLogo({ className = "", ...props }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      className={className}
      focusable="false"
      {...props}
    >
      <rect x="1" y="1" width="10" height="10" fill="#F35325" />
      <rect x="13" y="1" width="10" height="10" fill="#81BC06" />
      <rect x="1" y="13" width="10" height="10" fill="#05A6F0" />
      <rect x="13" y="13" width="10" height="10" fill="#FFB900" />
    </svg>
  );
}

const providers = [
  {
    id: "google",
    label: "Continuar con Google",
    icon: FcGoogle,
    iconClassName: "h-6 w-6",
    to: "/",
  },
  {
    id: "microsoft",
    label: "Continuar con Microsoft",
    icon: MicrosoftLogo,
    iconClassName: "h-6 w-6",
    to: "/",
  },
  {
    id: "apple",
    label: "Continuar con Apple",
    icon: FaApple,
    iconClassName: "h-6 w-6",
    to: "/",
  },
];

const inputClass =
  "w-full rounded-xl border border-gray-200 border-b-4 border-x-2 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFD65B]";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  const footerContent = (
    <div className="space-y-2 text-xs text-gray-500 text-center">
      <p className="text-[11px] leading-relaxed text-gray-400">
        Al continuar aceptás nuestras condiciones de uso y política de privacidad.
    </p>
      <p>
        ¿Necesitás ayuda?{" "}
        <Link className="font-semibold text-[#1769E0]" to="/auth/forgot-password">
          Recuperar contraseña
        </Link>
      </p>
    </div>
  );

  return (
    <AuthLayout
      badgeLabel="Acceso Jobee"
      title="Inicio de sesión"
      description="Conectate a Jobee y accedé a oportunidades reales para crecer profesionalmente."
      formTitle="Ingresá a tu cuenta"
      headingAddon={
        <p className="hidden text-sm text-[#6F442C]/70 lg:block">
          ¿Todavía no tenés cuenta?{" "}
          <Link className="font-semibold text-[#1769E0]" to="/auth/signup/user">
            Registrate
          </Link>
        </p>
      }
      footer={footerContent}
      asideFooter={
        <div className="text-sm text-[#6F442C]/70">
          ¿Todavía no tenés cuenta?{" "}
          <Link className="font-semibold text-[#1769E0]" to="/auth/signup/user">
            Registrate
          </Link>
        </div>
      }
    >
      <form className="space-y-4" noValidate>
        <div className="space-y-3">
          <fieldset>
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              className={inputClass}
              placeholder="Email"
              required
            />
          </fieldset>

          <fieldset>
            <label htmlFor="password" className="sr-only">
              Contraseña
            </label>
            <div className="relative">
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                className={inputClass}
                placeholder="Contraseña"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
              >
                {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
              </button>
            </div>
            <p className="mt-2 text-xs text-right">
              <Link className="font-semibold text-[#1769E0]" to="/auth/forgot-password">
                Recuperar contraseña
              </Link>
            </p>
          </fieldset>
        </div>

        <div className="flex flex-col gap-4 pt-2">
          <button
            type="submit"
            className="w-full rounded-xl border-b-4 border-[#E69C00] bg-[#FFF0C2] px-5 py-2 text-sm font-semibold text-[#1F2937] transition hover:bg-gray-50 md:text-base"
          >
            Iniciar sesión
          </button>

          <div className="flex flex-col gap-3">
            {providers.map(({ id, label, icon: Icon, iconClassName, to }) => (
              <Link
                key={id}
                to={to}
                className="flex w-full items-center justify-center gap-3 rounded-xl border border-[#E69C00]/60 border-b-4 border-x-2 bg-white px-5 py-2 text-sm font-semibold text-[#1F2937] transition hover:bg-[#FFF7E0]"
              >
                {Icon ? <Icon aria-hidden className={iconClassName} /> : null}
                <span>{label}</span>
              </Link>
            ))}
            <p className="text-xs text-gray-500 text-center lg:hidden">
              ¿Todavía no tenés cuenta?{" "}
              <Link className="font-semibold text-[#1769E0]" to="/auth/signup/user">
                Registrate
              </Link>
            </p>
          </div>
        </div>
      </form>
    </AuthLayout>
  );
}
