"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [hover, setHover] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!isFinePointer || prefersReducedMotion) return;

    const handleMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };

    const handleLeave = () => setVisible(false);
    const handleEnter = () => setVisible(true);

    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target?.closest("a, button, [role='button'], [data-cursor-hover]")) {
        setHover(true);
      }
    };

    const handleOut = () => setHover(false);

    document.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseover", handleOver);
    document.addEventListener("mouseout", handleOut);
    document.body.addEventListener("mouseleave", handleLeave);
    document.body.addEventListener("mouseenter", handleEnter);

    return () => {
      document.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseover", handleOver);
      document.removeEventListener("mouseout", handleOut);
      document.body.removeEventListener("mouseleave", handleLeave);
      document.body.removeEventListener("mouseenter", handleEnter);
      document.body.classList.remove("cursor-custom");
    };
  }, []);

  useEffect(() => {
    if (visible) document.body.classList.add("cursor-custom");
    else document.body.classList.remove("cursor-custom");
    return () => document.body.classList.remove("cursor-custom");
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      className="pointer-events-none fixed left-0 top-0 z-[9999] hidden md:block"
      style={{ transform: `translate(${pos.x}px, ${pos.y}px)` }}
      aria-hidden
    >
      <motion.div
        className="absolute left-0 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary"
        animate={{
          scale: hover ? 0.4 : 1,
          opacity: 1,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      />
      <motion.div
        className="absolute left-0 top-0 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-graphite/35 dark:border-primary/70"
        animate={{
          scale: hover ? 1.8 : 1,
          opacity: hover ? 0.9 : 0.6,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      />
    </div>
  );
}
