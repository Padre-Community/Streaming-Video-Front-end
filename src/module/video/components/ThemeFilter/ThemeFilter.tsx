interface ThemeFilterProps {
  categories: string[];
  selectedCategory: string | null;
  onSelectCategory: (category: string) => void;
}

const ThemeFilter = ({ categories, selectedCategory, onSelectCategory }: ThemeFilterProps) => {
  return (
    <div className="flex flex-wrap gap-3 mb-6">
      {categories.map((category) => {
        const isActive = category === selectedCategory;
        return (
          <button
            key={category}
            onClick={() => onSelectCategory(category)}
            className={`px-5 py-2 rounded-full font-medium font-body transition ${
              isActive
                ? "bg-brand text-on-brand"
                : "bg-surface text-secondary hover:bg-brand-hover hover:text-on-brand"
            }`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default ThemeFilter;