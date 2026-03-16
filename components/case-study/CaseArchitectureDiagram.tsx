"use client";

import { motion } from "framer-motion";
import type { CaseStudyDetail } from "@/content/case-studies";
import type { ArchitectureNode } from "@/content/case-studies";
import { useReducedMotion } from "@/lib/hooks";

const kindColors: Record<ArchitectureNode["kind"], string> = {
  source: "fill-primary/20 stroke-primary",
  process: "fill-primary/30 stroke-primary",
  storage: "fill-graphite/20 dark:fill-white/20 stroke-graphite dark:stroke-white",
  api: "fill-primary/25 stroke-primary",
  app: "fill-primary stroke-primary",
};

const NODE_WIDTH = 160;
const NODE_HEIGHT = 44;
const PAD = 40;

function getNodePosition(index: number): { x: number; y: number } {
  const row = Math.floor(index / 3);
  const col = index % 3;
  return {
    x: PAD + col * (NODE_WIDTH + 32),
    y: PAD + row * (NODE_HEIGHT + 36),
  };
}

export function CaseArchitectureDiagram({
  caseStudy,
}: {
  caseStudy: CaseStudyDetail & { architecture: NonNullable<CaseStudyDetail["architecture"]> };
}) {
  const reduced = useReducedMotion();
  const { nodes, links, title, description } = caseStudy.architecture;
  const positions = nodes.map((_, i) => getNodePosition(i));
  const nodeMap = new Map(nodes.map((n, i) => [n.id, { node: n, pos: positions[i], index: i }]));

  const reveal = reduced
    ? { initial: { opacity: 1 }, animate: { opacity: 1 } }
    : { initial: { opacity: 0, y: 32 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-60px" }, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } };

  const stagger = reduced ? 0 : 0.08;

  return (
    <section className="relative section-spacing bg-graphite text-white overflow-hidden" aria-labelledby="architecture-heading">
      <div className="pointer-events-none absolute inset-0 bg-section-blobs" aria-hidden />
      <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <motion.div className="max-w-2xl mb-12" {...reveal}>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Arquitetura</p>
          <h2 id="architecture-heading" className="mt-2 text-h2 font-bold">
            {title}
          </h2>
          <p className="mt-4 text-white/85 leading-relaxed">{description}</p>
        </motion.div>

        <motion.div
          className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8 overflow-x-auto"
          initial={reduced ? undefined : { opacity: 0 }}
          whileInView={reduced ? undefined : { opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <svg
            viewBox={`0 0 ${PAD * 2 + 3 * (NODE_WIDTH + 32) - 32} ${PAD * 2 + Math.ceil(nodes.length / 3) * (NODE_HEIGHT + 36) - 36}`}
            className="w-full min-w-[480px] h-auto"
            role="img"
            aria-label="Diagrama da arquitetura"
          >
            <defs>
              <marker
                id="arrow"
                markerWidth="8"
                markerHeight="8"
                refX="7"
                refY="4"
                orient="auto"
              >
                <path d="M0 0 L8 4 L0 8 Z" fill="currentColor" className="text-primary" />
              </marker>
            </defs>
            {links.map((link, i) => {
              const from = nodeMap.get(link.from);
              const to = nodeMap.get(link.to);
              if (!from || !to) return null;
              const x1 = from.pos.x + NODE_WIDTH;
              const y1 = from.pos.y + NODE_HEIGHT / 2;
              const x2 = to.pos.x;
              const y2 = to.pos.y + NODE_HEIGHT / 2;
              const midX = (x1 + x2) / 2;
              const pathD = `M ${x1} ${y1} C ${midX} ${y1}, ${midX} ${y2}, ${x2} ${y2}`;
              return (
                <motion.path
                  key={`${link.from}-${link.to}`}
                  d={pathD}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-primary/60"
                  strokeLinecap="round"
                  markerEnd="url(#arrow)"
                  initial={reduced ? undefined : { pathLength: 0, opacity: 0.6 }}
                  whileInView={reduced ? undefined : { pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * stagger, ease: "easeOut" }}
                  style={{ pathLength: reduced ? 1 : undefined }}
                />
              );
            })}
            {nodes.map((node, i) => {
              const pos = positions[i];
              const colorClass = kindColors[node.kind];
              return (
                <g key={node.id}>
                  <motion.rect
                    x={pos.x}
                    y={pos.y}
                    width={NODE_WIDTH}
                    height={NODE_HEIGHT}
                    rx="8"
                    className={colorClass}
                    strokeWidth="2"
                    initial={reduced ? undefined : { scale: 0, opacity: 0 }}
                    whileInView={reduced ? undefined : { scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: i * stagger, ease: [0.22, 1, 0.36, 1] as const }}
                  />
                  <motion.text
                    x={pos.x + NODE_WIDTH / 2}
                    y={pos.y + NODE_HEIGHT / 2 + 4}
                    textAnchor="middle"
                    className="fill-graphite dark:fill-white text-sm font-medium"
                    initial={reduced ? undefined : { opacity: 0 }}
                    whileInView={reduced ? undefined : { opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * stagger + 0.15 }}
                  >
                    {node.label}
                  </motion.text>
                </g>
              );
            })}
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
