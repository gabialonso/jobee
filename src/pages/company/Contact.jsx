import { useLocation } from "react-router-dom";
import AuthenticatedHeader from "../../components/common/AuthenticatedHeader";
import { HiChatBubbleLeftRight, HiInformationCircle } from "react-icons/hi2";

export default function CompanyContacts() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-[#FFF8E7]">
      <AuthenticatedHeader mode="company" currentPath={location.pathname} />

      {/* Main content */}
      <main className="mx-auto w-full max-w-container px-5 py-12 md:px-8 lg:px-12">
        <div className="mb-10">
          <span className="inline-flex items-center rounded-full bg-[#9B1756]/10 border border-[#9B1756] px-4 py-1 text-xs font-semibold uppercase tracking-wide text-[#9B1756] mb-4">
            Mensajes y Contactos
          </span>
          <h1 className="text-3xl font-bold text-[#1F2937] md:text-4xl lg:text-5xl">
            Tus Conversaciones
          </h1>
          <p className="text-base leading-relaxed text-[#4B5563] mt-3 md:text-lg">
            Comunicá directamente con candidatos y otras empresas en Jobee.
          </p>
        </div>

        {/* Feature Coming Soon Banner */}
        <div className="bg-[#0B7285]/10 border-b-4 border-[#0B7285] rounded-2xl p-6 mb-8 md:p-8">
          <div className="flex items-start gap-4 md:gap-5">
            <div className="flex-shrink-0 p-3 bg-[#0B7285]/20 rounded-xl border-b-4 border-[#0B7285]">
              <HiInformationCircle className="w-6 h-6 text-[#0B7285]" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#0B7285] mb-2">
                Próximamente
              </h3>
              <p className="text-sm md:text-base text-[#4B5563] leading-relaxed">
                El sistema de mensajería está en desarrollo. Pronto podrás comunicarte directamente con candidatos y otras empresas de la plataforma.
              </p>
            </div>
          </div>
        </div>

        {/* Empty State */}
        <section className="rounded-3xl bg-white border-b-4 border-[#E69C00] p-10 md:p-16">
          <div className="text-center">
            <div className="inline-flex p-6 bg-[#FFF0C2] rounded-3xl border-b-4 border-[#E69C00] mb-6">
              <HiChatBubbleLeftRight className="w-16 h-16 text-[#E69C00]" />
            </div>
            <h2 className="text-2xl font-bold text-[#1F2937] mb-3">
              Aún no tenés mensajes
            </h2>
            <p className="text-[#4B5563] leading-relaxed max-w-md mx-auto">
              Cuando recibas o envíes mensajes, aparecerán aquí. Mantené un seguimiento de todas tus conversaciones en un solo lugar.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
