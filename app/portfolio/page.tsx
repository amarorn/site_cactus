import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { PortfolioHero } from "@/components/portfolio/PortfolioHero";
import { PortfolioSection } from "@/components/portfolio/PortfolioSection";

const SectionDivider = dynamic(
  () => import("@/components/sections/SectionDivider").then((m) => ({ default: m.SectionDivider })),
  { ssr: true }
);

export const metadata: Metadata = {
  title: "Portfólio | Cactus System",
  description:
    "Projetos de desenvolvimento de software, dados e IA: plataformas de analytics, processamento de documentos, visão computacional e aplicações mobile.",
  openGraph: {
    title: "Portfólio | Cactus System",
    description:
      "Projetos de desenvolvimento de software, dados e IA: plataformas de analytics, processamento de documentos, visão computacional e aplicações mobile.",
    url: "/portfolio",
  },
};

export default function PortfolioListPage() {
  return (
    <div className="bg-white dark:bg-graphite">
      <PortfolioHero
        title="Portfólio"
        subtitle="Soluções de software, dados e IA com arquitetura escalável e entrega de valor. Plataformas, sistemas e aplicações que sustentam o crescimento do negócio."
      />
      <SectionDivider variant="organic" className="text-white dark:text-graphite" />
      <PortfolioSection />
    </div>
  );
}
