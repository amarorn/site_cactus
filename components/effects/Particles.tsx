"use client";

import { useRef, useEffect } from "react";

const PARTICLE_COUNT = 30;
const MIN_SIZE = 2;
const MAX_SIZE = 4;
const MIN_OPACITY = 0.2;
const MAX_OPACITY = 0.6;

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  phase: number;
};

function initParticles(width: number, height: number): Particle[] {
  return Array.from({ length: PARTICLE_COUNT }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * 0.3,
    vy: (Math.random() - 0.5) * 0.3,
    size: MIN_SIZE + Math.random() * (MAX_SIZE - MIN_SIZE),
    opacity: MIN_OPACITY + Math.random() * (MAX_OPACITY - MIN_OPACITY),
    phase: Math.random() * Math.PI * 2,
  }));
}

export function Particles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const rafRef = useRef<number>(0);
  const timeRef = useRef(0);

  const drawRef = useRef<() => void>(() => {});

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    drawRef.current = () => {
      const ctx = canvas.getContext("2d", { alpha: true });
      if (!ctx) return;
      const { width, height } = canvas;
      ctx.clearRect(0, 0, width, height);
      const t = timeRef.current * 0.001;
      particlesRef.current.forEach((p) => {
        const drift = Math.sin(t + p.phase) * 0.15;
        const x = (p.x + (p.vx + drift) * 2) % (width + 50);
        const y = (p.y + (p.vy + drift * 0.5) * 2) % (height + 50);
        const px = x < 0 ? x + width + 50 : x > width ? x - width - 50 : x;
        const py = y < 0 ? y + height + 50 : y > height ? y - height - 50 : y;
        p.x = px;
        p.y = py;
        ctx.beginPath();
        ctx.arc(px, py, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity * (0.7 + 0.3 * Math.sin(t + p.phase))})`;
        ctx.fill();
      });
      timeRef.current += 16;
      rafRef.current = requestAnimationFrame(() => drawRef.current());
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio, 2);
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      const ctx = canvas.getContext("2d");
      if (ctx) ctx.scale(dpr, dpr);
      particlesRef.current = initParticles(w, h);
    };

    resize();
    window.addEventListener("resize", resize);

    const handleVisibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = 0;
      } else {
        timeRef.current = performance.now();
        rafRef.current = requestAnimationFrame(() => drawRef.current());
      }
    };

    if (!document.hidden) rafRef.current = requestAnimationFrame(() => drawRef.current());
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", handleVisibility);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[1]"
      aria-hidden
      style={{ transform: "translateZ(0)" }}
    />
  );
}
