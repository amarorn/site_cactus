"use client";

import { useRef, useState, useCallback } from "react";

type RippleWrapperProps = {
  children: React.ReactNode;
  className?: string;
};

/**
 * Wraps any clickable (e.g. CTALink). Adds ripple on click; transform + opacity for 60fps.
 */
export function RippleWrapper({ children, className = "" }: RippleWrapperProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [ripples, setRipples] = useState<Array<{ id: number; x: number; y: number }>>([]);

  const handleClick = useCallback((e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now();
    setRipples((prev) => [...prev, { id, x, y }]);
    setTimeout(() => setRipples((prev) => prev.filter((r) => r.id !== id)), 600);
  }, []);

  return (
    <span
      ref={ref}
      className={`relative inline-block overflow-hidden ${className}`}
      onClick={handleClick}
    >
      {children}
      {ripples.map((r) => (
        <span
          key={r.id}
          className="absolute rounded-full bg-white/30 pointer-events-none animate-ripple"
          style={{
            left: r.x,
            top: r.y,
            width: 20,
            height: 20,
            marginLeft: -10,
            marginTop: -10,
          }}
        />
      ))}
    </span>
  );
}
