"use client";

import { motion } from "framer-motion";

const specialities = [
  "Web",
  "Mobile",
  "APIs",
  "Cloud",
  "Data Platforms",
  "Analytics",
  "Data Science",
  "LLM Engineering",
  "Automação Inteligente",
  "Observabilidade",
  "Governança",
];

export function TechStack() {
  return (
    <section className="border-t border-graphite/10 dark:border-white/10 bg-graphite py-24 sm:py-32 text-white">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            ESPECIALIDADES TÉCNICAS
          </p>
          <h2 className="mt-2 text-2xl font-bold sm:text-3xl lg:text-4xl">
            Stack e capacidades
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/80">
            Domínio em tecnologias e práticas para entregar soluções completas.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-12 flex flex-wrap justify-center gap-3"
        >
          {specialities.map((item, i) => (
            <motion.span
              key={item}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-medium backdrop-blur transition-all duration-300 hover:border-primary/50 hover:bg-primary/20"
            >
              {item}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
