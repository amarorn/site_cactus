"use client";

import { motion } from "framer-motion";
import type { CaseStudyDetail } from "@/content/case-studies";
import { useReducedMotion } from "@/lib/hooks";

export function CaseTestimonial({
  caseStudy,
}: {
  caseStudy: CaseStudyDetail & { testimonial: NonNullable<CaseStudyDetail["testimonial"]> };
}) {
  const reduced = useReducedMotion();
  const { testimonial } = caseStudy;

  const reveal = reduced
    ? { initial: { opacity: 1 }, animate: { opacity: 1 } }
    : { initial: { opacity: 0, y: 32 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-80px" }, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } };

  return (
    <section className="relative section-spacing bg-graphite text-white" aria-labelledby="testimonial-heading">
      <div className="pointer-events-none absolute inset-0 bg-section-blobs opacity-50" aria-hidden />
      <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <motion.blockquote
          className="max-w-3xl mx-auto text-center"
          {...reveal}
        >
          <p className="text-xl sm:text-2xl font-medium leading-relaxed text-white/95 italic">
            &ldquo;{testimonial.quote}&rdquo;
          </p>
          <footer className="mt-8">
            <p id="testimonial-heading" className="font-semibold text-white">
              {testimonial.author}
            </p>
            <p className="text-sm text-white/75 mt-0.5">
              {testimonial.role}, {testimonial.company}
            </p>
          </footer>
        </motion.blockquote>
      </div>
    </section>
  );
}
