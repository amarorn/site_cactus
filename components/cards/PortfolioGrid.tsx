"use client";

import { memo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { Project } from "@/types";
import { Card3D } from "./Card3D";
import { TechBadge } from "@/components/ui/TechBadge";

type PortfolioGridProps = {
  projects: Project[];
};

const container = {
  hidden: { opacity: 0 },
  visible: (i: number) => ({
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: i * 0.05 },
  }),
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

function PortfolioCard({ project, index }: { project: Project; index: number }) {
  const href = `/portfolio/${project.slug}`;
  const imgSrc =
    project.image ?? "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80";

  return (
    <motion.div variants={item}>
      <Card3D as="article">
        <Link
          href={href}
          className="flex h-full flex-col rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
        >
          <div className="relative aspect-[16/10] overflow-hidden rounded-t-2xl bg-graphite/10 dark:bg-[#020617]">
            <Image
              src={imgSrc}
              alt=""
              width={800}
              height={500}
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-graphite/80 via-transparent to-transparent opacity-70 dark:from-[#020617]"
              aria-hidden
            />
            <span className="absolute bottom-3 left-4 rounded-md border border-white/10 bg-white/10 px-2.5 py-1 text-xs font-medium text-graphite dark:bg-white/[0.06] dark:text-white/90">
              {project.category}
            </span>
          </div>
          <div className="flex flex-1 flex-col p-5 sm:p-6">
            <h3 className="text-lg font-semibold tracking-tight text-graphite balance transition-colors duration-200 group-hover:text-primary dark:text-white dark:group-hover:text-[#22c55e]">
              {project.title}
            </h3>
            <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-graphite/70 dark:text-white/60">
              {project.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.technologies.slice(0, 4).map((tech) => (
                <TechBadge key={tech} label={tech} />
              ))}
              {project.technologies.length > 4 && (
                <span className="inline-flex items-center rounded-md bg-graphite/10 px-2.5 py-1 text-xs text-graphite/60 dark:bg-white/[0.04] dark:text-white/50">
                  +{project.technologies.length - 4}
                </span>
              )}
            </div>
            <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary transition-all duration-200 group-hover:gap-3">
              Ver projeto
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </div>
        </Link>
      </Card3D>
    </motion.div>
  );
}

export const PortfolioGridCards = memo(function PortfolioGridCards({
  projects,
}: PortfolioGridProps) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3"
    >
      {projects.map((project, index) => (
        <PortfolioCard key={project.id} project={project} index={index} />
      ))}
    </motion.div>
  );
});
