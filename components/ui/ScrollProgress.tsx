"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { useReducedMotion } from "@/lib/hooks";

/**
 * Scroll progress bar at top. Uses transform (scaleX) for 60fps.
 * Hides when prefers-reduced-motion.
 */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const reduced = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  if (!mounted || reduced) return null;

  return (
    <div
      className="fixed left-0 right-0 top-0 z-[100] h-0.5 w-full bg-graphite/20 dark:bg-white/10"
      aria-hidden
    >
      <motion.div
        className="h-full w-full origin-left bg-primary"
        style={{ scaleX }}
      />
    </div>
  );
}
