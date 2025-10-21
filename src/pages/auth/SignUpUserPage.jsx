import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import AuthLayout from "../../components/layout/AuthLayout.jsx";
import { apiFetch } from "../../utils/api.js";
import { saveSession } from "../../utils/auth.js";

const inputClass =
  "w-full rounded-xl border border-gray-200 border-b-4 border-x-2 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFD65B]";

const USER_FIELDS = [
  {
    id: "email",
    name: "email",
    type: "email",
    placeholder: "Email",
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
    placeholder: "Nombre completo",
    colSpan: 2,
  },
  {
    id: "ci",
    name: "ci",
    type: "text",
    placeholder: "Documento de identidad",
    colSpan: 2,
  },
  {
    id: "birthDate",
    name: "birthDate",
    type: "date",
    placeholder: "Fecha de nacimiento",
    colSpan: 2,
  },
];

const SIGNUP_TYPES = [
  {
    id: "user",
    label: "Usuario",
    path: "/auth/signup/user",
    highlight: "  Accedé a cursos, mentorías y oportunidades reales.",
  },
  {
    id: "company",
    label: "Empresa",
    path: "/auth/signup/company",
  },
];

export default function SignUpUserPage() {
  const navigate = useNavigate();
  const [passwordVisibility, setPasswordVisibility] = useState({
    password: false,
    confirmPassword: false,
  });
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    ci: '',
    birthDate: ''
  });
  const [error, setError] = useState('');

  const currentType = "user";
  const currentConfig = SIGNUP_TYPES.find(({ id }) => id === currentType);

  const handleToggle = (type) => {
    if (type === currentType) return;
    const target = SIGNUP_TYPES.find(({ id }) => id === type);
    if (target) navigate(target.path);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }

    try {
      // Call register endpoint
      const data = await apiFetch('/auth/register/user', {
        method: 'POST',
        body: {
          name: formData.name,
          email: formData.email,
          password: formData.password
        }
      });

      // Save token and user data
      saveSession(data.token, data.user);

      // Redirect based on user role
      if (data.user.role === 'companies') {
        navigate('/company/dashboard');
      } else if (data.user.role === 'Admin') {
        navigate('/admin/dashboard');
      } else {
        navigate('/user/dashboard');
      }
    } catch (err) {
      setError(err.message);
    }
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
      badgeLabel="Registro Usuario"
      title="Creá tu cuenta 👋"
      description={
        currentConfig?.highlight ??
        "Formá parte de la comunidad Jobee y accedé a experiencias significativas."
      }
      toggleOptions={SIGNUP_TYPES}
      currentType={currentType}
      onToggle={handleToggle}
      formTitle="Registro usuarios"
      footer={footerContent}
    >
      <form className="space-y-2.5" noValidate onSubmit={handleSubmit}>
        {error && <p className="text-sm text-red-600">{error}</p>}
        <div className="grid gap-x-3 gap-y-3 sm:grid-cols-2">
          {USER_FIELDS.map(({ id, name, type, placeholder, autoComplete, colSpan = 1 }) => {
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
                    value={formData[name]}
                    onChange={(e) => setFormData({...formData, [name]: e.target.value})}
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

        <div className="flex justify-center pt-1">
          <button
            type="submit"
            className="w-full rounded-xl border-b-4 border-[#E69C00] bg-[#FFF0C2] px-5 py-2 text-sm font-semibold text-[#1F2937]"
          >
            Crear cuenta
          </button>
        </div>

        <div className="space-y-1.5 text-xs text-gray-500 text-center">
          <p>
            ¿Querés registrar una empresa?{" "}
            <Link className="font-semibold text-[#1769E0]" to="/auth/signup/company">
              Ir a registro empresa
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
