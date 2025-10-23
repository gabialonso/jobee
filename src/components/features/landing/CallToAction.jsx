import { Link } from "react-router-dom";

export default function CallToAction({ title, description, primaryButton, secondaryButton }) {
  return (
    <section className="rounded-3xl bg-[#FFF0C2] px-8 py-12 text-center">
      <h3 className="text-2xl font-bold text-[#1F2937] md:text-3xl">
        {title}
      </h3>
      <p className="mt-3 text-sm text-[#4B5563] md:text-base">
        {description}
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-4">
        {primaryButton && (
          <Link
            to={primaryButton.to}
            className="rounded-xl border-b-4 border-[#E69C00] bg-white px-6 py-2 text-sm font-semibold text-[#1F2937]"
          >
            {primaryButton.text}
          </Link>
        )}
        {secondaryButton && (
          <Link
            to={secondaryButton.to}
            className="rounded-xl border-b-4 border-[#E69C00] bg-[#FFD65B] px-6 py-2 text-sm font-semibold text-[#1F2937]"
          >
            {secondaryButton.text}
          </Link>
        )}
      </div>
    </section>
  );
}
