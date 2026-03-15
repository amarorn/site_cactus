"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type ServiceCard2026Props = {
  href: string;
  icon: LucideIcon;
  title: string;
  description: string;
  index?: number;
};

/**
 * Service card: glassmorphism, hover scale + shadow expansion, border gradient, icon bounce.
 * Use inside StaggeredItem for scroll reveal, or standalone.
 */
export function ServiceCard2026({
  href,
  icon: Icon,
  title,
  description,
}: ServiceCard2026Props) {
  return (
    <Link
      href={href}
      className="group relative flex h-full flex-col rounded-2xl p-6 card-border-gradient glass-card card-hover-shadow overflow-hidden"
    >
      <span className="icon-bounce-hover mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white">
        <Icon className="h-6 w-6" />
      </span>
      <h3 className="text-h3 font-semibold text-graphite dark:text-white">{title}</h3>
      <p className="mt-2 flex-1 text-body-lg text-graphite/70 dark:text-white/70">{description}</p>
      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-all duration-300 group-hover:gap-3">
        Saiba mais
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
