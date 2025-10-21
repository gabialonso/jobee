export default function Avatar({
  name,
  src,
  alt,
  size = 'md',
  variant = 'primary',
  className = ''
}) {
  const sizes = {
    sm: 'w-8 h-8 text-sm',
    md: 'w-10 h-10 text-base',
    lg: 'w-16 h-16 text-2xl',
    xl: 'w-24 h-24 text-4xl',
  };

  const variants = {
    primary: 'bg-[#FFD65B] text-[#1F2937]',
    secondary: 'bg-[#0B7285] text-white',
    tertiary: 'bg-[#9B1756] text-white',
  };

  const initials = name
    ? name
        .split(' ')
        .map(word => word[0])
        .join('')
        .toUpperCase()
        .slice(0, 2)
    : '?';

  if (src) {
    return (
      <img
        src={src}
        alt={alt || name}
        className={`${sizes[size]} rounded-full object-cover ${className}`}
      />
    );
  }

  return (
    <div className={`${sizes[size]} ${variants[variant]} rounded-full flex items-center justify-center font-bold ${className}`}>
      {initials}
    </div>
  );
}
