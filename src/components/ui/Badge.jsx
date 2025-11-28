export default function Badge({
  children,
  variant = 'primary',
  size = 'md',
  className = ''
}) {
  const baseStyles = 'inline-flex items-center font-semibold uppercase tracking-wide';

  const variants = {
    primary: 'bg-[#9B1756]/10 border border-[#9B1756] text-[#9B1756]',
    success: 'bg-[#10B981]/10 border border-[#10B981] text-[#10B981]',
    warning: 'bg-[#F59E0B]/10 border border-[#F59E0B] text-[#F59E0B]',
    info: 'bg-[#0B7285]/10 border border-[#0B7285] text-[#0B7285]',
    yellow: 'bg-[#FFF0C2] border-b-4 border-[#F3B61F] text-[#1F2937]',
  };

  const sizes = {
    sm: 'px-2 py-0.5 text-xs rounded-lg',
    md: 'px-4 py-1 text-xs rounded-full',
    lg: 'px-6 py-2 text-sm rounded-full',
  };

  return (
    <span className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}>
      {children}
    </span>
  );
}
