import CtaLink from "../../../components/ui/CtaLink.jsx";

export default function CallToActionSection({ title, description, ctas = [] }) {
  if (!title && !description && !ctas.length) return null;

  return (
    <section className="rounded-3xl bg-[#FFF0C2] px-8 py-12 text-center">
      {title ? (
        <h3 className="text-2xl font-bold text-[#1F2937] md:text-3xl">{title}</h3>
      ) : null}
      {description ? (
        <p className="mt-3 text-sm text-[#4B5563] md:text-base">{description}</p>
      ) : null}
      {ctas.length ? (
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          {ctas.map(({ href, label }) => (
            <CtaLink key={label} href={href}>
              {label}
            </CtaLink>
          ))}
        </div>
      ) : null}
    </section>
  );
}
