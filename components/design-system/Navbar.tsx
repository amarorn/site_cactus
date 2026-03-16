"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export type NavLink = { href: string; label: string };

export type NavbarProps = {
  logo: React.ReactNode;
  links: NavLink[];
  cta?: React.ReactNode;
  themeToggle?: React.ReactNode;
  className?: string;
  /** Dark background (e.g. hero); uses light text */
  onDark?: boolean;
};

export function Navbar({
  logo,
  links,
  cta,
  themeToggle,
  className,
  onDark = true,
}: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const textMuted = onDark ? "text-white/90" : "text-graphite/90 dark:text-white/90";
  const hover = onDark ? "hover:text-primary hover:bg-white/10" : "hover:text-primary hover:bg-graphite/10 dark:hover:bg-white/10";

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b border-transparent transition-all duration-300",
        onDark && "border-white/5",
        className
      )}
    >
      <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-8">{logo}</div>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Principal">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                textMuted,
                hover
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {themeToggle}
          {cta && <span className="hidden md:inline-block">{cta}</span>}
          <button
            type="button"
            className={cn(
              "flex h-10 w-10 items-center justify-center rounded-lg md:hidden",
              textMuted,
              hover
            )}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-controls="navbar-mobile"
            aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div
          id="navbar-mobile"
          className="border-t border-graphite/10 dark:border-white/10 bg-graphite/95 dark:bg-graphite/98 backdrop-blur-md md:hidden"
          role="dialog"
          aria-label="Menu mobile"
        >
          <nav className="flex flex-col gap-1 px-4 py-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "rounded-lg px-4 py-3 text-sm font-medium transition-colors",
                  textMuted,
                  hover
                )}
              >
                {link.label}
              </Link>
            ))}
            {cta && <div className="mt-2">{cta}</div>}
          </nav>
        </div>
      )}
    </header>
  );
}
