import { Search } from "lucide-react";
import { Input } from "../Input/Input";
import { useState, type FormEvent } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [query, setQuery] = useState("");
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(query);
  };
  return (
    <form onSubmit={handleSubmit} className="relative w-full max-w-md">
      <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2" />
      <Input
        className="focus:outline-none border pl-10 rounded-full border-border text-sm font-medium cursor-pointer"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Pequeisar vídeos, criadores, canais..."
      />
    </form>
  );
};
