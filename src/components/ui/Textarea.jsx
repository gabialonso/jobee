export default function Textarea({
  value,
  onChange,
  placeholder,
  disabled = false,
  required = false,
  rows = 4,
  className = '',
  ...props
}) {
  const baseStyles = 'w-full px-4 py-3 border-2 border-[#E69C00] rounded-xl bg-white text-[#1F2937] focus:outline-none focus:ring-2 focus:ring-[#FFD65B] resize-none disabled:opacity-50 disabled:cursor-not-allowed';

  return (
    <textarea
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
      required={required}
      rows={rows}
      className={`${baseStyles} ${className}`}
      {...props}
    />
  );
}
