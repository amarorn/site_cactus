"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { company } from "@/content/company";
import { contact } from "@/content/contact";
import { CTALink } from "@/components/CTALink";
import { HeroBackground } from "./HeroBackground";

export function HeroSection() {
  return (
    <section className="relative bg-[var(--background)] text-graphite dark:bg-graphite dark:text-white">
      <HeroBackground />
        <div className="relative px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-[1280px]">
          <div className="mx-auto max-w-3xl">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="text-xs font-semibold uppercase tracking-[0.2em] text-primary"
            >
              {company.name} · Tecnologia com raízes no Nordeste
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl balance text-gradient-animated"
            >
              {company.tagline}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 text-lg leading-relaxed text-graphite/80 dark:text-white/80 sm:text-xl"
            >
              Aplicativos mobile, plataformas web, sistemas sob medida, ambientes
              analíticos, arquitetura de dados e soluções de IA para resultado de
              negócio.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
              className="mt-10 flex flex-col gap-4 sm:flex-row"
            >
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <CTALink
                  href="/contato"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 font-semibold text-white btn-primary-cta hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                  {contact.primaryCTA}
                  <ArrowRight className="cta-arrow h-4 w-4" />
                </CTALink>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/servicos"
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary/40 px-6 py-3.5 font-semibold text-primary transition-all duration-300 hover:border-primary hover:bg-primary/5 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:border-primary/40 dark:text-primary dark:hover:bg-primary/10 dark:focus:ring-offset-graphite"
                >
                  Ver serviços
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
