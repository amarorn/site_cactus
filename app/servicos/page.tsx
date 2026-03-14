import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { servicesDetail } from "@/content/servicesDetail";
import { contact } from "@/content/contact";

export const metadata: Metadata = {
  title: "Serviços | Cactus System",
  description:
    "Product Engineering, Mobile, Web, Arquitetura de Dados, Engenharia de Dados, Analytics, Data Science, LLM e Automação Inteligente.",
};

export default function ServicosPage() {
  return (
    <div className="bg-white dark:bg-graphite">
      <section className="border-b border-graphite/10 dark:border-white/10 bg-light-gray dark:bg-graphite/80 px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-[1280px]">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            SERVIÇOS
          </p>
          <h1 className="mt-2 text-3xl font-bold text-graphite dark:text-white sm:text-4xl lg:text-5xl">
            O que fazemos
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-graphite/80 dark:text-white/80">
            Desenvolvimento de software, dados e IA com profundidade técnica e
            foco em resultado de negócio.
          </p>
        </div>
      </section>

      <div className="divide-y divide-graphite/10 dark:divide-white/10">
        {servicesDetail.map((service) => (
          <section
            key={service.id}
            id={service.id}
            className="scroll-mt-24 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 bg-white dark:bg-graphite"
          >
            <div className="mx-auto max-w-[1280px]">
              <div className="grid gap-12 lg:grid-cols-3">
                <div>
                  <h2 className="text-2xl font-bold text-graphite dark:text-white sm:text-3xl">
                    {service.title}
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-graphite/80 dark:text-white/80">
                    {service.overview}
                  </p>
                  <Link
                    href="/contato"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3"
                  >
                    {contact.primaryCTA}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
                <div className="lg:col-span-2">
                  <div className="grid gap-8 sm:grid-cols-2">
                    <div>
                      <h3 className="text-xs font-semibold uppercase tracking-wider text-graphite/60 dark:text-white/60">
                        Dores que resolve
                      </h3>
                      <ul className="mt-3 space-y-2">
                        {service.pains.map((pain) => (
                          <li
                            key={pain}
                            className="text-sm leading-relaxed text-graphite/90 dark:text-white/90"
                          >
                            {pain}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xs font-semibold uppercase tracking-wider text-graphite/60 dark:text-white/60">
                        Entregáveis
                      </h3>
                      <ul className="mt-3 space-y-2">
                        {service.deliverables.map((d) => (
                          <li
                            key={d}
                            className="text-sm leading-relaxed text-graphite/90 dark:text-white/90"
                          >
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xs font-semibold uppercase tracking-wider text-graphite/60 dark:text-white/60">
                        Benefícios
                      </h3>
                      <ul className="mt-3 space-y-2">
                        {service.benefits.map((b) => (
                          <li
                            key={b}
                            className="text-sm leading-relaxed text-graphite/90 dark:text-white/90"
                          >
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xs font-semibold uppercase tracking-wider text-graphite/60 dark:text-white/60">
                        Diferencial Cactus
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-graphite/90 dark:text-white/90">
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
    </div>
  );
}
