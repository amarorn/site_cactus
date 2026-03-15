"use client";

import { cn } from "@/lib/utils";

export type HeroProps = {
  overline?: string;
  title: React.ReactNode;
  subtitle?: string;
  actions?: React.ReactNode;
  background?: React.ReactNode;
  className?: string;
};

export function Hero({
  overline,
  title,
  subtitle,
  actions,
  background,
  className,
}: HeroProps) {
  return (
    <section
      className={cn(
        "relative bg-graphite text-white overflow-hidden",
        className
      )}
    >
      {background && <div className="pointer-events-none absolute inset-0">{background}</div>}
      <div className="relative mx-auto max-w-[1280px] px-4 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <div className="max-w-3xl">
          {overline && (
            <p className="text-small font-semibold uppercase tracking-[0.2em] text-primary">
              {overline}
            </p>
          )}
          <h1 className="mt-4 text-hero font-bold tracking-tight balance text-gradient-animated">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-6 text-body-lg text-white/85 max-w-2xl">{subtitle}</p>
          )}
          {actions && (
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              {actions}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
