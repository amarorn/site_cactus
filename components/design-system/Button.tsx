"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";
type ButtonSize = "sm" | "md" | "lg";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  asChild?: boolean;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-white hover:bg-primary-hover focus:ring-primary shadow-[var(--shadow-xs)] hover:shadow-[var(--shadow-glow)]",
  secondary:
    "border-2 border-white/50 text-white hover:border-white hover:bg-white/10 focus:ring-white dark:border-white/30 dark:hover:border-white dark:hover:bg-white/10",
  ghost:
    "text-graphite dark:text-white hover:bg-graphite/10 dark:hover:bg-white/10 focus:ring-graphite dark:focus:ring-white",
  outline:
    "border-2 border-graphite/20 dark:border-white/20 text-graphite dark:text-white hover:border-primary hover:bg-primary-muted focus:ring-primary",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm rounded-[var(--radius-md)]",
  md: "px-5 py-2.5 text-sm rounded-[var(--radius-lg)]",
  lg: "px-6 py-3.5 text-base rounded-[var(--radius-xl)]",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", className, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        type="button"
        className={cn(
          "inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-graphite dark:focus:ring-offset-graphite disabled:opacity-50 disabled:pointer-events-none",
          variantClasses[variant],
          sizeClasses[size],
          variant === "primary" && "btn-primary-cta",
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";
