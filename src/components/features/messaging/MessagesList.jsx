export default function MessagesList({ messages, mode }) {
  const sentColor = mode === 'company' ? 'bg-[#0B7285] text-white' : 'bg-[#FFD65B] text-[#1F2937]';

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4">
      {messages.map((msg) => (
        <div
          key={msg.id}
          className={`flex ${msg.senderId.startsWith(mode) ? 'justify-end' : 'justify-start'}`}
        >
          <div className={`max-w-[70%] rounded-2xl px-4 py-2 ${
            msg.senderId.startsWith(mode)
              ? sentColor
              : 'bg-[#FFF8E7] text-[#1F2937] border-2 border-[#E69C00]'
          }`}>
            <p className="text-sm">{msg.text}</p>
            <p className="text-xs mt-1 opacity-70">
              {new Date(msg.timestamp).toLocaleTimeString('es-UY', { hour: '2-digit', minute: '2-digit' })}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
