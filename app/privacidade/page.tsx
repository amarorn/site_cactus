import type { Metadata } from "next";
import { HeroBackground } from "@/components/sections/HeroBackground";
import { privacy } from "@/content/privacy";

export const metadata: Metadata = {
  title: "Política de Privacidade | Cactus System",
  description:
    "Política de privacidade da Cactus System. Tratamento de dados e conformidade com a LGPD.",
};

export default function PrivacidadePage() {
  return (
    <div className="bg-white dark:bg-graphite">
      <section className="relative overflow-hidden border-b border-white/10 bg-graphite px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <HeroBackground />
        <div className="relative mx-auto max-w-[1280px]">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            LEGAL
          </p>
          <h1 className="mt-2 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            {privacy.title}
          </h1>
          <p className="mt-4 text-sm text-white/80">
            Última atualização: {privacy.lastUpdated}
          </p>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8 bg-white dark:bg-graphite">
        <div className="mx-auto max-w-[720px]">
          <div className="prose prose-graphite space-y-12">
            {privacy.sections.map((section) => (
              <div key={section.title}>
                <h2 className="text-xl font-bold text-graphite dark:text-white">
                  {section.title}
                </h2>
                <p className="mt-3 leading-relaxed text-graphite/90 dark:text-white/90">
                  {section.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
