export default function CompanyCard({ company, onViewDetails }) {
  return (
    <article className="flex flex-col gap-4 rounded-3xl bg-white border-b-4 border-[#E69C00] p-6 transition-all duration-200 hover:opacity-90">
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-[#1F2937] mb-2">
            {company.name}
          </h3>
          {company.industry && (
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#9B1756]/10 border border-[#9B1756]">
              <span className="text-xs font-semibold text-[#9B1756]">{company.industry}</span>
            </div>
          )}
        </div>
        <div className="flex-shrink-0 p-3 bg-[#FFF0C2] rounded-xl border-b-4 border-[#F3B61F]">
          <svg className="w-6 h-6 text-[#E69C00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        </div>
      </div>

      {/* Descripción */}
      {company.description && (
        <p className="text-sm text-[#4B5563] leading-relaxed line-clamp-3">
          {company.description}
        </p>
      )}

      {/* Ubicación */}
      {company.location && (
        <div className="flex items-center gap-2.5 px-4 py-3 bg-[#FFF8E7] rounded-xl border-b-4 border-[#0B7285]">
          <svg className="w-5 h-5 text-[#0B7285] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span className="text-sm font-medium text-[#1F2937]">{company.location}</span>
        </div>
      )}

      {/* Botón */}
      <button
        onClick={() => onViewDetails && onViewDetails(company)}
        className="w-full mt-2 bg-[#FFD65B] text-[#1F2937] py-3 px-4 rounded-xl font-semibold border-b-4 border-[#E69C00] transition-all duration-200 hover:opacity-90"
      >
        Ver Vacantes
      </button>
    </article>
  );
}
