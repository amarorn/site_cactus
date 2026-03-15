"use client";

import { useMemo } from "react";
import { homeServices } from "@/content/services";
import { serviceIcons } from "@/lib/icons";
import { Globe } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { ServiceCard2026 } from "./ServiceCard2026";
import { StaggeredReveal, StaggeredItem } from "@/components/ui/StaggeredReveal";
import { usePersonalization } from "@/components/PersonalizationProvider";
import { serviceFocus } from "@/content/personalization";

function reorderServices<T extends { id: string }>(
  services: readonly T[],
  focusIds: string[]
): T[] {
  const list = [...services];
  const order = [...focusIds];
  for (const id of list.map((s) => s.id)) {
    if (!order.includes(id)) order.push(id);
  }
  return order
    .map((id) => list.find((s) => s.id === id))
    .filter((s): s is T => s != null);
}

export function ServiceGrid() {
  const segment = usePersonalization();
  const orderedServices = useMemo(
    () => reorderServices(homeServices, serviceFocus[segment]),
    [segment]
  );

  return (
    <section className="relative overflow-hidden section-spacing bg-[var(--background)] dark:bg-graphite">
      <div className="pointer-events-none absolute inset-0 bg-section-depth" aria-hidden />
      <div className="pointer-events-none absolute inset-0 bg-section-vignette" aria-hidden />
      <div className="pointer-events-none absolute inset-0 text-graphite dark:text-white bg-pattern-grid" aria-hidden />
      <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <SectionHeader
          overline="O QUE FAZEMOS"
          title="Serviços"
          subtitle="Desenvolvimento, dados e IA com foco em entrega concreta."
        />
        <StaggeredReveal
          className="mt-16 sm:mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          staggerDelay={0.06}
        >
          {orderedServices.slice(0, 6).map((service) => {
            const Icon = serviceIcons[service.icon] ?? Globe;
            return (
              <StaggeredItem key={service.id}>
                <ServiceCard2026
                  href={`/servicos#${service.id}`}
                  icon={Icon}
                  title={service.title}
                  description={service.description}
                />
              </StaggeredItem>
            );
          })}
        </StaggeredReveal>
      </div>
    </section>
  );
}
