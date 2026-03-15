import type { Metadata } from "next";
import Link from "next/link";
import dynamic from "next/dynamic";
import { ArrowRight, CheckCircle2, Zap, TrendingUp, Star } from "lucide-react";
import { CTALink } from "@/components/CTALink";
import { servicesDetail } from "@/content/servicesDetail";
import { contact } from "@/content/contact";
import { HeroBackground } from "@/components/sections/HeroBackground";

const SectionDivider = dynamic(
  () => import("@/components/sections/SectionDivider").then((m) => ({ default: m.SectionDivider })),
  { ssr: true }
);
const CTASection = dynamic(
  () => import("@/components/sections/CTASection").then((m) => ({ default: m.CTASection })),
  { ssr: true }
);

export const metadata: Metadata = {
  title: "Serviços | Cactus System",
  description:
    "Product Engineering, Mobile, Web, Arquitetura de Dados, Engenharia de Dados, Analytics, Data Science, LLM e Automação Inteligente.",
};

export default function ServicosPage() {
  return (
    <div className="bg-white dark:bg-graphite">
      <section className="relative overflow-hidden border-b border-white/10 bg-graphite px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <HeroBackground />
        <div className="relative mx-auto max-w-[1280px]">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            SERVIÇOS
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-gradient-animated balance">
            O que fazemos
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85">
            Desenvolvimento de software, dados e IA com profundidade técnica e
            foco em resultado de negócio.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {servicesDetail.map((s) => (
              <Link
                key={s.id}
                href={`#${s.id}`}
                className="rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-sm font-medium text-white/90 backdrop-blur-sm transition-all duration-200 hover:border-primary hover:text-primary hover:bg-primary/20"
              >
                {s.title}
              </Link>
            ))}
          </div>
        </div>
      </section>
      <SectionDivider variant="organic" className="text-white dark:text-graphite" />
      <div className="divide-y divide-graphite/10 dark:divide-white/10">
        {servicesDetail.map((service, index) => (
          <section
            key={service.id}
            id={service.id}
            className={`scroll-mt-24 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 ${index % 2 === 0 ? "bg-white dark:bg-graphite" : "bg-light-gray/50 dark:bg-white/[0.02]"}`}
          >
            <div className="mx-auto max-w-[1280px]">
              <div className="grid gap-12 lg:grid-cols-3">
                <div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    <Star className="h-3 w-3" />
                    Serviço
                  </span>
                  <h2 className="mt-3 text-2xl font-bold text-graphite dark:text-white sm:text-3xl">
                    {service.title}
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-graphite/70 dark:text-white/70">
                    {service.overview}
                  </p>
                  <CTALink
                    href={`/contato?servico=${service.id}`}
                    className="group mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-primary-hover hover:shadow-lg hover:shadow-primary/25"
                  >
                    {contact.primaryCTA}
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </CTALink>
                </div>
                <div className="lg:col-span-2">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="rounded-2xl border border-graphite/8 dark:border-white/8 bg-white dark:bg-white/[0.03] p-5">
                      <div className="mb-3 flex items-center gap-2">
                        <Zap className="h-4 w-4 text-primary" />
                        <h3 className="text-xs font-semibold uppercase tracking-wider text-graphite/60 dark:text-white/60">
                          Dores que resolve
                        </h3>
                      </div>
                      <ul className="space-y-2">
                        {service.pains.map((pain) => (
                          <li
                            key={pain}
                            className="flex items-start gap-2 text-sm leading-relaxed text-graphite/85 dark:text-white/85"
                          >
                            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary/60" />
                            {pain}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="rounded-2xl border border-graphite/8 dark:border-white/8 bg-white dark:bg-white/[0.03] p-5">
                      <div className="mb-3 flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        <h3 className="text-xs font-semibold uppercase tracking-wider text-graphite/60 dark:text-white/60">
                          Entregáveis
                        </h3>
                      </div>
                      <ul className="space-y-2">
                        {service.deliverables.map((d) => (
                          <li
                            key={d}
                            className="flex items-start gap-2 text-sm leading-relaxed text-graphite/85 dark:text-white/85"
                          >
                            <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-primary" />
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="rounded-2xl border border-graphite/8 dark:border-white/8 bg-white dark:bg-white/[0.03] p-5">
                      <div className="mb-3 flex items-center gap-2">
                        <TrendingUp className="h-4 w-4 text-primary" />
                        <h3 className="text-xs font-semibold uppercase tracking-wider text-graphite/60 dark:text-white/60">
                          Benefícios
                        </h3>
                      </div>
                      <ul className="space-y-2">
                        {service.benefits.map((b) => (
                          <li
                            key={b}
                            className="flex items-start gap-2 text-sm leading-relaxed text-graphite/85 dark:text-white/85"
                          >
                            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary/60" />
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="rounded-2xl border border-primary/20 bg-primary/5 dark:bg-primary/[0.08] p-5">
                      <div className="mb-3 flex items-center gap-2">
                        <Star className="h-4 w-4 text-primary" />
                        <h3 className="text-xs font-semibold uppercase tracking-wider text-primary/80">
                          Diferencial Cactus
                        </h3>
                      </div>
                      <p className="text-sm leading-relaxed text-graphite/85 dark:text-white/85">
                        {service.differential}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
      <SectionDivider variant="cactus-curve" className="text-white dark:text-graphite" />
      <CTASection
        title="Pronto para começar?"
        subtitle="Converse com nossa equipe e veja como podemos ajudar no seu próximo projeto."
        primaryLabel="Falar com especialistas"
        secondaryLabel="Ver soluções"
      />
    </div>
  );
}
