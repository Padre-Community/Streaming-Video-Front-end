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
      <nav className="flex items-center justify-between">
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
          <UIbutton
            variant="primary"
            className="rounded-4xl"
            onClick={toggleTheme}
          >
            <span className="text-text-on-brand text-sm">
              <Upload size={16} />
              Upload
            </span>
          </UIbutton>
          <div></div>
        </div>
      </nav>
    </header>
  );
};
