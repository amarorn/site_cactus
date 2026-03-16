"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { TechGridBackground } from "./TechGridBackground";

type PortfolioHeroProps = {
  overline?: string;
  title: string;
  subtitle?: string;
  ctaHref?: string;
  ctaLabel?: string;
};

export function PortfolioHero({
  overline = "PORTFOLIO",
  title,
  subtitle,
  ctaHref = "/contato",
  ctaLabel = "Fale conosco",
}: PortfolioHeroProps) {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <section className="relative min-h-[70vh] overflow-hidden bg-[var(--background)] px-4 py-24 sm:px-6 sm:py-32 lg:px-8 dark:bg-transparent">
      {isDark && (
        <>
          <TechGridBackground />
          <div
            className="absolute inset-0 opacity-30"
            style={{
              background: `
                radial-gradient(
                  ellipse 100% 100% at 50% 20%,
                  rgba(34, 197, 94, 0.15) 0%,
                  transparent 50%
                )
              `,
            }}
            aria-hidden
          />
        </>
      )}
      <div className="relative mx-auto max-w-[1280px]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-3xl"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-xs font-semibold uppercase tracking-[0.2em] text-primary"
          >
            {overline}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="mt-4 text-3xl font-bold tracking-tight text-graphite dark:text-white sm:text-4xl lg:text-5xl xl:text-6xl balance dark:[text-shadow:0_0_60px_rgba(34,197,94,0.15)]"
          >
            {title}
          </motion.h1>
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.25 }}
              className="mt-6 max-w-2xl text-lg leading-relaxed text-graphite/70 dark:text-white/70"
            >
              {subtitle}
            </motion.p>
          )}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.35 }}
            className="mt-10"
          >
            <Link
              href={ctaHref}
              className="inline-flex items-center gap-2 rounded-lg border border-primary/40 bg-primary/10 px-5 py-2.5 text-sm font-semibold text-primary transition-colors duration-200 hover:border-primary/60 hover:bg-primary/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
            >
              {ctaLabel}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
