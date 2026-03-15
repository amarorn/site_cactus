"use client";

import { motion } from "framer-motion";
import type { CaseStudyDetail } from "@/content/case-studies";
import { useReducedMotion } from "@/lib/hooks";

export function CaseChallenge({ caseStudy }: { caseStudy: CaseStudyDetail }) {
  const reduced = useReducedMotion();
  const reveal = reduced
    ? { initial: { opacity: 1 }, animate: { opacity: 1 } }
    : { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-80px" }, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } };

  return (
    <section className="relative section-spacing bg-white dark:bg-graphite" aria-labelledby="challenge-heading">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          <motion.div className="lg:col-span-2" {...reveal}>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">O desafio</p>
            <h2 id="challenge-heading" className="mt-2 text-h2 font-bold text-graphite dark:text-white">
              Contexto e dores
            </h2>
          </motion.div>
          <motion.div className="lg:col-span-3" {...reveal} transition={{ ...reveal.transition, delay: 0.1 }}>
            <p className="text-body-lg leading-relaxed text-graphite/90 dark:text-white/90">
              {caseStudy.challenge}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
