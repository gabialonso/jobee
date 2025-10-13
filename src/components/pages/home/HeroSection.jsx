import CtaLink from "../../common/CtaLink.jsx";

export default function HeroSection({
  eyebrow,
  title,
  emphasis,
  description,
  ctas,
  bannerImage,
  bannerAlt,
  highlight,
}) {
  return (
    <section className="grid gap-10 rounded-3xl bg-[#FFF0C2] p-8 md:grid-cols-2 md:items-center lg:p-12">
      <div className="flex flex-col gap-6 text-left">
        {eyebrow ? (
          <span className="text-sm font-semibold uppercase tracking-wide text-[#9B1756]">
            {eyebrow}
          </span>
        ) : null}
        <h1 className="text-3xl font-bold text-[#1F2937] md:text-4xl lg:text-5xl">{title}</h1>
        <p className="text-base leading-relaxed text-[#4B5563] md:text-lg">
          {emphasis ? <strong>{emphasis}</strong> : null} {description}
        </p>
        {Array.isArray(ctas) && ctas.length ? (
          <div className="flex flex-wrap gap-4">
            {ctas.map(({ href, label }) => (
              <CtaLink key={label} href={href}>
                {label}
              </CtaLink>
            ))}
          </div>
        ) : null}
      </div>
      <div className="relative flex justify-center">
        <img
          src={bannerImage}
          alt={bannerAlt}
          className="h-64 w-full max-w-md rounded-[32px] object-cover md:h-72 lg:h-80"
        />
        {highlight ? (
          <div className="absolute -bottom-6 right-6 hidden rounded-xl bg-[#FFF8E7] px-4 py-3 text-sm text-[#1F2937] md:block">
            <p className="font-semibold">{highlight.title}</p>
            <p className="text-xs text-[#4B5563]">{highlight.description}</p>
          </div>
        ) : null}
      </div>
    </section>
  );
}
