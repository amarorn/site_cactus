"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Target,
  Users,
  Zap,
  Shield,
  Handshake,
  Layers,
} from "lucide-react";

const differentials = [
  {
    icon: Code2,
    title: "Profundidade técnica",
    description: "Engenharia sólida, arquitetura pensada para escala e manutenção.",
  },
  {
    icon: Target,
    title: "Visão de negócio",
    description: "Entendemos o resultado esperado e alinhamos tecnologia a ele.",
  },
  {
    icon: Users,
    title: "Squads multidisciplinares",
    description: "Desenvolvedores, engenheiros de dados, arquitetos e cientistas de dados.",
  },
  {
    icon: Zap,
    title: "Performance e escalabilidade",
    description: "Sistemas projetados para crescer com o seu negócio.",
  },
  {
    icon: Shield,
    title: "Arquitetura sólida",
    description: "Fundações técnicas que evitam débito e retrabalho.",
  },
  {
    icon: Handshake,
    title: "Parceria próxima",
    description: "Comunicação clara, acompanhamento e transparência.",
  },
  {
    icon: Layers,
    title: "Software, dados e IA integrados",
    description: "Capacidade de unir produto, analytics e inteligência artificial.",
  },
];

export function WhyCactus() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32 bg-white dark:bg-graphite">
      <div className="pointer-events-none absolute inset-0 bg-section-depth" aria-hidden />
      <div className="pointer-events-none absolute inset-0 bg-section-vignette" aria-hidden />
      <div className="pointer-events-none absolute inset-0 text-graphite dark:text-white bg-pattern-dots" aria-hidden />
      <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            POR QUE A CACTUS
          </p>
          <h2 className="mt-2 text-2xl font-bold text-graphite dark:text-white sm:text-3xl lg:text-4xl">
            Diferenciais
          </h2>
          <p className="mt-4 text-base leading-relaxed text-graphite/80 dark:text-white/80">
            Competência técnica, proximidade e foco em resultado.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {differentials.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group flex gap-4 rounded-xl border border-graphite/10 dark:border-white/10 bg-white dark:bg-white/5 p-6 card-light-interactive hover:border-primary/20 dark:hover:border-white/15"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                <item.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-graphite dark:text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-graphite/80 dark:text-white/80">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
