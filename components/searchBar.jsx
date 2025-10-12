import { useState } from "react";
import { Search } from "lucide-react";

export default function SearchBar({ onSelect }) {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleSearch = async (e) => {
    const value = e.target.value;
    setQuery(value);

    if (!value.trim()) {
        setResults([]);
        return;
    }

    setLoading(true);

    try {
        const response = await fetch(`http://localhost:5000/api/search?q=${value}`);
        const data = await response.json();
        setResults(data);
    } catch (error) {
        console.error("Search error:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleSelect = (item) => {
        setQuery(item.title);
        setResults([]);
        if (onSelect) onSelect(item);
    };

return (
    <div className="relative w-full max-w-md mx-auto">
        <div className="flex items-center border rounded-2xl px-3 py-2 shadow-sm bg-white">
            <Search className="w-5 h-5 text-gray-500 mr-2" />
                <input
                    type="text"
                    placeholder="Search courses or help..."
                    value={query}
                    onChange={handleSearch}
                    className="w-full outline-none text-gray-700"
                />
        </div>

        {loading && (
            <div className="absolute mt-2 text-sm text-gray-500">Searching...</div>
        )}

        {results.length > 0 && (
            <ul className="absolute z-10 bg-white border rounded-2xl mt-2 w-full shadow-lg max-h-64 overflow-y-auto">
                {results.map((item) => (
                    <li
                    key={item.id}
                    onClick={() => handleSelect(item)}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                        <span className="font-medium">{item.title}</span>
                        <span className="text-sm text-gray-500 ml-2">
                            ({item.type})
                        </span>
                    </li>
                    ))}
                </ul>
        )}
    </div>
    );
}
