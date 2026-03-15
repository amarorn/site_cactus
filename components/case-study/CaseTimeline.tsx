"use client";

import { motion } from "framer-motion";
import type { CaseStudyDetail } from "@/content/case-studies";
import { useReducedMotion } from "@/lib/hooks";

export function CaseTimeline({
  caseStudy,
}: {
  caseStudy: CaseStudyDetail & { timeline: NonNullable<CaseStudyDetail["timeline"]> };
}) {
  const reduced = useReducedMotion();
  const { timeline } = caseStudy;

  const reveal = reduced
    ? { initial: { opacity: 1 }, animate: { opacity: 1 } }
    : { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-60px" }, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const } };

  return (
    <section className="relative section-spacing bg-light-gray dark:bg-graphite/50" aria-labelledby="timeline-heading">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <motion.div className="mb-14" {...reveal}>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Cronograma</p>
          <h2 id="timeline-heading" className="mt-2 text-h2 font-bold text-graphite dark:text-white">
            Fases do projeto
          </h2>
        </motion.div>
        <div className="relative">
          <div
            className="absolute left-4 top-0 bottom-0 w-0.5 bg-primary/30 rounded-full sm:left-1/2 sm:-translate-x-px"
            aria-hidden
          />
          <ul className="space-y-12 sm:space-y-16">
            {timeline.map((step, i) => (
              <motion.li
                key={step.phase}
                className="relative flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-12 pl-10 sm:pl-0"
                initial={reduced ? undefined : { opacity: 0, x: i % 2 === 0 ? -24 : 24 }}
                whileInView={reduced ? undefined : { opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as const }}
              >
                <div
                  className="absolute left-0 sm:left-1/2 w-8 h-8 rounded-full bg-primary -translate-x-1/2 -translate-y-1 sm:translate-y-0 flex items-center justify-center text-white text-xs font-bold"
                  aria-hidden
                >
                  {i + 1}
                </div>
                <div className={i % 2 === 0 ? "sm:text-right sm:w-5/12" : "sm:ml-auto sm:w-5/12"}>
                  <p className="font-semibold text-graphite dark:text-white">{step.phase}</p>
                  <p className="text-sm text-primary mt-0.5">{step.duration}</p>
                </div>
                <div className={`sm:w-5/12 ${i % 2 === 0 ? "sm:text-left" : "sm:text-right sm:order-first"}`}>
                  <p className="text-graphite/90 dark:text-white/90 leading-relaxed">{step.description}</p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
