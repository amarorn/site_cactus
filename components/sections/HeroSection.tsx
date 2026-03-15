"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { contact } from "@/content/contact";
import { AnimatedButton } from "@/components/ui/AnimatedButton";
import { HeroBackground } from "./HeroBackground";
import { usePersonalization } from "@/components/PersonalizationProvider";
import { heroBySegment } from "@/content/personalization";

const fadeUp = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } };

export function HeroSection() {
  const segment = usePersonalization();
  const hero = heroBySegment[segment];

  return (
    <section className="relative bg-graphite text-white">
      <HeroBackground />
      <div className="relative section-spacing px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.4fr] lg:items-end">
            <div className="max-w-3xl">
              <motion.p {...fadeUp} transition={{ ...fadeUp.transition, delay: 0 }} className="text-small font-semibold uppercase tracking-[0.2em] text-primary">
                {hero.overline}
              </motion.p>
              <motion.h1
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: 0.08 }}
                className="mt-4 text-hero font-bold tracking-tight balance text-gradient-animated"
              >
                {hero.headline}
              </motion.h1>
              <motion.p
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: 0.16 }}
                className="mt-6 text-body-lg text-white/85 max-w-2xl"
              >
                {hero.subheadline}
              </motion.p>
              <motion.div
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: 0.24 }}
                className="mt-10 flex flex-col gap-4 sm:flex-row"
              >
                <AnimatedButton href="/contato" variant="primary" className="px-6 py-3.5">
                  {contact.primaryCTA}
                </AnimatedButton>
                <motion.span className="group" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    href="/servicos"
                    className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/50 px-6 py-3.5 font-semibold text-white transition-all duration-300 hover:border-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-graphite"
                  >
                    Ver serviços
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </motion.span>
              </motion.div>
            </div>
            <div className="hidden lg:block" aria-hidden />
          </div>
        </div>
      </div>
    </section>
  );
}
