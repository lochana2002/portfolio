"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Initialize dark mode from localStorage
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }
  }, []);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setScrolled(true);
      else setScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll function
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
   <header
  className={`sticky top-0 z-50 left-0 w-full transition-all duration-300 ${
    scrolled
      ? "bg-transparent backdrop-blur-md"
      : "bg-gray-800"
  }`}
>
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <button
          onClick={() => scrollToSection("home")}
          className="text-xl font-bold dark:text-white"
        >
          Lochana<span className="text-blue-600">.</span>
        </button>

        <div className="hidden md:flex gap-8 text-sm font-medium items-center">
          <button
            onClick={() => scrollToSection("about")}
            className="hover:text-blue-600 dark:hover:text-blue-400"
          >
            About
          </button>
           <button
            onClick={() => scrollToSection("education")}
            className="hover:text-blue-600 dark:hover:text-blue-400"
          >
            Education
          </button>
          <button
            onClick={() => scrollToSection("skills")}
            className="hover:text-blue-600 dark:hover:text-blue-400"
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="hover:text-blue-600 dark:hover:text-blue-400"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="hover:text-blue-600 dark:hover:text-blue-400"
          >
            Contact
          </button>
        </div>
      </nav>
    </header>
  );
}
