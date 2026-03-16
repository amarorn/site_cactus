"use client";

import { useEffect, useState } from "react";

/**
 * Returns true when the user prefers reduced motion (accessibility).
 * Use to skip or shorten animations.
 */
export function useReducedMotion(): boolean {
  const [prefersReduced, setPrefersReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    queueMicrotask(() => setPrefersReduced(mq.matches));
    const handler = () => setPrefersReduced(mq.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return prefersReduced;
}
