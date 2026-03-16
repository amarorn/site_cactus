"use client";

import { memo } from "react";
import type { PortfolioProject } from "@/types/portfolio";
import { PortfolioCard } from "./PortfolioCard";

type PortfolioGridProps = {
  projects: PortfolioProject[];
};

export const PortfolioGrid = memo(function PortfolioGrid({
  projects,
}: PortfolioGridProps) {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, index) => (
        <PortfolioCard key={project.id} project={project} index={index} />
      ))}
    </div>
  );
});
