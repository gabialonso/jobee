export default function CompanyCard({ company, onViewDetails }) {
  return (
    <article className="flex flex-col justify-between gap-4 rounded-2xl border-b-4 border-[#E69C00] bg-[#FFF0C2] p-6 transition-all duration-150 ease-out hover:opacity-90">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-bold text-[#2F1C10]">
            {company.name}
          </h3>
          <div className="p-3 bg-[#FFD65B] rounded-xl border-b-4 border-[#E69C00]">
            <svg className="w-5 h-5 text-[#1F2937]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-2 p-3 bg-[#FFF8E7] rounded-xl border-b-4 border-[#F3B61F]">
            <svg className="w-4 h-4 text-[#6F442C] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <div className="flex-1">
              <span className="text-xs font-semibold text-[#6F442C] block">RUT:</span>
              <span className="text-sm text-[#1F2937] font-medium">{company.rut}</span>
            </div>
          </div>

          {company.legalReason && (
            <div className="flex items-start gap-2 p-3 bg-[#FFF8E7] rounded-xl border-b-4 border-[#F3B61F]">
              <svg className="w-4 h-4 text-[#6F442C] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <div className="flex-1">
                <span className="text-xs font-semibold text-[#6F442C] block">Razón Social:</span>
                <span className="text-sm text-[#1F2937]">{company.legalReason}</span>
              </div>
            </div>
          )}

          {company.groupName && (
            <div className="flex items-center gap-2 p-3 bg-[#FFF8E7] rounded-xl border-b-4 border-[#0B7285]">
              <svg className="w-4 h-4 text-[#0B7285] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <div className="flex-1">
                <span className="text-xs font-semibold text-[#6F442C] block">Grupo:</span>
                <span className="text-sm text-[#1F2937] font-medium">{company.groupName}</span>
              </div>
            </div>
          )}

          {company.subGroupName && (
            <div className="flex items-center gap-2 p-3 bg-[#FFF8E7] rounded-xl border-b-4 border-[#0B7285]">
              <svg className="w-4 h-4 text-[#0B7285] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              <div className="flex-1">
                <span className="text-xs font-semibold text-[#6F442C] block">Subgrupo:</span>
                <span className="text-sm text-[#1F2937] font-medium">{company.subGroupName}</span>
              </div>
            </div>
          )}
        </div>
      </div>

      <button
        onClick={() => onViewDetails && onViewDetails(company)}
        className="w-full bg-[#FFD65B] text-[#1F2937] py-3 px-4 rounded-xl font-semibold border-b-4 border-[#E69C00] transition-all duration-150 ease-out hover:opacity-90"
      >
        Ver Detalles
      </button>
    </article>
  );
}
