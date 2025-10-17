import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getUser } from "../../utils/auth";
import { mockApi } from "../../utils/mockData";
import AuthenticatedHeader from "../../components/common/AuthenticatedHeader";
import { HiChatBubbleLeftRight, HiPaperAirplane } from "react-icons/hi2";

export default function CompanyContacts() {
  const location = useLocation();
  const [conversations, setConversations] = useState([]);
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);

  useEffect(() => {
    const loadConversations = async () => {
      try {
        const user = getUser();
        const data = await mockApi.getConversations('company', user?.id || 1);
        if (data.success) {
          setConversations(data.data);
        }
      } catch (err) {
        console.error('Error loading conversations:', err);
      } finally {
        setLoading(false);
      }
    };

    loadConversations();
  }, []);

  const handleSelectConversation = async (conversation) => {
    setSelectedConversation(conversation);
    try {
      const data = await mockApi.getMessages(conversation.id);
      if (data.success) {
        setMessages(data.data);
      }
    } catch (err) {
      console.error('Error loading messages:', err);
    }
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!newMessage.trim() || !selectedConversation) return;

    setSending(true);
    try {
      const data = await mockApi.sendMessage(selectedConversation.id, newMessage);
      if (data.success) {
        setMessages([...messages, data.data]);
        setNewMessage('');
      }
    } catch (err) {
      console.error('Error sending message:', err);
    } finally {
      setSending(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#FFF8E7] flex items-center justify-center">
        <p className="text-[#6F442C]">Cargando conversaciones...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FFF8E7]">
      <AuthenticatedHeader mode="company" currentPath={location.pathname} />

      <main className="mx-auto w-full max-w-container px-5 py-12 md:px-8 lg:px-12">
        <div className="mb-10">
          <span className="inline-flex items-center rounded-full bg-[#9B1756]/10 border border-[#9B1756] px-4 py-1 text-xs font-semibold uppercase tracking-wide text-[#9B1756] mb-4">
            Mensajes y Contactos
          </span>
          <h1 className="text-3xl font-bold text-[#1F2937] md:text-4xl lg:text-5xl">
            Conversaciones con Candidatos
          </h1>
          <p className="text-base leading-relaxed text-[#4B5563] mt-3 md:text-lg">
            Mantené contacto directo con candidatos potenciales.
          </p>
        </div>

        {conversations.length === 0 ? (
          <section className="rounded-3xl bg-white border-b-4 border-[#E69C00] p-10 md:p-16">
            <div className="text-center">
              <div className="inline-flex p-6 bg-[#FFF0C2] rounded-3xl border-b-4 border-[#E69C00] mb-6">
                <HiChatBubbleLeftRight className="w-16 h-16 text-[#E69C00]" />
              </div>
              <h2 className="text-2xl font-bold text-[#1F2937] mb-3">
                Aún no tenés mensajes
              </h2>
              <p className="text-[#4B5563] leading-relaxed max-w-md mx-auto">
                Cuando recibas o envíes mensajes, aparecerán aquí.
              </p>
            </div>
          </section>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Conversations List */}
            <div className="lg:col-span-1 rounded-3xl bg-white border-b-4 border-[#E69C00] p-4 max-h-[600px] overflow-y-auto">
              <h2 className="text-lg font-bold text-[#1F2937] mb-4 px-2">Conversaciones</h2>
              <div className="space-y-2">
                {conversations.map((conv) => (
                  <button
                    key={conv.id}
                    onClick={() => handleSelectConversation(conv)}
                    className={`w-full text-left p-4 rounded-xl transition-all ${
                      selectedConversation?.id === conv.id
                        ? 'bg-[#FFF0C2] border-2 border-[#E69C00]'
                        : 'bg-[#FFF8E7] hover:bg-[#FFF0C2]'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#0B7285] flex items-center justify-center text-white font-bold">
                        {conv.participantName[0]}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <p className="font-semibold text-[#1F2937] text-sm truncate">
                            {conv.participantName}
                          </p>
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

            {/* Messages View */}
            <div className="lg:col-span-2 rounded-3xl bg-white border-b-4 border-[#E69C00] flex flex-col" style={{ height: '600px' }}>
              {selectedConversation ? (
                <>
                  {/* Header */}
                  <div className="p-4 border-b-2 border-[#FFD65B]">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#0B7285] flex items-center justify-center text-white font-bold">
                        {selectedConversation.participantName[0]}
                      </div>
                      <h3 className="font-bold text-[#1F2937]">{selectedConversation.participantName}</h3>
                    </div>
                  </div>

                  {/* Messages */}
                  <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    {messages.map((msg) => (
                      <div
                        key={msg.id}
                        className={`flex ${msg.senderId.startsWith('company') ? 'justify-end' : 'justify-start'}`}
                      >
                        <div
                          className={`max-w-[70%] rounded-2xl px-4 py-2 ${
                            msg.senderId.startsWith('company')
                              ? 'bg-[#0B7285] text-white'
                              : 'bg-[#FFF8E7] text-[#1F2937] border-2 border-[#E69C00]'
                          }`}
                        >
                          <p className="text-sm">{msg.text}</p>
                          <p className="text-xs mt-1 opacity-70">
                            {new Date(msg.timestamp).toLocaleTimeString('es-UY', { hour: '2-digit', minute: '2-digit' })}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Send Message Form */}
                  <form onSubmit={handleSendMessage} className="p-4 border-t-2 border-[#FFD65B]">
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        placeholder="Escribí tu mensaje..."
                        className="flex-1 px-4 py-2 rounded-xl border-2 border-[#E69C00] bg-[#FFF8E7] text-[#1F2937] focus:outline-none focus:ring-2 focus:ring-[#FFD65B]"
                        disabled={sending}
                      />
                      <button
                        type="submit"
                        disabled={sending || !newMessage.trim()}
                        className="px-4 py-2 rounded-xl bg-[#0B7285] border-b-4 border-[#074C59] text-white font-semibold transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <HiPaperAirplane className="w-5 h-5" />
                      </button>
                    </div>
                  </form>
                </>
              ) : (
                <div className="flex-1 flex items-center justify-center text-center p-8">
                  <div>
                    <div className="inline-flex p-6 bg-[#FFF0C2] rounded-3xl border-b-4 border-[#E69C00] mb-4">
                      <HiChatBubbleLeftRight className="w-12 h-12 text-[#E69C00]" />
                    </div>
                    <p className="text-[#4B5563]">Seleccioná una conversación para ver los mensajes</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
