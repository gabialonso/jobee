import { HiPaperAirplane } from "react-icons/hi2";

export default function MessageInput({ value, onChange, onSend, sending, mode }) {
  const buttonColor = mode === 'company'
    ? 'bg-[#0B7285] border-[#074C59] text-white'
    : 'bg-[#FFD65B] border-[#E69C00] text-[#1F2937]';

  return (
    <form onSubmit={onSend} className="p-4 border-t-2 border-[#FFD65B]">
      <div className="flex gap-2">
        <input
          type="text"
          value={value}
          onChange={onChange}
          placeholder="Escribí tu mensaje..."
          className="flex-1 px-4 py-2 rounded-xl border-2 border-[#E69C00] bg-[#FFF8E7] text-[#1F2937] focus:outline-none focus:ring-2 focus:ring-[#FFD65B]"
          disabled={sending}
        />
        <button
          type="submit"
          disabled={sending || !value.trim()}
          className={`px-4 py-2 rounded-xl ${buttonColor} border-b-4 font-semibold hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed transition`}
        >
          <HiPaperAirplane className="w-5 h-5" />
        </button>
      </div>
    </form>
  );
}
