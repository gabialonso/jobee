import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/Jobee_Logo.png";

export default function SplashPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 2500);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF8E7] via-[#FFF0C2] to-[#FFD65B] flex items-center justify-center p-6">
      <div className="text-center animate-fade-in">
        <div className="inline-flex p-8 bg-white rounded-3xl border-b-8 border-[#E69C00] mb-6">
          <img
            src={Logo}
            alt="Logo de Jobee"
            className="h-32 w-auto md:h-40"
          />
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-[#1F2937] mb-3 animate-slide-up">
          Jobee
        </h1>
        <h2 className="text-xl md:text-2xl font-semibold text-[#6F442C] animate-slide-up-delay">
          Conectá, Crecé, Volá
        </h2>
        <div className="mt-8 flex justify-center">
          <div className="flex gap-2">
            <div className="w-3 h-3 bg-[#E69C00] rounded-full animate-pulse"></div>
            <div className="w-3 h-3 bg-[#E69C00] rounded-full animate-pulse delay-150"></div>
            <div className="w-3 h-3 bg-[#E69C00] rounded-full animate-pulse delay-300"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
