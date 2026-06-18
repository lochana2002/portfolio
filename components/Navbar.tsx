"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon, Menu, X } from "lucide-react";

export default function Navbar() {
  const { theme, setTheme, resolvedTheme } = useTheme();

  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track active section
  useEffect(() => {
    const sections = ["home", "about", "education", "skills", "projects", "certifications", "contact"];

    const observers = sections.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.4 }
      );

      observer.observe(el);
      return observer;
    });

    return () => observers.forEach((obs) => obs?.disconnect());
  }, [mounted]);

  if (!mounted) return null;

  const currentTheme = theme === "system" ? resolvedTheme : theme;
  const navLinks = ["home", "about", "education", "skills", "projects", "certifications"];

  const scrollToSection = (id: string) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const toggleTheme = () => {
    setTheme(currentTheme === "dark" ? "light" : "dark");
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/70 dark:bg-[#0a0a0f]/70 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-800/50 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <button
          onClick={() => scrollToSection("home")}
          className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white"
        >
          Lochana{" "}
          <span className="bg-gradient-to-r from-blue-500 via-blue-600 to-purple-800 bg-clip-text text-transparent">
            Ehelapitiya
          </span>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => {
            const isActive = activeSection === item;
            return (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`text-sm transition-all duration-200 relative ${
                  isActive
                    ? "text-white font-medium"
                    : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
                {/* Active underline indicator */}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full" />
                )}
              </button>
            );
          })}

          {/* Contact Button */}
          <button
            onClick={() => scrollToSection("contact")}
            className={`px-6 py-3 rounded-lg text-white text-sm transition hover:scale-[1.05] shadow-md ${
              activeSection === "contact"
                ? "bg-gradient-to-r from-purple-600 to-blue-500 ring-2 ring-purple-400/50"
                : "bg-gradient-to-r from-blue-500 via-blue-600 to-purple-800"
            }`}
          >
            Contact Me
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:border-blue-500 hover:text-blue-500 transition"
            aria-label="Toggle theme"
          >
            {currentTheme === "dark" ? (
              <Sun size={16} className="text-amber-400" />
            ) : (
              <Moon size={16} />
            )}
          </button>
        </div>

        {/* Mobile Buttons */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 dark:border-gray-700 text-gray-600"
          >
            {currentTheme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 dark:border-gray-700"
          >
            {mobileOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white dark:bg-[#0a0a0f] border-t border-gray-200 dark:border-gray-800 px-6 py-5 space-y-4 animate-in fade-in slide-in-from-top-2">
          {navLinks.map((item) => {
            const isActive = activeSection === item;
            return (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`block w-full text-left transition ${
                  isActive
                    ? "text-white font-medium"
                    : "text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                }`}
              >
                {isActive ? "→ " : ""}{item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            );
          })}
          <button
            onClick={() => scrollToSection("contact")}
            className={`w-full text-left font-medium transition ${
              activeSection === "contact" ? "text-purple-500" : "text-blue-600"
            }`}
          >
            Contact Me →
          </button>
        </div>
      )}
    </header>
  );
}