"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Layers, Code2 } from "lucide-react";
import type { PortfolioProject } from "@/types/portfolio";
import { TechnologyBadge } from "@/components/ui/TechnologyBadge";
import { ProjectHighlights } from "./ProjectHighlights";
import { CTALink } from "@/components/CTALink";
import { contact } from "@/content/contact";

type PortfolioPageProps = {
  project: PortfolioProject;
};

export function PortfolioPage({ project }: PortfolioPageProps) {
  return (
    <div className="bg-white dark:bg-graphite">
      <section className="relative border-b border-graphite/10 dark:border-white/10 px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-[1280px]">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="relative aspect-[21/9] min-h-[200px] overflow-hidden rounded-2xl bg-graphite/10"
          >
            <Image
              src={project.image}
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 1280px) 100vw, 1280px"
              priority
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-graphite/90 via-graphite/40 to-transparent"
              aria-hidden
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                {project.category}
              </span>
              <h1 className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl balance">
                {project.title}
              </h1>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-sm font-semibold uppercase tracking-wider text-primary">
                  Sobre o projeto
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-graphite dark:text-white/90">
                  {project.description}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="mt-12"
              >
                <h2 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-primary">
                  <Code2 className="h-4 w-4" />
                  Funcionalidades
                </h2>
                <ProjectHighlights items={project.highlights} className="mt-4" />
              </motion.div>
            </div>

            <div>
              <motion.aside
                initial={{ opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                className="rounded-2xl border border-graphite/10 dark:border-white/10 bg-light-gray/30 dark:bg-white/5 p-6"
              >
                <h2 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-primary">
                  <Layers className="h-4 w-4" />
                  Stack técnico
                </h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <TechnologyBadge key={tech} label={tech} size="md" />
                  ))}
                </div>
              </motion.aside>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="mt-8 rounded-2xl border border-graphite/10 dark:border-white/10 bg-graphite/5 dark:bg-primary/5 p-6"
              >
                <h3 className="text-sm font-semibold uppercase tracking-wider text-graphite dark:text-white">
                  Arquitetura da solução
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-graphite/80 dark:text-white/80">
                  Solução desenhada com foco em escalabilidade, manutenção e
                  evolução. Stack alinhada ao domínio do projeto e boas práticas
                  de engenharia.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.slice(0, 6).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-white/80 dark:bg-graphite/80 px-2.5 py-1 text-xs font-medium text-graphite dark:text-white/90"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-white/10 bg-graphite py-24 sm:py-32 text-white">
        <div className="pointer-events-none absolute inset-0 bg-section-blobs" aria-hidden />
        <div className="pointer-events-none absolute inset-0 bg-section-vignette" aria-hidden />
        <div className="pointer-events-none absolute inset-0 bg-pattern-organic text-white" aria-hidden />
        <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mx-auto max-w-2xl"
          >
            <h2 className="text-2xl font-bold sm:text-3xl lg:text-4xl">
              Próximo passo?
            </h2>
            <p className="mt-4 text-base opacity-90 sm:text-lg">
              Conte sua necessidade e desenhamos a solução técnica ideal para o seu negócio.
            </p>
            <div className="mt-10">
              <CTALink
                href="/contato"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-white btn-primary-cta focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-graphite"
              >
                {contact.primaryCTA}
                <ArrowRight className="cta-arrow h-4 w-4" />
              </CTALink>
            </div>
            <Link
              href="/portfolio"
              className="mt-6 inline-block text-sm font-medium text-white/70 hover:text-primary transition-colors duration-200"
            >
              Voltar ao portfólio
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
