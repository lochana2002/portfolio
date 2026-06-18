"use client";
import { useEffect, useRef } from "react";

const COLORS = ["#ffffff", "#93c5fd", "#c4b5fd", "#67e8f9", "#e0f2fe"];

export default function SmartHeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const cpu = navigator.hardwareConcurrency || 4;

    // 🧠 AUTO PERFORMANCE MODE
    const isMobile = w < 768;
    const isLowEnd = cpu <= 4;

    const particleCount =
      isMobile ? 40 : isLowEnd ? 60 : 90;

    const blobCount =
      isMobile ? 3 : isLowEnd ? 4 : 6;

    const particleSpeed = isMobile ? 0.15 : 0.25;

    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.scale(dpr, dpr);

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.scale(dpr, dpr);
    };

    window.addEventListener("resize", resize);

    // ✨ Particles
    const particles = Array.from({ length: particleCount }, (_, i) => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * particleSpeed,
      vy: (Math.random() - 0.5) * particleSpeed,
      size: Math.random() * 2 + 0.6,
      color: COLORS[i % COLORS.length],
      alpha: 0.12 + Math.random() * 0.25,
    }));

    // 🌫️ Blobs
    const blobs = Array.from({ length: blobCount }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: 140 + Math.random() * 160,
      vx: (Math.random() - 0.5) * (isMobile ? 0.05 : 0.12),
      vy: (Math.random() - 0.5) * (isMobile ? 0.05 : 0.12),
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      alpha: isMobile ? 0.05 : 0.08,
    }));

    let frame: number;

    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      // 🌫️ Blobs (background glow)
      for (const b of blobs) {
        b.x += b.vx;
        b.y += b.vy;

        if (b.x < -200) b.x = w + 200;
        if (b.x > w + 200) b.x = -200;
        if (b.y < -200) b.y = h + 200;
        if (b.y > h + 200) b.y = -200;

        const gradient = ctx.createRadialGradient(
          b.x,
          b.y,
          0,
          b.x,
          b.y,
          b.r
        );
        
        function hexToRgba(hex: string, alpha: number) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
        gradient.addColorStop(1, "transparent");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
        ctx.fill();
      }

      // ✨ Particles
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fill();
      }

      ctx.globalAlpha = 1;

      frame = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
}