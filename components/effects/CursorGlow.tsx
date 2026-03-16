"use client";

import { useRef, useEffect, useCallback } from "react";

const GLOW_SIZE = 300;
const LERP = 0.12;

export function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);
  const x = useRef(0);
  const y = useRef(0);
  const targetX = useRef(0);
  const targetY = useRef(0);
  const rafRef = useRef<number>(0);

  const updatePosition = useCallback((clientX: number, clientY: number) => {
    targetX.current = clientX;
    targetY.current = clientY;
  }, []);

  const tickRef = useRef<() => void>(() => {});

  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    tickRef.current = () => {
      x.current += (targetX.current - x.current) * LERP;
      y.current += (targetY.current - y.current) * LERP;
      const el = ref.current;
      if (el) {
        el.style.transform = `translate3d(${x.current}px, ${y.current}px, 0) translate(-50%, -50%)`;
      }
      rafRef.current = requestAnimationFrame(() => tickRef.current());
    };
    const onMove = (e: MouseEvent) => updatePosition(e.clientX, e.clientY);
    window.addEventListener("mousemove", onMove, { passive: true });
    rafRef.current = requestAnimationFrame(() => tickRef.current());
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, [updatePosition]);

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed left-0 top-0 z-[100] hidden md:block"
      data-cursor-glow
      aria-hidden
      style={{
        width: GLOW_SIZE,
        height: GLOW_SIZE,
        marginLeft: 0,
        marginTop: 0,
        willChange: "transform",
        background: "radial-gradient(circle, rgba(34,197,94,0.18) 0%, transparent 60%)",
        borderRadius: "50%",
        transform: "translate3d(-9999px, -9999px, 0) translate(-50%, -50%)",
      }}
    />
  );
}
