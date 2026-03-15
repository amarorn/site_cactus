"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { contact } from "@/content/contact";

type CTASectionProps = {
  title: string;
  subtitle?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  dark?: boolean;
};

export function CTASection({
  title,
  subtitle,
  primaryHref = "/contato",
  primaryLabel = contact.primaryCTA,
  secondaryHref = "/servicos",
  secondaryLabel = "Ver serviços",
  dark = true,
}: CTASectionProps) {
  const bgClass = dark ? "bg-graphite text-white" : "bg-primary/5 text-graphite";
  const buttonClass = dark
    ? "bg-primary text-white hover:bg-primary-hover"
    : "bg-primary text-white hover:bg-primary-hover";

  return (
    <section className={`relative overflow-hidden py-24 sm:py-32 ${bgClass}`}>
      <div className="pointer-events-none absolute inset-0 text-white dark:text-white bg-pattern-organic" aria-hidden />
      <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-2xl font-bold sm:text-3xl lg:text-4xl">{title}</h2>
          {subtitle && (
            <p className="mt-4 text-base opacity-90 sm:text-lg">{subtitle}</p>
          )}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href={primaryHref}
              className={`group inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold btn-primary-cta focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${dark ? "focus:ring-offset-graphite" : "focus:ring-offset-white"} ${buttonClass}`}
            >
              {primaryLabel}
              <ArrowRight className="cta-arrow h-4 w-4" />
            </Link>
            <Link
              href={secondaryHref}
              className={`rounded-full px-6 py-3 font-semibold transition-all duration-200 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${dark ? "border border-white/30 text-white hover:bg-white/10 focus:ring-offset-graphite" : "border border-graphite/30 text-graphite hover:bg-graphite/5 focus:ring-offset-white"}`}
            >
              {secondaryLabel}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
