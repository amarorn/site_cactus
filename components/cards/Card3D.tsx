"use client";

import { useRef, useState, useCallback } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const PERSPECTIVE = 1000;
const TILT_MAX = 8;

type Card3DProps = {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "article" | "section";
};

function useTilt3D() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const spring = { stiffness: 320, damping: 28 };
  const rotateX = useSpring(
    useTransform(y, [-0.5, 0.5], [TILT_MAX, -TILT_MAX]),
    spring
  );
  const rotateY = useSpring(
    useTransform(x, [-0.5, 0.5], [-TILT_MAX, TILT_MAX]),
    spring
  );
  return { x, y, rotateX, rotateY };
}

export function Card3D({
  children,
  className = "",
  as: Component = "div",
}: Card3DProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [highlight, setHighlight] = useState({ x: 50, y: 50 });
  const { x, y, rotateX, rotateY } = useTilt3D();

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const relX = (e.clientX - centerX) / rect.width;
      const relY = (e.clientY - centerY) / rect.height;
      x.set(relX);
      y.set(relY);
      setHighlight({
        x: 50 + relX * 30,
        y: 50 + relY * 30,
      });
    },
    [x, y]
  );

  const handleMouseLeave = useCallback(() => {
    x.set(0);
    y.set(0);
    setHighlight({ x: 50, y: 50 });
  }, [x, y]);

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: PERSPECTIVE,
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      whileHover={{ scale: 1.02, transition: { duration: 0.25 } }}
      className={`group relative h-full ${className}`}
    >
      <Component
        className="relative h-full rounded-2xl border border-graphite/10 bg-white shadow-lg transition-shadow duration-300 group-hover:shadow-xl dark:border-white/[0.08] dark:bg-white/[0.04] dark:group-hover:shadow-[#22c55e]/10"
        style={{ transform: "translateZ(0)" }}
      >
        <div
          className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: `radial-gradient(circle at ${highlight.x}% ${highlight.y}%, rgba(34,197,94,0.08) 0%, transparent 50%)`,
            transform: "translateZ(1px)",
          }}
          aria-hidden
        />
        <div className="relative z-10 h-full" style={{ transform: "translateZ(2px)" }}>
          {children}
        </div>
      </Component>
    </motion.div>
  );
}
