"use client";

import { cn } from "@/lib/utils";
import { Card } from "./Card";

export type TestimonialProps = {
  quote: string;
  author: string;
  role?: string;
  company?: string;
  className?: string;
};

export function Testimonial({
  quote,
  author,
  role,
  company,
  className,
}: TestimonialProps) {
  const attribution = [role, company].filter(Boolean).join(", ");

  return (
    <Card variant="outline" padding="md" className={cn("h-full", className)}>
      <blockquote className="flex h-full flex-col">
        <p className="flex-1 text-body text-graphite/90 dark:text-white/90 italic">
          &ldquo;{quote}&rdquo;
        </p>
        <footer className="mt-4 text-small text-graphite/70 dark:text-white/70">
          <cite className="not-italic font-medium text-graphite dark:text-white">
            {author}
          </cite>
          {attribution && <span className="block mt-0.5">{attribution}</span>}
        </footer>
      </blockquote>
    </Card>
  );
}
