import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { PortfolioSectionHero } from "@/components/portfolio/PortfolioSectionHero";
import { ConsultingProjectGrid } from "@/components/portfolio/ConsultingProjectGrid";
import { portfolioConsultingProjects } from "@/data/portfolio-consulting";

const SectionDivider = dynamic(
  () => import("@/components/sections/SectionDivider").then((m) => ({ default: m.SectionDivider })),
  { ssr: true }
);

export const metadata: Metadata = {
  title: "Portfólio | Cactus System",
  description:
    "Casos de engenharia: plataformas SaaS, pipelines de dados e sistemas de IA com arquitetura moderna e foco em escala.",
  openGraph: {
    title: "Portfólio | Cactus System",
    description:
      "Casos de engenharia: plataformas SaaS, pipelines de dados e sistemas de IA com arquitetura moderna e foco em escala.",
    url: "/portfolio",
  },
};

export default function PortfolioListPage() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <PortfolioSectionHero />
      <SectionDivider variant="organic" className="text-graphite/10 dark:text-white/5" />
      <section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-[1280px]">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Projetos
          </h2>
          <p className="mt-2 text-2xl font-semibold tracking-tight text-graphite dark:text-white sm:text-3xl">
            Casos de engenharia
          </p>
          <p className="mt-2 max-w-xl text-graphite/70 dark:text-white/70">
            Arquitetura moderna, pipelines de dados e plataformas em produção.
          </p>
          <div className="mt-12">
            <ConsultingProjectGrid projects={portfolioConsultingProjects} />
          </div>
        </div>
      </section>
    </div>
  );
}
