import type { Metadata } from "next";
import { privacy } from "@/content/privacy";

export const metadata: Metadata = {
  title: "Política de Privacidade | Cactus System",
  description:
    "Política de privacidade da Cactus System. Tratamento de dados e conformidade com a LGPD.",
};

export default function PrivacidadePage() {
  return (
    <div>
      <section className="border-b border-graphite/10 bg-light-gray px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-[1280px]">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            LEGAL
          </p>
          <h1 className="mt-2 text-3xl font-bold text-graphite sm:text-4xl lg:text-5xl">
            {privacy.title}
          </h1>
          <p className="mt-4 text-sm text-graphite/70">
            Última atualização: {privacy.lastUpdated}
          </p>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-[720px]">
          <div className="prose prose-graphite space-y-12">
            {privacy.sections.map((section) => (
              <div key={section.title}>
                <h2 className="text-xl font-bold text-graphite">
                  {section.title}
                </h2>
                <p className="mt-3 leading-relaxed text-graphite/90">
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
