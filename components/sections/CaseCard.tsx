"use client";

import { motion } from "framer-motion";

type CaseCardProps = {
  client: string;
  segment: string;
  challenge: string;
  approach: string;
  solution: string;
  outcome: string;
  index: number;
};

export function CaseCard({
  client,
  segment,
  challenge,
  approach,
  solution,
  outcome,
  index,
}: CaseCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="rounded-xl border border-graphite/10 dark:border-white/10 bg-white dark:bg-white/5 p-6 shadow-sm"
    >
      <div className="flex flex-wrap items-center gap-2">
        <h3 className="font-semibold text-graphite dark:text-white">{client}</h3>
        <span className="rounded-full bg-primary/10 px-3 py-0.5 text-xs font-medium text-primary">
          {segment}
        </span>
      </div>
      <dl className="mt-4 space-y-3 text-sm">
        <div>
          <dt className="font-medium text-graphite/70 dark:text-white/70">Desafio</dt>
          <dd className="mt-0.5 text-graphite/90 dark:text-white/90">{challenge}</dd>
        </div>
        <div>
          <dt className="font-medium text-graphite/70 dark:text-white/70">Abordagem</dt>
          <dd className="mt-0.5 text-graphite/90 dark:text-white/90">{approach}</dd>
        </div>
        <div>
          <dt className="font-medium text-graphite/70 dark:text-white/70">Solução</dt>
          <dd className="mt-0.5 text-graphite/90 dark:text-white/90">{solution}</dd>
        </div>
        <div>
          <dt className="font-medium text-graphite/70 dark:text-white/70">Resultado</dt>
          <dd className="mt-0.5 text-graphite/90 dark:text-white/90">{outcome}</dd>
        </div>
      </dl>
    </motion.article>
  );
}
