"use client";

import { useEffect, useState } from "react";

export default function ScrollBackground() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Convert scroll to 0 → 1 range
  const maxScroll = 600;
  const progress = Math.min(scrollY / maxScroll, 1);

  // Interpolate colors (blue → purple)
  const r = Math.floor(255 - progress * 100);
  const g = Math.floor(255 - progress * 150);
  const b = Math.floor(255);

  const backgroundColor =
    scrollY < 50
      ? "transparent"
      : `rgb(${r}, ${g}, ${b})`;

  return (
    <div
      className="fixed inset-0 -z-10 transition-colors duration-300"
      style={{
        background: `linear-gradient(to bottom, ${backgroundColor}, ${
          document?.documentElement?.classList.contains("dark")
            ? "#0a0a0f"
            : "#ffffff"
        })`,
      }}
    />
  );
}