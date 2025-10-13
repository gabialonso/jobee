export default function CtaLink({ href, children, className = "", ...props }) {
  return (
    <a
      href={href}
      className={`rounded-xl border-b-4 border-[#E69C00] bg-white px-6 py-2 text-sm font-semibold text-[#1F2937] transition hover:bg-[#FFF8E7] md:text-base ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
