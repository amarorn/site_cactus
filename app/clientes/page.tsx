import type { Metadata } from "next";
import Link from "next/link";
import { cases } from "@/content/cases";
import { clientNames } from "@/content/clients";
import { contact } from "@/content/contact";
import { CaseCard } from "@/components/sections/CaseCard";

export const metadata: Metadata = {
  title: "Clientes e Cases | Cactus System",
  description:
    "Experiências e setores atendidos: financeiro, tecnologia, seguros, educação, indústria e varejo.",
};

export default function ClientesPage() {
  return (
    <div>
      <section className="border-b border-graphite/10 bg-light-gray px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-[1280px]">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            CLIENTES E CASES
          </p>
          <h1 className="mt-2 text-3xl font-bold text-graphite sm:text-4xl lg:text-5xl">
            Experiências e setores atendidos
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-graphite/80">
            Trabalhamos com empresas de diversos setores em projetos de software,
            dados e IA.
          </p>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-[1280px]">
          <h2 className="text-lg font-semibold uppercase tracking-wider text-graphite/70">
            Empresas que confiam na Cactus
          </h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {clientNames.map((name) => (
              <span
                key={name}
                className="rounded-lg border border-graphite/15 bg-white px-5 py-2.5 text-sm font-medium text-graphite shadow-sm"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-graphite/10 bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-[1280px]">
          <h2 className="text-lg font-semibold uppercase tracking-wider text-graphite/70">
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

      <section className="border-t border-graphite/10 bg-light-gray px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-[1280px] text-center">
          <p className="text-base text-graphite/80">
            Quer fazer parte dessa lista? Fale conosco.
          </p>
          <Link
            href="/contato"
            className="mt-4 inline-block rounded-full bg-primary px-6 py-3 font-semibold text-white transition-colors hover:bg-primary-hover"
          >
            {contact.primaryCTA}
          </Link>
        </div>
      </section>
    </div>
  );
}
