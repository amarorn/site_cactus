"use client";

import { useRef, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { Project } from "@/types";
import { TechBadge } from "@/components/ui/TechBadge";

type PortfolioCard3DProps = {
  project: Project;
  index: number;
};

const PERSPECTIVE = 1000;
const TILT_MAX = 6;

function useTilt() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const spring = { stiffness: 300, damping: 30 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [TILT_MAX, -TILT_MAX]), spring);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-TILT_MAX, TILT_MAX]), spring);
  return { x, y, rotateX, rotateY };
}

export function PortfolioCard3D({ project, index }: PortfolioCard3DProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const { x, y, rotateX, rotateY } = useTilt();

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const relX = (e.clientX - centerX) / rect.width;
      const relY = (e.clientY - centerY) / rect.height;
      x.set(relX);
      y.set(relY);
    },
    [x, y]
  );

  const handleMouseLeave = useCallback(() => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  }, [x, y]);

  const href = `/portfolio/${project.slug}`;
  const imgSrc = project.image ?? "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80";

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="h-full"
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          perspective: PERSPECTIVE,
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="group relative h-full rounded-2xl overflow-hidden"
      >
        <Link
          href={href}
          className="block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#22c55e] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f172a] rounded-2xl"
        >
          <div
            className="relative h-full rounded-2xl border border-white/[0.08] bg-white/[0.03] p-[1px] transition-shadow duration-300"
            style={{
              boxShadow: isHovered
                ? "0 25px 50px -12px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.05), 0 0 40px -10px rgba(34, 197, 94, 0.25)"
                : "0 4px 20px rgba(0,0,0,0.2)",
            }}
          >
            <div
              className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              style={{
                background: "linear-gradient(135deg, rgba(34,197,94,0.06) 0%, transparent 50%)",
                pointerEvents: "none",
              }}
            />
            <div
              className="relative z-10 h-full overflow-hidden rounded-[calc(1.25rem-1px)] border border-white/[0.06] bg-[#0f172a]/80 backdrop-blur-xl"
              style={{ transform: "translateZ(0)" }}
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-[#0f172a]">
                <Image
                  src={imgSrc}
                  alt=""
                  width={800}
                  height={500}
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent opacity-60"
                  aria-hidden
                />
                <span
                  className="absolute bottom-3 left-4 rounded-md border border-white/10 bg-white/[0.06] px-2.5 py-1 text-xs font-medium text-white/90"
                  style={{ transform: "translateZ(12px)" }}
                >
                  {project.category}
                </span>
              </div>
              <div className="p-5 sm:p-6" style={{ transform: "translateZ(0)" }}>
                <h3 className="text-lg font-semibold tracking-tight text-white balance transition-colors duration-200 group-hover:text-[#22c55e]">
                  {project.title}
                </h3>
                <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-white/60">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <TechBadge key={tech} label={tech} />
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="inline-flex items-center rounded-md bg-white/[0.04] px-2.5 py-1 text-xs text-white/50">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#22c55e] transition-transform duration-200 group-hover:gap-3">
                  Ver projeto
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          </div>
        </Link>
      </motion.div>
    </motion.article>
  );
}
