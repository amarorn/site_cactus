"use client";

import { motion } from "framer-motion";

const steps = [
  {
    title: "Diagnóstico e descoberta",
    description:
      "Entendemos o contexto, as dores e os objetivos para definir a melhor estratégia.",
  },
  {
    title: "Arquitetura da solução",
    description:
      "Desenhamos a solução técnica com foco em escalabilidade, manutenção e evolução.",
  },
  {
    title: "Implementação",
    description:
      "Desenvolvimento em sprints com entregas incrementais e acompanhamento próximo.",
  },
  {
    title: "Governança e observabilidade",
    description:
      "Monitoramento, qualidade de dados e processos para garantir operação saudável.",
  },
  {
    title: "Evolução contínua",
    description:
      "Apoio à evolução do produto e dos dados conforme as necessidades do negócio.",
  },
];

export function ProcessTimeline() {
  return (
    <section className="relative overflow-hidden border-t border-graphite/10 dark:border-white/10 bg-light-gray dark:bg-graphite py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-section-depth" aria-hidden />
      <div className="pointer-events-none absolute inset-0 bg-section-vignette" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0 text-graphite dark:text-white bg-pattern-dots"
        aria-hidden
      />
      <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            COMO ENTREGAMOS
          </p>
          <h2 className="mt-2 text-2xl font-bold text-graphite dark:text-white sm:text-3xl lg:text-4xl">
            Metodologia e execução
          </h2>
          <p className="mt-4 text-base leading-relaxed text-graphite/80 dark:text-white/80">
            Maturidade operacional e método para projetos de software, dados e IA.
          </p>
        </motion.div>

        <div className="mt-20 space-y-0">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex gap-8 border-l-2 border-primary/30 pl-8 pr-4 pb-12 last:pb-0 -mr-4 rounded-r-lg transition-colors duration-200 hover:bg-white/60 dark:hover:bg-white/5"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.08 + 0.1 }}
                className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-primary"
              />
              <div>
                <h3 className="text-lg font-semibold text-graphite dark:text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-graphite/80 dark:text-white/80">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
