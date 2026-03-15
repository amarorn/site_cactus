"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { company } from "@/content/company";

export function LocationSection() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32 bg-white dark:bg-graphite">
      <div
        className="pointer-events-none absolute inset-0 opacity-100"
        style={{ background: "var(--gradient-regional)" }}
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
            DE NATAL PARA TODO O BRASIL
          </p>
          <h2 className="mt-2 text-2xl font-bold text-graphite dark:text-white sm:text-3xl lg:text-4xl">
            Sede em {company.location.full}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-graphite/80 dark:text-white/80">
            Do Nordeste para todo o Brasil. Proximidade com o cliente e capacidade de
            atuar em projetos estratégicos em qualquer região do país.
          </p>
          <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-light-gray dark:bg-white/10 px-6 py-3">
            <MapPin className="h-5 w-5 text-primary" />
            <span className="font-medium text-graphite dark:text-white">
              {company.location.city}, {company.location.state} – Atendimento{" "}
              {company.coverage}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
