"use client";

import { cn } from "@/lib/utils";
import { Card } from "./Card";

export type CaseStudyProps = {
  client: string;
  segment: string;
  challenge: string;
  approach: string;
  solution: string;
  outcome: string;
  className?: string;
};

const labelClass = "font-medium text-graphite/70 dark:text-white/70";
const valueClass = "mt-0.5 text-graphite/90 dark:text-white/90";

export function CaseStudy({
  client,
  segment,
  challenge,
  approach,
  solution,
  outcome,
  className,
}: CaseStudyProps) {
  return (
    <Card variant="elevated" padding="md" className={cn("card-light-interactive", className)}>
      <div className="flex flex-wrap items-center gap-2">
        <h3 className="text-h3 font-semibold text-graphite dark:text-white">{client}</h3>
        <span className="rounded-full bg-primary/10 px-3 py-0.5 text-small font-medium text-primary">
          {segment}
        </span>
      </div>
      <dl className="mt-4 space-y-3 text-small">
        <div>
          <dt className={labelClass}>Desafio</dt>
          <dd className={valueClass}>{challenge}</dd>
        </div>
        <div>
          <dt className={labelClass}>Abordagem</dt>
          <dd className={valueClass}>{approach}</dd>
        </div>
        <div>
          <dt className={labelClass}>Solução</dt>
          <dd className={valueClass}>{solution}</dd>
        </div>
        <div>
          <dt className={labelClass}>Resultado</dt>
          <dd className={valueClass}>{outcome}</dd>
        </div>
      </dl>
    </Card>
  );
}
