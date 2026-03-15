"use client";

import { motion } from "framer-motion";
import type { CaseStudyDetail } from "@/content/case-studies";
import { useReducedMotion } from "@/lib/hooks";

export function CaseMetrics({
  caseStudy,
}: {
  caseStudy: CaseStudyDetail & { metrics: NonNullable<CaseStudyDetail["metrics"]> };
}) {
  const reduced = useReducedMotion();
  const { metrics } = caseStudy;

  const container = reduced
    ? {}
    : { initial: { opacity: 0 }, whileInView: { opacity: 1 }, viewport: { once: true, margin: "-60px" }, transition: { duration: 0.4 } };
  const item = reduced
    ? {}
    : { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const } };

  return (
    <section className="relative section-spacing bg-white dark:bg-graphite" aria-labelledby="results-heading">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center max-w-2xl mx-auto mb-14" {...container}>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Resultados</p>
          <h2 id="results-heading" className="mt-2 text-h2 font-bold text-graphite dark:text-white">
            Métricas e impacto
          </h2>
        </motion.div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              className="rounded-xl border border-graphite/10 dark:border-white/10 bg-light-gray/50 dark:bg-white/5 p-8 text-center"
              {...item}
              transition={{ ...item.transition, delay: i * 0.1 }}
            >
              <p className="text-3xl sm:text-4xl font-bold text-primary">{m.value}</p>
              <p className="mt-2 font-semibold text-graphite dark:text-white">{m.label}</p>
              {m.sublabel && (
                <p className="mt-0.5 text-sm text-graphite/70 dark:text-white/70">{m.sublabel}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
