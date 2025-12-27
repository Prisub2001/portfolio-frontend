import ThemeToggle from "./ThemeToggle";
import github from "../assets/images/github.png";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* logo */}
        <h1 className="text-xl font-bold text-gray-900 dark:text-white">
          Priyanshu<span className="text-blue-500">.dev</span>
        </h1>

        {/* links */}
        <ul className="hidden md:flex gap-8 text-gray-700 dark:text-gray-300">
          <li href="#about" className="hover:text-blue-500 cursor-pointer">
            <a href="#about">About</a>
          </li>
          <li className="hover:text-blue-500 cursor-pointer">
            <a href="#experience">Experience</a>
          </li>
          <li className="hover:text-blue-500 cursor-pointer">
            <a href="#projects">Projects</a>
          </li>
          <li className="hover:text-blue-500 cursor-pointer">
            <a href="#contact">Contact</a>
          </li>
        </ul>

        {/* right side */}
        <div className="flex items-center gap-4">
          {/* social icons */}
          <a
            href="https://github.com/Prisub2001"
            target="_blank"
            rel="noreferrer"
            className="relative group hidden sm:block"
          >
            <img
              src={github}
              alt="GitHub"
              className="w-12 h-12 object-contain brightness-110
               group-hover:scale-110 transition"
            />

            {/* Tooltip */}
            <span
              className="pointer-events-none absolute -bottom-12 left-1/2 -translate-x-1/2
               whitespace-nowrap rounded-md bg-gray-900 text-white text-xs
               px-3 py-1 opacity-0 scale-95
               group-hover:opacity-100 group-hover:scale-100
               transition-all duration-200"
            >
              GitHub
            </span>
          </a>

          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
