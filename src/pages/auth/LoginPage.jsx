import JobeeLogo from "../../assets/Jobee_Logo.png";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

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
    iconClassName: "text-2xl h-6 w-6 -mr-1",
  },
  {
    id: "microsoft",
    label: "Continuar con Microsoft",
    icon: MicrosoftLogo,
    iconClassName: "text-2xl h-5 w-5 -mr-0.5",
  },
  {
    id: "outlook",
    label: "Continuar con Apple",
    icon: FaApple,
    iconClassName: "text-2xl h-6 w-6 -mr-1",
  },
];

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <header className="flex items-center gap-3 px-6 py-6 md:px-12">
        <img src={JobeeLogo} alt="Jobee" className="h-10 w-auto md:h-12" />
        <span className="text-xl font-bold tracking-tight text-gray-900 md:text-2xl">Jobee</span>
      </header>

      <main className="flex flex-1 items-center justify-center px-6 pb-12 md:px-12">
        <section className="w-full max-w-md">
          <article className="flex min-h-[20rem] flex-col justify-between gap-8 rounded-3xl border-b-7 border-x-4 border-t-4 border-gray-300 bg-white p-8 text-center">
            <div className="space-y-4">
              <span className="inline-flex items-center justify-center rounded-full bg-gray-100 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-gray-700">
                Login
              </span>
              <div className="space-y-2">
                <h1 className="text-2xl font-semibold text-gray-900 md:text-3xl">
                  Inicio de sesión
                </h1>
                <p className="text-sm leading-relaxed text-gray-500 md:text-base">
                  Conectate a nuestra comunidad.
                </p>
              </div>
            </div>

            <div className="space-y-3">
              {providers.map(({ id, label, icon: Icon, iconClassName }) => (
                <button
                  key={id}
                  type="button"
                  className="flex w-full items-center justify-center gap-3 rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm font-semibold text-gray-800 transition hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 border-b-4 border-gray-900"
                >
                  {Icon ? <Icon aria-hidden className={iconClassName} /> : null}
                  <span>{label}</span>
                </button>
              ))}
            </div>

            <p className="text-xs text-gray-400">
              Al continuar aceptás nuestras condiciones y política de privacidad.
            </p>
          </article>
        </section>
      </main>
    </div>
  );
}
