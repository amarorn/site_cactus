"use client";

import { memo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { PortfolioProject } from "@/types/portfolio";
import { TechnologyBadge } from "@/components/ui/TechnologyBadge";

type PortfolioCardProps = {
  project: PortfolioProject;
  index: number;
};

export const PortfolioCard = memo(function PortfolioCard({
  project,
  index,
}: PortfolioCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      whileHover={{ y: -4, transition: { duration: 0.3 } }}
      className="group relative overflow-hidden rounded-2xl border border-graphite/10 dark:border-white/10 bg-white dark:bg-graphite/50 shadow-sm transition-shadow duration-300 hover:shadow-lg hover:shadow-primary/10 dark:hover:shadow-black/20"
    >
      <Link href={`/portfolio/${project.slug}`} className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-2xl">
        <div className="relative aspect-[16/10] overflow-hidden bg-graphite/5">
          <Image
            src={project.image}
            alt=""
            width={800}
            height={500}
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-graphite/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            aria-hidden
          />
          <span className="absolute bottom-3 left-4 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
            {project.category}
          </span>
        </div>
        <div className="p-5 sm:p-6">
          <h3 className="text-lg font-semibold tracking-tight text-graphite dark:text-white balance group-hover:text-primary transition-colors duration-300">
            {project.title}
          </h3>
          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-graphite/70 dark:text-white/70">
            {project.description}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.technologies.slice(0, 4).map((tech) => (
              <TechnologyBadge key={tech} label={tech} />
            ))}
            {project.technologies.length > 4 && (
              <span className="inline-flex items-center rounded-full bg-graphite/10 px-2.5 py-0.5 text-xs text-graphite/70 dark:bg-white/10 dark:text-white/70">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>
          <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary">
            Ver projeto
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </div>
      </Link>
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-1 scale-x-0 bg-primary transition-transform duration-300 origin-left group-hover:scale-x-100"
        aria-hidden
      />
    </motion.article>
  );
});
