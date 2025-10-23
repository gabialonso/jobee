import { Link } from "react-router-dom";

export default function HeroSection({
  badge,
  title,
  description,
  primaryButton,
  secondaryButton,
  bannerImage,
  bannerAlt,
  floatingCard
}) {
  return (
    <section className="grid gap-10 rounded-3xl bg-[#FFF0C2] p-8 md:grid-cols-2 md:items-center lg:p-12">
      <div className="flex flex-col gap-6 text-left">
        {badge && (
          <span className="text-sm font-semibold uppercase tracking-wide text-[#9B1756]">
            {badge}
          </span>
        )}
        <h1 className="text-3xl font-bold text-[#1F2937] md:text-4xl lg:text-5xl">
          {title}
        </h1>
        <p className="text-base leading-relaxed text-[#4B5563] md:text-lg">
          {description}
        </p>
        <div className="flex flex-wrap gap-4">
          {primaryButton && (
            <Link
              to={primaryButton.to}
              className="rounded-xl border-b-4 border-[#E69C00] bg-white px-6 py-2 text-sm font-semibold text-[#1F2937]"
            >
              {primaryButton.text}
            </Link>
          )}
          {secondaryButton && (
            typeof secondaryButton.to === 'string' && secondaryButton.to.startsWith('#') ? (
              <a
                href={secondaryButton.to}
                className="rounded-xl border-b-4 border-[#E69C00] bg-[#FFD65B] px-6 py-2 text-sm font-semibold text-[#1F2937]"
              >
                {secondaryButton.text}
              </a>
            ) : (
              <Link
                to={secondaryButton.to}
                className="rounded-xl border-b-4 border-[#E69C00] bg-[#FFD65B] px-6 py-2 text-sm font-semibold text-[#1F2937]"
              >
                {secondaryButton.text}
              </Link>
            )
          )}
        </div>
      </div>
      <div className="relative flex justify-center">
        <img
          src={bannerImage}
          alt={bannerAlt}
          className="h-64 w-full max-w-md rounded-[32px] object-cover md:h-72 lg:h-80"
        />
        {floatingCard && (
          <div className="absolute -bottom-6 right-6 hidden rounded-xl bg-[#FFF8E7] px-4 py-3 text-sm text-[#1F2937] md:block">
            <p className="font-semibold">{floatingCard.title}</p>
            <p className="text-xs text-[#4B5563]">{floatingCard.subtitle}</p>
          </div>
        )}
      </div>
    </section>
  );
}
