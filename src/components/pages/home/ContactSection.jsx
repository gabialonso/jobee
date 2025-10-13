export default function ContactSection({ id, title = "Conectemos", items = [] }) {
  return (
    <footer
      id={id}
      className="mt-auto w-full rounded-t-xl border-t-4 border-t-[#4B5563] bg-[#111827] px-6 py-6 text-[#FFF8E7] md:px-10"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-6 md:flex-row md:justify-between">
        <p className="text-lg font-semibold">{title}</p>
        <div className="flex flex-col items-center gap-4 text-sm md:flex-row md:gap-10 md:text-base">
          {items.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2">
              {Icon ? <Icon /> : null}
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
