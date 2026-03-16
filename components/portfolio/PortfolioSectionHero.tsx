"use client";

import { motion } from "framer-motion";

const METRICS = [
  { value: "+40", label: "projetos entregues" },
  { value: "+10", label: "plataformas em produção" },
  { value: "+30", label: "pipelines de dados implementados" },
  { value: "20M+", label: "registros processados por mês" },
];

export function PortfolioSectionHero() {
  return (
    <section className="relative overflow-hidden bg-[var(--background)] px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-[1280px]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-3xl"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Portfólio
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-graphite dark:text-white sm:text-4xl lg:text-5xl balance">
            Casos de engenharia
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-graphite/70 dark:text-white/70">
            Plataformas SaaS, pipelines de dados e sistemas de IA construídos com arquitetura
            moderna e foco em escala.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4"
        >
          {METRICS.map((m) => (
            <div
              key={m.label}
              className="rounded-xl border border-graphite/10 dark:border-white/10 bg-white dark:bg-white/5 px-5 py-4 shadow-sm"
            >
              <p className="text-2xl font-bold tracking-tight text-primary sm:text-3xl">
                {m.value}
              </p>
              <p className="mt-1 text-sm text-graphite/70 dark:text-white/70">{m.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
