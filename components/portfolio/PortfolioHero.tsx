"use client";

import { motion } from "framer-motion";
import { HeroBackground } from "@/components/sections/HeroBackground";

type PortfolioHeroProps = {
  overline?: string;
  title: string;
  subtitle?: string;
};

export function PortfolioHero({
  overline = "PORTFÓLIO",
  title,
  subtitle,
}: PortfolioHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-graphite px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <HeroBackground />
      <div className="relative mx-auto max-w-[1280px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-3xl"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            {overline}
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-gradient-animated balance">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
