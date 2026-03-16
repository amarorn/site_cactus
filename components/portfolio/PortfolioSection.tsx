"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { PortfolioGrid } from "./PortfolioGrid";
import { portfolioProjects } from "@/data/portfolio";

export function PortfolioSection() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32 bg-white dark:bg-graphite">
      <div
        className="pointer-events-none absolute inset-0 bg-section-depth"
        aria-hidden
      />
      <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <SectionHeader
          overline="PROJETOS"
          title="Projetos e entregas"
          subtitle="Soluções de software, dados e IA com arquitetura escalável e entrega de valor."
          centered
        />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mt-14"
        >
          <PortfolioGrid projects={portfolioProjects} />
        </motion.div>
      </div>
    </section>
  );
}
