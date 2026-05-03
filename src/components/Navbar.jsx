import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar() {
  const location = useLocation();
  const [isDark, setIsDark] = useState(false);

  // LOAD THEME ON START
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    }
  }, []);

  // TOGGLE THEME
  const toggleTheme = () => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  const linkStyle = (path) =>
    `relative transition-all duration-300 
    text-gray-600 dark:text-gray-400 
    hover:text-amber-400 
    ${
      location.pathname === path
        ? "text-amber-400 font-semibold"
        : ""
    }
    after:content-[''] after:absolute after:left-0 after:-bottom-1 
    after:w-0 after:h-[2px] after:bg-amber-400 
    after:transition-all after:duration-300 hover:after:w-full`;

  return (
    <div className="flex justify-between items-center px-8 py-4 
    bg-white dark:bg-[#111111] 
    border-b border-gray-200 dark:border-white/10 
    sticky top-0 z-50 transition-colors duration-300">

      {/* LOGO */}
      <Link
        to="/"
        className="text-2xl font-extrabold tracking-[0.08em] 
        hover:scale-105 active:scale-95 transition"
      >
        <span className="text-gray-900 dark:text-gray-200">Decide</span>
        <span className="text-amber-400">X</span>
      </Link>

      {/* NAV */}
      <div className="flex items-center space-x-8">
        <Link to="/" className={linkStyle("/")}>Home</Link>
        <Link to="/create" className={linkStyle("/create")}>New Decision</Link>
        <Link to="/history" className={linkStyle("/history")}>History</Link>

        {/* TOGGLE BUTTON */}
        <button
          onClick={toggleTheme}
          className="ml-4 px-3 py-1 rounded-lg 
          bg-gray-200 text-black 
          dark:bg-gray-700 dark:text-white 
          hover:scale-110 active:scale-90 transition"
        >
          {isDark ? "☀️" : "🌙"}
        </button>
      </div>
    </div>
  );
}