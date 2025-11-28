import { FiSearch } from "react-icons/fi";
import Input from "../ui/Input";

export default function SearchBar({
  value,
  onChange,
  placeholder = "Buscar...",
  className = ""
}) {
  return (
    <div className={className}>
      <Input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        icon={FiSearch}
      />
    </div>
  );
}
