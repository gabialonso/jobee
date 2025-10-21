import { MdPlace } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { GoMail } from "react-icons/go";

export default function ContactFooter() {
  return (
    <footer
      id="contactos"
      className="mt-auto w-full rounded-t-xl border-t-4 border-t-[#4B5563] bg-[#111827] px-6 py-6 text-[#FFF8E7] md:px-10"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-6 md:flex-row md:justify-between">
        <p className="text-lg font-semibold">Contactanos</p>
        <div className="flex flex-col items-center gap-4 text-sm md:flex-row md:gap-10 md:text-base">
          <span className="flex items-center gap-2">
            <MdPlace />
            Canelones 1162
          </span>
          <span className="flex items-center gap-2">
            <FaPhoneAlt />
            +598 92 502 958
          </span>
          <span className="flex items-center gap-2">
            <GoMail />
            animajobee@gmail.com
          </span>
        </div>
      </div>
    </footer>
  );
}
