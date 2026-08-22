import { User } from "lucide-react";
import { Upload } from "lucide-react";
import { Sun } from "lucide-react";
import { Moon } from "lucide-react";
import { SearchBar } from "./SearchBar";
import { UIbutton } from "../Button/Button";
import { useTheme } from "../../../hooks/useTheme";

export const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const handleSearch = (query: string) => {
    void query;
  };

  return (
    <header className="w-full border-b border-border px-6 py-3 mb-6">
      <nav className="flex items-center justify-between pl-3 pr-3">
        <div>
          <img
            className="h-10 w-auto object-contain"
            src={
              theme === "dark"
                ? "src/assets/Logo_StreamX_Dark.png"
                : "src/assets/Logo_StreamX_Light.png"
            }
            alt="Logo StreamX"
          />
        </div>
        <SearchBar onSearch={handleSearch} />

        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-brand-hover transition-colors"
            aria-label="Alternar tema"
          >
            {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <UIbutton variant="primary" className="rounded-4xl">
            <span className="inline-flex text-text-on-brand text-sm pl-2 pr-2">
              <Upload size={16} className="mr-2 mt-0.5" />
              Publicar
            </span>
          </UIbutton>
          <div className=" flex items-center gap-3 cursor-pointer border-l border-border pl-3">
            <div className="flex flex-col text-right">
              <span className="text-sm font-semibold text-text-primary">
                Loid Padre
              </span>
              <span className="text-xs font-medium text-red-500">
                MEU CANAL
              </span>
            </div>
            <div className="flex items-center justify-center w-9 h-9 rounded-full border border-border bg-surface text-text-secondary hover:bg-brand-hover transition-colors">
              <User size={18} />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
