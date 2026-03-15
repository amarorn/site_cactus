"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useParallax } from "@/lib/hooks";

const HERO_VIDEO_SRC = "/videos/hero-background.mp4";

type HeroBackgroundProps = {
  className?: string;
};

export function HeroBackground({ className }: HeroBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const parallaxY = useParallax(32, [0, 0.4]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      video.pause();
    } else {
      video.play().catch(() => {});
    }
    const handler = () => {
      if (mq.matches) video.pause();
      else video.play().catch(() => {});
    };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        aria-hidden
      >
        <source src={HERO_VIDEO_SRC} type="video/mp4" />
      </video>
      <div
        className="absolute inset-0 bg-graphite/85 dark:bg-graphite/90"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-graphite/60 via-transparent to-graphite/30"
        aria-hidden
      />
      <div
        className="absolute inset-0 opacity-[0.06] motion-gradient-shift dark:opacity-[0.05]"
        style={{ background: "var(--gradient-regional)", transformOrigin: "50% 50%" }}
        aria-hidden
      />
      <div
        className="absolute inset-0 opacity-[0.06] dark:opacity-[0.06] motion-grid"
        style={{
          backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px),
                           linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />
      <div
        className="absolute -left-1/3 -top-1/3 h-[80%] w-[80%] rounded-full bg-primary/12 blur-[120px] dark:bg-primary/12 motion-mesh"
      />
      <div
        className="absolute -bottom-1/4 -right-1/4 h-[60%] w-[60%] rounded-full bg-primary/8 blur-[100px] dark:bg-primary/8 motion-mesh-delay"
      />
      <motion.div
        className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[80px] dark:bg-primary/8 motion-float"
        style={{ y: parallaxY }}
        aria-hidden
      />
      <div
        className="absolute -right-1/4 top-1/4 h-96 w-96 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] bg-primary/[0.06] blur-[80px] dark:bg-primary/[0.05] motion-blob-morph"
        aria-hidden
      />
      <div
        className="absolute -left-1/4 bottom-1/3 h-72 w-72 rounded-[60%_40%_30%_70%/50%_60%_40%_50%] bg-primary/[0.08] blur-[100px] dark:bg-primary/[0.06] motion-mesh-delay motion-blob-morph"
        style={{ animationDelay: "-8s" }}
        aria-hidden
      />
    </div>
  );
}
