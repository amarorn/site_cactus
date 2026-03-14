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
    <section className="py-20 sm:py-24 bg-white dark:bg-graphite">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <SectionHeader
          overline="O QUE FAZEMOS"
          title="Serviços"
          subtitle="Desenvolvimento, dados e IA com foco em entrega concreta."
        />
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {homeServices.map((service, i) => {
            const Icon = serviceIcons[service.icon] ?? Globe;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <Link
                  href={`/servicos#${service.id}`}
                  className="group flex h-full flex-col rounded-xl border border-graphite/10 dark:border-white/10 bg-white dark:bg-white/5 p-6 shadow-sm transition-all hover:border-primary/30 hover:shadow-md"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-graphite dark:text-white">
                    {service.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-graphite/80 dark:text-white/80">
                    {service.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2">
                    Saiba mais
                    <ArrowRight className="h-4 w-4 transition-all" />
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
