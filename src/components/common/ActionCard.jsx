import { Link } from "react-router-dom";

export default function ActionCard({ to, icon: Icon, title, description, color = "#E69C00" }) {
  return (
    <Link
      to={to}
      className={`flex flex-col justify-center gap-3 rounded-2xl border-b-4 bg-[#FFF0C2] px-5 py-6 hover:bg-white transition group`}
      style={{ borderBottomColor: color }}
    >
      <div className="flex items-center gap-3">
        <div
          className="p-3 bg-white rounded-xl border-b-4 group-hover:scale-110 transition"
          style={{ borderBottomColor: color }}
        >
          {Icon && <Icon className="w-5 h-5 text-[#1F2937]" />}
        </div>
        <h3 className="text-base font-semibold text-[#1F2937]">{title}</h3>
      </div>
      {description && <p className="text-sm text-[#4B5563]">{description}</p>}
    </Link>
  );
}
