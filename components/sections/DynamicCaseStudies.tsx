"use client";

import Link from "next/link";
import { useMemo } from "react";
import { usePersonalization } from "@/components/PersonalizationProvider";
import { caseStudyFocus } from "@/content/personalization";
import { cases } from "@/content/cases";
import { getCaseStudySlugFromClient } from "@/content/case-studies";

export function DynamicCaseStudies() {
  const segment = usePersonalization();
  const focusClients = caseStudyFocus[segment];

  const filtered = useMemo(() => {
    const set = new Set(focusClients);
    return cases.filter((c) => set.has(c.client));
  }, [focusClients]);

  if (filtered.length === 0) return null;

  return (
    <section className="relative overflow-hidden section-spacing bg-white dark:bg-graphite">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <h2 className="text-h2 font-bold text-graphite dark:text-white">
          Cases em destaque
        </h2>
        <p className="mt-2 text-graphite/80 dark:text-white/80">
          Experiências em setores e desafios diversos.
        </p>
        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.slice(0, 6).map((c) => (
            <li key={c.client}>
              <Link
                href={`/cases/${getCaseStudySlugFromClient(c.client)}`}
                className="block rounded-xl border border-graphite/10 dark:border-white/10 bg-white dark:bg-white/5 p-6 transition-colors hover:border-primary/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                <span className="font-semibold text-graphite dark:text-white">{c.client}</span>
                <span className="ml-2 text-sm text-primary">{c.segment}</span>
                <p className="mt-2 text-sm text-graphite/80 dark:text-white/80 line-clamp-2">
                  {c.challenge}
                </p>
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-8">
          <Link
            href="/clientes"
            className="text-sm font-semibold text-primary hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
          >
            Ver todos os cases
          </Link>
        </p>
      </div>
    </section>
  );
}
