"use client";

import { motion } from "framer-motion";
import { clientNames } from "@/content/clients";

export function ClientStrip() {
  return (
    <section className="border-y border-graphite/10 dark:border-white/10 bg-light-gray dark:bg-graphite/50 py-12">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.2em] text-graphite/60 dark:text-white/60"
        >
          Empresas que confiam na Cactus
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-4 sm:gap-6"
        >
          {clientNames.map((name, i) => (
            <motion.span
              key={name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ scale: 1.02, y: -2 }}
              className="rounded-lg border border-graphite/15 dark:border-white/20 bg-white dark:bg-white/5 px-5 py-2.5 text-sm font-medium text-graphite dark:text-white/90 shadow-sm transition-shadow hover:shadow-md"
            >
              {name}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
