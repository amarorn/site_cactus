"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type TechnologyBadgeProps = {
  label: string;
  className?: string;
  size?: "sm" | "md";
};

export function TechnologyBadge({
  label,
  className,
  size = "sm",
}: TechnologyBadgeProps) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.92 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      className={cn(
        "inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-2.5 py-0.5 font-medium text-primary dark:border-primary/30 dark:bg-primary/10",
        size === "sm" && "text-xs",
        size === "md" && "text-sm px-3 py-1",
        className
      )}
    >
      {label}
    </motion.span>
  );
}
