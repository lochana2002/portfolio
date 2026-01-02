"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  if (!mounted) return null;

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-white/70 dark:bg-gray-900/70"
          : "bg-white dark:bg-gray-800"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollToSection("home")}
          className="text-xl font-bold"
        >
          Lochana<span className="text-blue-600">.</span>
        </button>

        {/* Links */}
        <div className="hidden md:flex gap-8 text-sm font-medium items-center">
          {["about", "education", "skills", "projects"].map(
            (item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="hover:text-blue-600 transition"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            )
          )}

      {/* ================= CONTACT BUTTON ================= */}
          <a
  href="/#contact"
  className="
    inline-flex items-center gap-2
    mt-1
    px-6 py-3
    rounded-lg
    text-sm font-medium
    text-white
    bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700
    shadow-lg
    hover:shadow-xl
    hover:scale-105
    transition-all duration-300
  "
>
 Let's Talk
</a>

          {/* Theme Toggle */}
          <button
            onClick={() =>
              setTheme(theme === "dark" ? "light" : "dark")
            }
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:scale-110 transition"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun size={18} className="text-yellow-400" />
            ) : (
              <Moon size={18} />
            )}
          </button>
        </div>
      </nav>
    </header>
  );
}
