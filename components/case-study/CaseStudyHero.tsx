"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { HeroBackground } from "@/components/sections/HeroBackground";
import type { CaseStudyDetail } from "@/content/case-studies";
import { useReducedMotion } from "@/lib/hooks";

export function CaseStudyHero({ caseStudy }: { caseStudy: CaseStudyDetail }) {
  const reduced = useReducedMotion();
  const fade = reduced
    ? { initial: { opacity: 1 }, animate: { opacity: 1 } }
    : { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } };

  return (
    <section className="relative overflow-hidden bg-graphite text-white">
      <HeroBackground />
      <div className="relative section-spacing px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1280px]">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-white/70">
              <li>
                <Link href="/clientes" className="transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded">
                  Clientes e Cases
                </Link>
              </li>
              <li aria-hidden>
                <ChevronRight className="h-4 w-4" />
              </li>
              <li className="text-white font-medium" aria-current="page">
                {caseStudy.client}
              </li>
            </ol>
          </nav>
          <motion.p
            {...fade}
            transition={{ ...fade.transition, delay: 0 }}
            className="text-small font-semibold uppercase tracking-[0.2em] text-primary"
          >
            {caseStudy.segment}
          </motion.p>
          <motion.h1
            {...fade}
            transition={{ ...fade.transition, delay: 0.08 }}
            className="mt-4 text-hero font-bold tracking-tight balance"
          >
            {caseStudy.client}
          </motion.h1>
          <motion.p
            {...fade}
            transition={{ ...fade.transition, delay: 0.16 }}
            className="mt-6 text-body-lg text-white/85 max-w-2xl"
          >
            {caseStudy.outcome}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
