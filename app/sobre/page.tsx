import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { CTALink } from "@/components/CTALink";
import { about } from "@/content/about";
import { company } from "@/content/company";
import { contact } from "@/content/contact";

export const metadata: Metadata = {
  title: "Sobre a Cactus | Cactus System",
  description:
    "Empresa de tecnologia com profundidade técnica, visão de negócio e time multidisciplinar. Sede em Natal/RN, atendimento nacional.",
};

export default function SobrePage() {
  return (
    <div className="bg-white dark:bg-graphite">
      <section className="border-b border-graphite/10 dark:border-white/10 bg-light-gray dark:bg-graphite/80 px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-[1280px]">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            SOBRE
          </p>
          <h1 className="mt-2 text-3xl font-bold text-graphite dark:text-white sm:text-4xl lg:text-5xl">
            A {company.name}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-graphite/80 dark:text-white/80">
            {about.positioning}
          </p>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
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

      <section className="border-t border-graphite/10 dark:border-white/10 bg-light-gray dark:bg-graphite/50 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-[1280px]">
          <h2 className="text-xl font-bold text-graphite dark:text-white">
            Princípios de trabalho
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {about.principles.map((p) => (
              <div
                key={p.title}
                className="rounded-xl border border-graphite/10 dark:border-white/10 bg-white dark:bg-white/5 p-6"
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

      <section className="border-t border-graphite/10 dark:border-white/10 bg-graphite px-4 py-16 sm:px-6 sm:py-20 lg:px-8 text-white">
        <div className="mx-auto max-w-[1280px] text-center">
          <p className="text-lg font-medium">Quer conhecer melhor?</p>
          <CTALink
            href="/contato"
            className="group mt-4 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-white btn-primary-cta hover:bg-primary-hover"
          >
            {contact.primaryCTA}
            <ArrowRight className="cta-arrow h-4 w-4" />
          </CTALink>
        </div>
      </section>
    </div>
  );
}
