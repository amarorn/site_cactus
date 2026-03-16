"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Database, Cloud, GitBranch, Cpu, Layers, Code2 } from "lucide-react";
import type { PortfolioProject } from "@/types/portfolio";

const CATEGORY_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  "Data Platform": Database,
  "SaaS Platform": Cloud,
  "Data Engineering": GitBranch,
  "AI Systems": Cpu,
  "Software Architecture": Layers,
};

function getCategoryIcon(category: string) {
  return CATEGORY_ICONS[category] ?? Database;
}

type ConsultingProjectCardProps = {
  project: PortfolioProject;
  index: number;
};

export function ConsultingProjectCard({ project, index }: ConsultingProjectCardProps) {
  const Icon = getCategoryIcon(project.category);

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-graphite/10 dark:border-white/10 bg-white dark:bg-white/5 shadow-sm transition-shadow duration-300 hover:shadow-lg hover:shadow-primary/5 dark:hover:shadow-primary/10"
    >
      <Link
        href={`/portfolio/${project.slug}`}
        className="flex flex-1 flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
      >
        <div className="relative aspect-[16/10] overflow-hidden bg-graphite/5 dark:bg-graphite/20">
          <Image
            src={project.image}
            alt=""
            width={800}
            height={500}
            className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-graphite/60 dark:from-graphite/80 to-transparent"
            aria-hidden
          />
          <span className="absolute bottom-3 left-4 flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm dark:bg-white/5">
            <Icon className="h-3.5 w-3.5" />
            {project.category}
          </span>
        </div>

        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <h3 className="text-lg font-semibold tracking-tight text-graphite dark:text-white balance group-hover:text-primary transition-colors duration-200">
            {project.title}
          </h3>
          {project.problemSolved && (
            <p className="mt-2 text-sm leading-relaxed text-graphite/70 dark:text-white/70 line-clamp-2">
              {project.problemSolved}
            </p>
          )}
          {project.technicalImpact && (
            <p className="mt-3 text-xs leading-relaxed text-primary/90 dark:text-primary">
              {project.technicalImpact}
            </p>
          )}
          <div className="mt-4 flex flex-wrap gap-2">
            {project.technologies.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-graphite/15 dark:border-white/10 bg-graphite/5 dark:bg-white/5 px-2.5 py-1 text-xs font-medium text-graphite dark:text-white/80 transition-colors duration-200 group-hover:border-primary/20 group-hover:bg-primary/5 group-hover:text-primary dark:group-hover:bg-primary/10"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 5 && (
              <span className="rounded-full bg-graphite/10 dark:bg-white/10 px-2.5 py-1 text-xs text-graphite/60 dark:text-white/60">
                +{project.technologies.length - 5}
              </span>
            )}
          </div>
        </div>
      </Link>
      <div className="flex flex-wrap items-center gap-4 border-t border-graphite/10 dark:border-white/10 px-5 py-4 sm:px-6 sm:py-4">
        <Link
          href={`/portfolio/${project.slug}`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all duration-200 hover:gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)] rounded"
        >
          Ver arquitetura
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
        {project.repositoryUrl && (
          <a
            href={project.repositoryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-graphite/70 dark:text-white/60 hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)] rounded"
          >
            <Code2 className="h-4 w-4" />
            Ver código
          </a>
        )}
      </div>
    </motion.article>
  );
}
