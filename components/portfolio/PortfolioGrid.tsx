"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import type { Project } from "@/types";
import { PortfolioCard3D } from "./PortfolioCard3D";

type PortfolioGridProps = {
  projects: Project[];
};

const container = {
  hidden: { opacity: 0 },
  visible: (i: number) => ({
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: i * 0.05 },
  }),
};

export const PortfolioGrid = memo(function PortfolioGrid({
  projects,
}: PortfolioGridProps) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3"
    >
      {projects.map((project, index) => (
        <PortfolioCard3D key={project.id} project={project} index={index} />
      ))}
    </motion.div>
  );
});
