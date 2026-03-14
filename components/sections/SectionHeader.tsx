"use client";

import { motion } from "framer-motion";

type SectionHeaderProps = {
  overline?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
};

export function SectionHeader({
  overline,
  title,
  subtitle,
  centered = true,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4 }}
      className={centered ? "mx-auto max-w-2xl text-center" : ""}
    >
      {overline && (
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          {overline}
        </p>
      )}
      <h2 className="mt-2 text-2xl font-bold text-graphite dark:text-white sm:text-3xl lg:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-graphite/80 dark:text-white/80 sm:text-lg">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
