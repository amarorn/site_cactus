"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/motion";
import { useReducedMotion } from "@/lib/hooks";

type StaggeredRevealProps = {
  children: React.ReactNode;
  className?: string;
  once?: boolean;
  margin?: string;
  staggerDelay?: number;
};

/**
 * Staggered children reveal on scroll. Uses opacity + y for 60fps.
 * Respects prefers-reduced-motion.
 */
export function StaggeredReveal({
  children,
  className = "",
  once = true,
  margin = "-40px",
  staggerDelay = 0.06,
}: StaggeredRevealProps) {
  const reduced = useReducedMotion();

  const containerVariants = {
    ...staggerContainer,
    visible: {
      ...staggerContainer.visible,
      transition: {
        staggerChildren: staggerDelay,
        staggerDirection: 1,
      },
    },
  };

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * Wrapper for each staggered child. Use inside StaggeredReveal.
 */
export function StaggeredItem({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduced = useReducedMotion();
  if (reduced) return <div className={className}>{children}</div>;
  return (
    <motion.div variants={staggerItem} className={className}>
      {children}
    </motion.div>
  );
}
