"use client";

import { motion } from "framer-motion";
import { sectionReveal } from "@/lib/motion";
import { useReducedMotion } from "@/lib/hooks";

type AnimatedSectionProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  once?: boolean;
  margin?: string;
};

/**
 * Section fade-in on scroll. Uses opacity + y for 60fps.
 * No animation when prefers-reduced-motion.
 */
export function AnimatedSection({
  children,
  className = "",
  delay = 0,
  once = true,
  margin = "-60px",
}: AnimatedSectionProps) {
  const reduced = useReducedMotion();

  const variants = {
    hidden: sectionReveal.hidden,
    visible: {
      ...sectionReveal.visible,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const, delay },
    },
  };

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
