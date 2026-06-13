"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const currentTheme = theme === "system" ? resolvedTheme : theme;

  return (
    <button
      onClick={() =>
        setTheme(currentTheme === "dark" ? "light" : "dark")
      }
      className="
        px-4 py-2 rounded-full
        bg-gray-200 dark:bg-gray-800
        text-gray-800 dark:text-gray-200
        transition-all duration-300
        hover:scale-105
      "
    >
      {currentTheme === "dark" ? "☀ Light" : "🌙 Dark"}
    </button>
  );
}