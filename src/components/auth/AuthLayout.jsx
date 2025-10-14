import { Link } from "react-router-dom";
import JobeeLogo from "../../assets/Jobee_Logo.png";
export default function AuthLayout({
  badgeLabel,
  title,
  description,
  formTitle,
  headingAddon,
  children,
  footer,
  toggleOptions = [],
  currentType,
  onToggle,
  asideFooter,
}) {
  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-900 lg:flex-row">
      <aside className="relative hidden w-full max-w-xl flex-col justify-between px-10 py-10 lg:flex lg:sticky lg:top-0 lg:h-screen rounded-b-xl border-r-4 border-[#E69C00] bg-[#FFD65B]">
        <Link to="/" className="flex items-center gap-3">
          <img src={JobeeLogo} alt="Jobee" className="h-9 w-auto md:h-10" />
          <span className="text-2xl font-bold tracking-tight text-gray-900 md:text-3xl">
            Jobee
          </span>
        </Link>

        <div className="mt-16 space-y-6 text-left">
          {badgeLabel ? (
            <span className="inline-flex items-center rounded-full border border-[#FFD65B] bg-[#FFF7E0] px-4 py-1 text-xs font-semibold uppercase tracking-wide text-[#6F442C]">
              {badgeLabel}
            </span>
          ) : null}
          <h1 className="text-3xl font-semibold leading-tight text-[#2F1C10] md:text-4xl">{title}</h1>
          {description ? (
            <p className="text-sm leading-relaxed text-[#6F442C]/80">{description}</p>
          ) : (
            <p className="text-sm leading-relaxed text-[#6F442C]/80">
              Formación práctica y conexiones reales para impulsar tu carrera o equipo.
            </p>
          )}
        </div>

        {asideFooter ? <div className="hidden lg:block">{asideFooter}</div> : null}
      </aside>

      <section className="flex flex-1 items-center justify-center px-6 py-10 sm:px-8 lg:w-[480px] lg:px-10 lg:py-14">
        <div className="w-full max-w-md space-y-6">
          <div className="flex items-center gap-3 lg:hidden">
            <Link to="/" className="flex items-center gap-3">
              <img src={JobeeLogo} alt="Jobee" className="h-9 w-auto" />
              <span className="text-xl font-bold tracking-tight text-gray-900">Jobee</span>
            </Link>
          </div>

          {asideFooter ? <div className="lg:hidden">{asideFooter}</div> : null}

          {toggleOptions.length ? (
            <div className="mx-auto w-full max-w-xs md:max-w-sm">
              <div className="relative flex w-full overflow-hidden rounded-xl border border-x-2 border-[#E69C00]/60 border-b-4 bg-white">
                {(() => {
                  const activeIndex = Math.max(
                    toggleOptions.findIndex(({ id }) => id === currentType),
                    0,
                  );
                  return (
                    <span
                      aria-hidden
                      className="pointer-events-none absolute inset-y-0 left-0 rounded-xl bg-[#FFF0C2]"
                      style={{
                        width: `${100 / toggleOptions.length}%`,
                        transform: `translateX(${activeIndex * 100}%)`,
                        transition: "transform 200ms ease",
                      }}
                    />
                  );
                })()}
                {toggleOptions.map(({ id, label }) => (
                  <button
                    key={id}
                    type="button"
                    onClick={() => onToggle?.(id)}
                    aria-pressed={currentType === id}
                    className={`relative z-10 flex-1 px-4 py-2 text-xs font-semibold uppercase tracking-wide transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FFD65B] ${currentType === id ? "text-[#1F2937]" : "text-gray-500 hover:text-gray-800"
                      }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
          ) : null}

          {formTitle ? (
            <div className="space-y-2">
              <h2 className="text-xl font-semibold text-[#2F1C10] sm:text-2xl">{formTitle}</h2>
              {headingAddon ?? null}
            </div>
          ) : null}

          <div className="flex-1">{children}</div>

          {footer}
        </div>
      </section>
    </div >
  );
}
