"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

type ProjectHighlightsProps = {
  items: string[];
  className?: string;
};

export function ProjectHighlights({ items, className }: ProjectHighlightsProps) {
  return (
    <ul className={cn("space-y-3", className)} role="list">
      {items.map((item, i) => (
        <motion.li
          key={item}
          initial={{ opacity: 0, x: -8 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: i * 0.05 }}
          className="flex items-start gap-3 text-graphite dark:text-white/90"
        >
          <CheckCircle2
            className="mt-0.5 h-5 w-5 shrink-0 text-primary"
            aria-hidden
          />
          <span className="text-sm leading-relaxed sm:text-base">{item}</span>
        </motion.li>
      ))}
    </ul>
  );
}
