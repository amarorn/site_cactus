"use client";

import { motion } from "framer-motion";

type TechBadgeProps = {
  label: string;
};

export function TechBadge({ label }: TechBadgeProps) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      className="inline-flex items-center rounded-md border border-graphite/15 bg-graphite/5 px-2.5 py-1 text-xs font-medium text-graphite/90 transition-colors duration-200 hover:border-primary/30 hover:bg-primary/10 hover:text-graphite dark:border-white/[0.08] dark:bg-white/[0.04] dark:text-white/90 dark:hover:border-[#22c55e]/30 dark:hover:bg-[#22c55e]/10 dark:hover:text-white"
    >
      {label}
    </motion.span>
  );
}
