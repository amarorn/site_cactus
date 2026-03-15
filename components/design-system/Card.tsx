"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/utils";

type CardVariant = "elevated" | "outline" | "glass";

export type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  variant?: CardVariant;
  padding?: "none" | "sm" | "md" | "lg";
};

const variantClasses: Record<CardVariant, string> = {
  elevated:
    "bg-white dark:bg-white/5 border border-graphite/10 dark:border-white/10 shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)] card-light-interactive",
  outline:
    "bg-transparent border border-graphite/10 dark:border-white/10 hover:border-primary/30 dark:hover:border-primary/30",
  glass: "glass-card",
};

const paddingClasses: Record<CardProps["padding"] & string, string> = {
  none: "p-0",
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ variant = "elevated", padding = "md", className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-[var(--radius-xl)] transition-all duration-250",
          variantClasses[variant],
          paddingClasses[padding],
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
Card.displayName = "Card";

export function CardHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("mb-4", className)} {...props} />;
}

export function CardTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn("text-h3 font-semibold text-graphite dark:text-white", className)}
      {...props}
    />
  );
}

export function CardContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("text-body text-graphite/90 dark:text-white/90", className)} {...props} />;
}

export function CardFooter({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("mt-4 pt-4 border-t border-graphite/10 dark:border-white/10", className)} {...props} />;
}
