import sun from "../assets/images/sun.png";
import moon from "../assets/images/moon.png";
import { useTheme } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="relative group">
      <button
        onClick={toggleTheme}
        className="p-2 rounded-lg border border-gray-600 dark:border-gray-400
                   hover:bg-gray-200 dark:hover:bg-gray-700 transition"
        aria-label="Toggle Theme"
      >
        {theme === "dark" ? (
          <img
            src={sun}
            alt="sun"
            className="w-8 h-8 object-contain brightness-110"
          />
        ) : (
          <img
            src={moon}
            alt="moon"
            className="w-8 h-8 object-contain brightness-110"
          />
        )}
      </button>

      {/* Tooltip */}
      <span
        className="pointer-events-none absolute -bottom-12 left-1/2 -translate-x-1/2
                   whitespace-nowrap rounded-md bg-gray-900 text-white text-xs
                   px-3 py-1 opacity-0 scale-95
                   group-hover:opacity-100 group-hover:scale-100
                   transition-all duration-200"
      >
        {theme === "dark" ? "Switch to Light mode" : "Switch to Dark mode"}
      </span>
    </div>
  );
};

export default ThemeToggle;
