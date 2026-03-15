"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { homeServices } from "@/content/services";
import { serviceIcons } from "@/lib/icons";
import { Globe } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

export function ServiceGrid() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32 bg-[var(--background)] dark:bg-graphite">
      <div className="pointer-events-none absolute inset-0 text-graphite dark:text-white bg-pattern-grid" aria-hidden />
      <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <SectionHeader
          overline="O QUE FAZEMOS"
          title="Serviços"
          subtitle="Desenvolvimento, dados e IA com foco em entrega concreta."
        />
        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {homeServices.map((service, i) => {
            const Icon = serviceIcons[service.icon] ?? Globe;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link
                  href={`/servicos#${service.id}`}
                  className="group flex h-full flex-col rounded-2xl glass-card card-glow p-6 shadow-sm hover-lift transition-all duration-300"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/30">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-graphite dark:text-white">
                    {service.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-graphite/70 dark:text-white/70">
                    {service.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-all duration-300 group-hover:gap-3">
                    Saiba mais
                    <ArrowRight className="h-4 w-4 transition-transform duration-300" />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
