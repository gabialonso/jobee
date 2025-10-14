import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import AuthLayout from "../../components/auth/AuthLayout.jsx";

const inputClass =
  "w-full rounded-xl border border-gray-200 border-b-4 border-x-2 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFD65B]";

const COMPANY_FIELDS = [
  {
    id: "email",
    name: "email",
    type: "email",
    placeholder: "Email corporativo",
    autoComplete: "email",
    colSpan: 2,
  },
  {
    id: "password",
    name: "password",
    type: "password",
    placeholder: "Contraseña",
  },
  {
    id: "confirmPassword",
    name: "confirmPassword",
    type: "password",
    placeholder: "Confirmar contraseña",
  },
  {
    id: "name",
    name: "name",
    type: "text",
    placeholder: "Nombre comercial",
    colSpan: 2,
  },
  {
    id: "rut",
    name: "rut",
    type: "text",
    placeholder: "RUT",
    colSpan: 2,
  },
  {
    id: "legalReason",
    name: "legalReason",
    type: "text",
    placeholder: "Razón social",
  },
  {
    id: "socialGroup",
    name: "socialGroup",
    type: "text",
    placeholder: "Grupo",
    colSpan: 2,
  },
  {
    id: "subGroup",
    name: "subGroup",
    type: "text",
    placeholder: "Subgrupo",
    colSpan: 2,
  },
];

const SIGNUP_TYPES = [
  {
    id: "user",
    label: "Usuario",
    path: "/auth/signup/user",
  },
  {
    id: "company",
    label: "Empresa",
    path: "/auth/signup/company",
    highlight: "Centralizá tus procesos y conocé talento preparado para crecer.",
  },
];

export default function SignUpCompanyPage() {
  const navigate = useNavigate();
  const [passwordVisibility, setPasswordVisibility] = useState({
    password: false,
    confirmPassword: false,
  });

  const currentType = "company";
  const currentConfig = SIGNUP_TYPES.find(({ id }) => id === currentType);

  const handleToggle = (type) => {
    if (type === currentType) return;
    const target = SIGNUP_TYPES.find(({ id }) => id === type);
    if (target) navigate(target.path);
  };

  const footerContent = (
    <div className="space-y-2 text-xs text-gray-500">
      <p className="text-[11px] leading-relaxed text-gray-400">
        Al crear una cuenta aceptás nuestras condiciones de uso y política de privacidad.
      </p>
    </div>
  );

  return (
    <AuthLayout
      badgeLabel="Registro empresa"
      title="Sumá a tu compañía 🐝"
      description={
        currentConfig?.highlight ??
        "Publicá búsquedas, recibí postulaciones y gestioná tu proceso de selección desde un solo lugar."
      }
      toggleOptions={SIGNUP_TYPES}
      currentType={currentType}
      onToggle={handleToggle}
      formTitle="Registro empresas"
      footer={footerContent}
    >
      <form className="space-y-3" noValidate>
        <div className="grid gap-x-3 gap-y-3 sm:grid-cols-2">
          {[
            {
              id: "email",
              name: "email",
              type: "email",
              placeholder: "Email corporativo",
              autoComplete: "email",
              colSpan: 2,
            },
            {
              id: "password",
              name: "password",
              type: "password",
              placeholder: "Contraseña",
            },
            {
              id: "confirmPassword",
              name: "confirmPassword",
              type: "password",
              placeholder: "Confirmar contraseña",
            },
            {
              id: "name",
              name: "name",
              type: "text",
              placeholder: "Nombre comercial",
            },
            {
              id: "rut",
              name: "rut",
              type: "text",
              placeholder: "RUT",
            },
            {
              id: "legalReason",
              name: "legalReason",
              type: "text",
              placeholder: "Razón social",
            },
            {
              id: "socialGroup",
              name: "socialGroup",
              type: "text",
              placeholder: "Grupo",
            },
            {
              id: "subGroup",
              name: "subGroup",
              type: "text",
              placeholder: "Subgrupo",
              colSpan: 2,
            },
          ].map(({ id, name, type, placeholder, autoComplete, colSpan = 1 }) => {
            const isPassword = type === "password";
            const inputType = isPassword && passwordVisibility[name] ? "text" : type;

            return (
              <fieldset key={id} className={colSpan === 2 ? "sm:col-span-2" : undefined}>
                <label htmlFor={id} className="sr-only">
                  {placeholder}
                </label>
                <div className="relative">
                  <input
                    id={id}
                    name={name}
                    type={inputType}
                    className={inputClass}
                    placeholder={placeholder}
                    autoComplete={autoComplete}
                    required
                  />
                  {isPassword ? (
                    <button
                      type="button"
                      onClick={() =>
                        setPasswordVisibility((prev) => ({
                          ...prev,
                          [name]: !prev[name],
                        }))
                      }
                      className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                      aria-label={
                        passwordVisibility[name]
                          ? "Ocultar contraseña"
                          : "Mostrar contraseña"
                      }
                    >
                      {passwordVisibility[name] ? <IoEyeOffOutline /> : <IoEyeOutline />}
                    </button>
                  ) : null}
                </div>
              </fieldset>
            );
          })}
        </div>

        <div className="flex justify-center pt-2">
          <button
            type="submit"
            className="w-full rounded-xl border-b-4 border-[#E69C00] bg-[#FFF0C2] px-5 py-2 text-sm font-semibold text-[#1F2937] transition hover:bg-gray-50 md:w-auto md:text-base"
          >
            Crear cuenta
          </button>
        </div>

        <div className="space-y-2 text-xs text-gray-500 text-center">
          <p>
            ¿Querés registrarte como usuario?{" "}
            <Link className="font-semibold text-[#1769E0]" to="/auth/signup/user">
              Ir a registro usuario
            </Link>
          </p>
          <p>
            ¿Ya tenés una cuenta?{" "}
            <Link className="font-semibold text-[#1769E0]" to="/auth/login">
              Iniciar sesión
            </Link>
          </p>
        </div>
      </form>
    </AuthLayout>
  );
}
