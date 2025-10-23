export default function Input({
  type = 'text',
  value,
  onChange,
  placeholder,
  disabled = false,
  required = false,
  className = '',
  icon: Icon,
  ...props
}) {
  const baseStyles = 'w-full px-4 py-3 border-2 border-[#E69C00] rounded-xl bg-white text-[#1F2937] focus:outline-none focus:ring-2 focus:ring-[#FFD65B] disabled:opacity-50 disabled:cursor-not-allowed';

  if (Icon) {
    return (
      <div className="relative">
        <Icon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#4B5563] w-5 h-5" />
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          className={`${baseStyles} pl-12 ${className}`}
          {...props}
        />
      </div>
    );
  }

  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
      required={required}
      className={`${baseStyles} ${className}`}
      {...props}
    />
  );
}
