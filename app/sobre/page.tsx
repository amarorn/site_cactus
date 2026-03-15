import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { HeroBackground } from "@/components/sections/HeroBackground";
import { about } from "@/content/about";
import { company } from "@/content/company";

const SectionDivider = dynamic(
  () => import("@/components/sections/SectionDivider").then((m) => ({ default: m.SectionDivider })),
  { ssr: true }
);
const CTASection = dynamic(
  () => import("@/components/sections/CTASection").then((m) => ({ default: m.CTASection })),
  { ssr: true }
);

export const metadata: Metadata = {
  title: "Sobre a Cactus | Cactus System",
  description:
    "Empresa de tecnologia com profundidade técnica, visão de negócio e time multidisciplinar. Sede em Natal/RN, atendimento nacional.",
};

export default function SobrePage() {
  return (
    <div className="bg-white dark:bg-graphite">
      <section className="relative overflow-hidden border-b border-white/10 bg-graphite px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <HeroBackground />
        <div className="relative mx-auto max-w-[1280px]">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            SOBRE
          </p>
          <h1 className="mt-2 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            A {company.name}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85">
            {about.positioning}
          </p>
        </div>
      </section>
      <SectionDivider variant="organic" className="text-white dark:text-graphite" />
      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8 bg-white dark:bg-graphite">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <h2 className="text-xl font-bold text-graphite dark:text-white">Visão de trabalho</h2>
              <p className="mt-4 text-base leading-relaxed text-graphite/80 dark:text-white/80">
                {about.vision}
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold text-graphite dark:text-white">Cultura</h2>
              <p className="mt-4 text-base leading-relaxed text-graphite/80 dark:text-white/80">
                {about.culture}
              </p>
            </div>
          </div>
        </div>
      </section>
      <SectionDivider variant="cactus-curve" flip className="text-light-gray dark:text-graphite/50" />
      <section className="bg-light-gray dark:bg-graphite/50 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-[1280px]">
          <h2 className="text-xl font-bold text-graphite dark:text-white">
            Princípios de trabalho
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {about.principles.map((p) => (
              <div
                key={p.title}
                className="rounded-xl border border-graphite/10 dark:border-white/10 bg-white dark:bg-white/5 p-6 card-light-interactive"
              >
                <h3 className="font-semibold text-graphite dark:text-white">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-graphite/80 dark:text-white/80">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <SectionDivider variant="wave" className="text-white dark:text-graphite" />
      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8 bg-white dark:bg-graphite">
        <div className="mx-auto max-w-[1280px]">
          <h2 className="text-xl font-bold text-graphite dark:text-white">
            Composição do time
          </h2>
          <p className="mt-4 text-base text-graphite/80 dark:text-white/80">
            Equipe multidisciplinar com profissionais altamente capacitados em
            suas áreas.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {about.team.map((role) => (
              <span
                key={role}
                className="rounded-full border border-primary/30 bg-primary/5 px-5 py-2 text-sm font-medium text-graphite dark:text-white"
              >
                {role}
              </span>
            ))}
          </div>
        </div>
      </section>
      <SectionDivider variant="organic" flip className="text-white dark:text-graphite" />
      <CTASection
        title="Quer conhecer melhor?"
        subtitle="Converse com nossa equipe e veja como podemos ajudar no seu próximo projeto."
        primaryLabel="Falar com especialistas"
      />
    </div>
  );
}
