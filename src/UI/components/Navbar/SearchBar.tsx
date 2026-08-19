import { Search } from "lucide-react";
import { Input } from "../Input/Input";
import type { FormEvent } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export const SearchBar = ({ onSearch }: SearchBarProps) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch("");
  };
  return (
    <form onSubmit={handleSubmit} className="relative w-full max-w-md">
      <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2" />;
      <Input className="pl-10 rounded-full border-border text-text-secondary" />
    </form>
  );
};
