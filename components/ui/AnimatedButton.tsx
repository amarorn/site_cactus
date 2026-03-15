"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { CTALink } from "@/components/CTALink";
import { RippleWrapper } from "./CTARipple";
import { useReducedMotion } from "@/lib/hooks";
import { cn } from "@/lib/utils";

type AnimatedButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  showArrow?: boolean;
  className?: string;
};

/**
 * CTA with hover glow, ripple on click, animated arrow (group-hover).
 * Respects prefers-reduced-motion for scale.
 */
export function AnimatedButton({
  href,
  children,
  variant = "primary",
  showArrow = true,
  className = "",
}: AnimatedButtonProps) {
  const reduced = useReducedMotion();

  const base =
    "group inline-flex items-center justify-center gap-2 rounded-full font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-300 ";
  const primaryClass =
    "bg-primary text-white btn-primary-cta hover:bg-primary-hover focus:ring-primary focus:ring-offset-graphite";
  const secondaryClass =
    "border-2 border-white/50 text-white hover:border-white hover:bg-white/10 focus:ring-white focus:ring-offset-graphite";

  const linkClass = cn(
    base,
    variant === "primary" ? primaryClass : secondaryClass,
    !reduced && "hover-scale",
    className
  );

  return (
    <RippleWrapper>
      <motion.span
        className="inline-block"
        whileHover={reduced ? undefined : { scale: 1.02 }}
        whileTap={reduced ? undefined : { scale: 0.98 }}
        transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] as const }}
      >
        <CTALink href={href} className={linkClass}>
          {children}
          {showArrow && <ArrowRight className="cta-arrow h-4 w-4" />}
        </CTALink>
      </motion.span>
    </RippleWrapper>
  );
}
