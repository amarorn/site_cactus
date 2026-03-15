"use client";

import { useTransform, useScroll } from "framer-motion";
import { useReducedMotion } from "./useReducedMotion";

/**
 * Returns a motion value for Y translation based on scroll (parallax).
 * Returns 0 when prefers-reduced-motion.
 */
export function useParallax(offset: number = 40, range: [number, number] = [0, 0.5]) {
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const yRaw = useTransform(scrollYProgress, range, [0, -offset]);
  const y = useTransform(yRaw, (v) => (reduced ? 0 : v));
  return y;
}
