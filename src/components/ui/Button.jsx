export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  type = 'button',
  disabled = false,
  className = '',
  icon: Icon,
  ...props
}) {
  const baseStyles = 'inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-150 ease-out disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary: 'bg-[#FFD65B] border-b-4 border-[#E69C00] text-[#1F2937] hover:opacity-90',
    secondary: 'bg-[#0B7285] border-b-4 border-[#074C59] text-white hover:opacity-90',
    danger: 'bg-[#DC2626] border-b-4 border-[#991B1B] text-white hover:opacity-90',
    outline: 'bg-[#FFF8E7] border-2 border-[#E69C00] text-[#1F2937] hover:opacity-90',
    ghost: 'bg-transparent text-[#1F2937] hover:opacity-90',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-6 py-3 text-base',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {Icon && <Icon className="w-5 h-5" />}
      {children}
    </button>
  );
}
