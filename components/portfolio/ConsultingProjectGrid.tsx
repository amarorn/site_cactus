"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import type { PortfolioProject } from "@/types/portfolio";
import { ConsultingProjectCard } from "./ConsultingProjectCard";

type ConsultingProjectGridProps = {
  projects: PortfolioProject[];
};

export const ConsultingProjectGrid = memo(function ConsultingProjectGrid({
  projects,
}: ConsultingProjectGridProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={{
        visible: {
          transition: { staggerChildren: 0.08 },
        },
      }}
      className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
    >
      {projects.map((project, index) => (
        <ConsultingProjectCard key={project.id} project={project} index={index} />
      ))}
    </motion.div>
  );
});
