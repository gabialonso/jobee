export default function ConversationList({ conversations, selectedConversation, onSelect, mode }) {
  const avatarColor = mode === 'company' ? 'bg-[#0B7285] text-white' : 'bg-[#FFD65B] text-[#1F2937]';

  return (
    <div className="lg:col-span-1 rounded-3xl bg-white border-b-4 border-[#E69C00] p-4 max-h-[600px] overflow-y-auto">
      <h2 className="text-lg font-bold text-[#1F2937] mb-4 px-2">Conversaciones</h2>
      <div className="space-y-2">
        {conversations.map((conv) => (
          <button
            key={conv.id}
            onClick={() => onSelect(conv)}
            className={`w-full text-left p-4 rounded-xl transition ${
              selectedConversation?.id === conv.id
                ? 'bg-[#FFF0C2] border-2 border-[#E69C00]'
                : 'bg-[#FFF8E7] hover:bg-[#FFF0C2]'
            }`}
          >
            <div className="flex items-start gap-3">
              <div className={`w-10 h-10 rounded-full ${avatarColor} flex items-center justify-center font-bold`}>
                {conv.participantName[0]}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <p className="font-semibold text-[#1F2937] text-sm truncate">{conv.participantName}</p>
                  {conv.unreadCount > 0 && (
                    <span className="bg-[#DC2626] text-white text-xs font-bold px-2 py-0.5 rounded-full">
                      {conv.unreadCount}
                    </span>
                  )}
                </div>
                <p className="text-xs text-[#4B5563] truncate">{conv.lastMessage}</p>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
