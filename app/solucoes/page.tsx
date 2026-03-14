import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { solutions } from "@/content/solutions";

export const metadata: Metadata = {
  title: "Soluções e Capacidades | Cactus System",
  description:
    "Acelerar produtos, estruturar dados, ambientes analíticos, automação com IA, modernização de legados, copilots e LLM, governança de dados.",
};

export default function SolucoesPage() {
  return (
    <div>
      <section className="border-b border-graphite/10 bg-light-gray px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-[1280px]">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            SOLUÇÕES
          </p>
          <h1 className="mt-2 text-3xl font-bold text-graphite sm:text-4xl lg:text-5xl">
            Capacidades por resultado
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-graphite/80">
            Organizamos o que fazemos pelo resultado que você precisa, não apenas
            por tecnologia.
          </p>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
            {solutions.map((sol) => (
              <article
                key={sol.id}
                id={sol.id}
                className="group rounded-xl border border-graphite/10 bg-white p-6 shadow-sm transition-all hover:border-primary/30 hover:shadow-md"
              >
                <h2 className="text-xl font-bold text-graphite">{sol.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-graphite/80">
                  {sol.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {sol.capabilities.map((cap) => (
                    <span
                      key={cap}
                      className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                    >
                      {cap}
                    </span>
                  ))}
                </div>
                <Link
                  href="/contato"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary opacity-0 transition-opacity group-hover:opacity-100"
                >
                  Conversar sobre este objetivo
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
