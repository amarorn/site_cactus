import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { CaseCard } from "@/components/sections/CaseCard";
import { HeroBackground } from "@/components/sections/HeroBackground";
import { cases } from "@/content/cases";
import { clientNames } from "@/content/clients";

const SectionDivider = dynamic(
  () => import("@/components/sections/SectionDivider").then((m) => ({ default: m.SectionDivider })),
  { ssr: true }
);
const CTASection = dynamic(
  () => import("@/components/sections/CTASection").then((m) => ({ default: m.CTASection })),
  { ssr: true }
);

export const metadata: Metadata = {
  title: "Clientes e Cases | Cactus System",
  description:
    "Experiências e setores atendidos: financeiro, tecnologia, seguros, educação, indústria e varejo.",
};

export default function ClientesPage() {
  return (
    <div className="bg-white dark:bg-graphite">
      <section className="relative overflow-hidden border-b border-white/10 bg-graphite px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <HeroBackground />
        <div className="relative mx-auto max-w-[1280px]">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            CLIENTES E CASES
          </p>
          <h1 className="mt-2 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Experiências e setores atendidos
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85">
            Trabalhamos com empresas de diversos setores em projetos de software,
            dados e IA.
          </p>
        </div>
      </section>
      <SectionDivider variant="organic" className="text-white dark:text-graphite" />
      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8 bg-white dark:bg-graphite">
        <div className="mx-auto max-w-[1280px]">
          <h2 className="text-lg font-semibold uppercase tracking-wider text-graphite/70 dark:text-white/70">
            Empresas que confiam na Cactus
          </h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {clientNames.map((name) => (
              <span
                key={name}
                className="rounded-lg border border-graphite/15 dark:border-white/20 bg-white dark:bg-white/5 px-5 py-2.5 text-sm font-medium text-graphite dark:text-white/90 shadow-sm"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>
      <SectionDivider variant="wave" className="text-white dark:text-graphite" />
      <section className="bg-white dark:bg-graphite px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-[1280px]">
          <h2 className="text-lg font-semibold uppercase tracking-wider text-graphite/70 dark:text-white/70">
            Cases e experiências
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {cases.map((c, i) => (
              <CaseCard
                key={c.client}
                client={c.client}
                segment={c.segment}
                challenge={c.challenge}
                approach={c.approach}
                solution={c.solution}
                outcome={c.outcome}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>
      <SectionDivider variant="organic" flip className="text-graphite" />
      <CTASection
        title="Quer fazer parte dessa lista?"
        subtitle="Fale conosco e veja como podemos ajudar no seu próximo projeto."
        primaryLabel="Falar com especialistas"
      />
    </div>
  );
}
