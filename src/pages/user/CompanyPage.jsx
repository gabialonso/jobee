import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { apiFetch } from "../../utils/api";
import { COMPANIES } from "../../data/companies.js";
import AuthenticatedHeader from "../../components/features/navigation/AuthenticatedHeader";
import CompanyCard from "../../components/features/users/CompanyCard";

export default function UserCompany() {
  const location = useLocation();
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCompanies = async () => {
      setLoading(true);
      try {
        const result = await apiFetch('/company');
        if (!Array.isArray(result)) {
          throw new Error('Respuesta inválida del servidor');
        }
        const rawCompanies = result;
        const normalized = rawCompanies.map((company) => ({
          ...company,
          id: company.id ?? company.companyId,
          industry: company.industry ?? '',
          description: company.description ?? '',
          location: company.location ?? '',
        }));
        setCompanies(normalized);
        setError(null);
      } catch (err) {
        console.error('Error fetching companies:', err);
        setError('No se pudieron cargar las empresas. Mostrando datos de ejemplo.');
        const fallback = COMPANIES.map((company) => ({
          ...company,
          id: company.id ?? company.companyId,
        }));
        setCompanies(fallback);
      } finally {
        setLoading(false);
      }
    };

    fetchCompanies();
  }, []);

  return (
    <div className="min-h-screen bg-[#FFF8E7]">
      <AuthenticatedHeader mode="user" currentPath={location.pathname} />

      <main className="mx-auto w-full max-w-container px-5 py-12 md:px-8 lg:px-12">
        <div className="mb-10">
          <span className="inline-flex items-center rounded-full bg-[#9B1756]/10 border border-[#9B1756] px-4 py-1 text-xs font-semibold uppercase tracking-wide text-[#9B1756] mb-4">
            Empresas Aliadas
          </span>
          <h1 className="text-3xl font-bold text-[#1F2937] md:text-4xl lg:text-5xl">
            Empresas que buscan talento
          </h1>
          <p className="text-base leading-relaxed text-[#4B5563] mt-3 md:text-lg">
            Explorá las oportunidades laborales con empresas comprometidas con el desarrollo de jóvenes profesionales.
          </p>
        </div>

        {loading && (
          <div className="text-center py-12">
            <p className="text-[#6F442C]">Cargando empresas...</p>
          </div>
        )}

        {error && (
          <div className="bg-[#E84D4D]/10 border-b-4 border-[#E84D4D] text-[#E84D4D] px-6 py-4 rounded-xl">
            {error}
          </div>
        )}

        {!loading && companies.length > 0 && (
          <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {companies.map((company) => (
              <CompanyCard key={company.id} company={company} />
            ))}
          </section>
        )}
        {!loading && companies.length === 0 && (
          <section className="rounded-3xl bg-white border-b-4 border-[#E69C00] p-10 md:p-16">
            <div className="text-center">
              <div className="inline-flex p-6 bg-[#FFF0C2] rounded-3xl border-b-4 border-[#E69C00] mb-6">
                <svg className="w-16 h-16 text-[#E69C00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-[#1F2937] mb-3">
                No hay empresas disponibles
              </h2>
              <p className="text-[#4B5563] leading-relaxed max-w-md mx-auto">
                En este momento no hay empresas registradas. Volvé pronto para descubrir nuevas oportunidades laborales.
              </p>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
