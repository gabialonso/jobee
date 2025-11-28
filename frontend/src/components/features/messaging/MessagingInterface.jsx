import { HiChatBubbleLeftRight } from "react-icons/hi2";
import ConversationList from "./ConversationList";
import MessagesList from "./MessagesList";
import MessageInput from "./MessageInput";

export default function MessagingInterface({
  conversations,
  selectedConversation,
  messages,
  newMessage,
  sending,
  mode = 'user',
  onSelectConversation,
  onSendMessage,
  onMessageChange,
  emptySelectText = "Seleccioná una conversación para ver los mensajes"
}) {
  const avatarColor = mode === 'company' ? 'bg-[#0B7285] text-white' : 'bg-[#FFD65B] text-[#1F2937]';

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <ConversationList
        conversations={conversations}
        selectedConversation={selectedConversation}
        onSelect={onSelectConversation}
        mode={mode}
      />

      <div className="lg:col-span-2 rounded-3xl bg-white border-b-4 border-[#E69C00] flex flex-col" style={{ height: '600px' }}>
        {selectedConversation ? (
          <>
            <div className="p-4 border-b-4 border-[#FFD65B]">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full ${avatarColor} flex items-center justify-center font-bold`}>
                  {selectedConversation.participantName[0]}
                </div>
                <h3 className="font-bold text-[#1F2937]">{selectedConversation.participantName}</h3>
              </div>
            </div>

            <MessagesList messages={messages} mode={mode} />
            <MessageInput
              value={newMessage}
              onChange={onMessageChange}
              onSend={onSendMessage}
              sending={sending}
              mode={mode}
            />
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center text-center p-8">
            <div>
              <div className="inline-flex p-6 bg-[#FFF0C2] rounded-3xl border-b-4 border-[#E69C00] mb-4">
                <HiChatBubbleLeftRight className="w-12 h-12 text-[#E69C00]" />
              </div>
              <p className="text-[#4B5563]">{emptySelectText}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
