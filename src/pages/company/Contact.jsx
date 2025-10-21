import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getUser } from "../../utils/auth";
import { mockApi } from "../../utils/mockData";
import AuthenticatedHeader from "../../components/features/navigation/AuthenticatedHeader";
import PageHeader from "../../components/features/shared/PageHeader";
import EmptyState from "../../components/common/EmptyState";
import MessagingInterface from "../../components/features/messaging/MessagingInterface";
import { HiChatBubbleLeftRight } from "react-icons/hi2";

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
        <PageHeader
          badge="Mensajes y Contactos"
          title="Conversaciones con Candidatos"
          description="Mantené contacto directo con candidatos potenciales."
        />

        {conversations.length === 0 ? (
          <EmptyState
            icon={HiChatBubbleLeftRight}
            title="Aún no tenés mensajes"
            description="Cuando recibas o envíes mensajes, aparecerán aquí."
          />
        ) : (
          <MessagingInterface
            conversations={conversations}
            selectedConversation={selectedConversation}
            messages={messages}
            newMessage={newMessage}
            sending={sending}
            mode="company"
            onSelectConversation={handleSelectConversation}
            onSendMessage={handleSendMessage}
            onMessageChange={(e) => setNewMessage(e.target.value)}
          />
        )}
      </main>
    </div>
  );
}
