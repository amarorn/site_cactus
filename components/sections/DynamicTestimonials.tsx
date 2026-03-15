"use client";

import { usePersonalization } from "@/components/PersonalizationProvider";
import { testimonialsBySegment } from "@/content/personalization";

export function DynamicTestimonials() {
  const segment = usePersonalization();
  const testimonials = testimonialsBySegment[segment];

  if (!testimonials?.length) return null;

  return (
    <section className="relative overflow-hidden section-spacing bg-light-gray dark:bg-graphite/50">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <h2 className="text-h2 font-bold text-graphite dark:text-white">
          O que dizem sobre a Cactus
        </h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <blockquote
              key={i}
              className="rounded-xl border border-graphite/10 dark:border-white/10 bg-white dark:bg-white/5 p-6"
            >
              <p className="text-graphite/90 dark:text-white/90 italic">&ldquo;{t.quote}&rdquo;</p>
              <footer className="mt-4 text-sm text-graphite/70 dark:text-white/70">
                {t.role}, {t.company}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
