"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { Logo } from "./Logo";
import { CTALink } from "./CTALink";
import { navLinks } from "@/content/navigation";
import { contact } from "@/content/contact";
import { cn } from "@/lib/utils";

const HEADER_VIDEO_SRC = "/videos/hero-background.mp4";

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) video.pause();
    else video.play().catch(() => {});
    const handler = () => {
      if (mq.matches) video.pause();
      else video.play().catch(() => {});
    };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full overflow-hidden transition-all duration-300",
        scrolled && "shadow-sm dark:shadow-black/20"
      )}
    >
      <div className="pointer-events-none absolute inset-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover object-center"
          aria-hidden
        >
          <source src={HEADER_VIDEO_SRC} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-graphite/90 dark:bg-graphite/95 backdrop-blur-md" aria-hidden />
      </div>
      <div className="relative z-10 mx-auto flex h-16 max-w-[1280px] items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo onDark />

        <nav className="hidden items-center gap-8 md:flex" aria-label="Principal">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors duration-200 hover:text-primary",
                pathname === link.href ? "text-primary" : "text-white/90"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <ThemeToggle variant="dark-bg" />
          <CTALink
            href="/contato"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white btn-primary-cta hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            {contact.primaryCTA}
            <ArrowRight className="cta-arrow h-4 w-4" />
          </CTALink>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle variant="dark-bg" />
          <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg text-white/90 hover:bg-white/10 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="relative z-10 overflow-hidden border-t border-graphite/10 dark:border-white/10 bg-graphite/95 backdrop-blur-md md:hidden"
          >
            <nav className="flex flex-col gap-1 px-4 py-4" aria-label="Mobile">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "rounded-lg px-4 py-3 text-sm font-medium transition-colors hover:bg-white/10",
                    pathname === link.href ? "text-primary" : "text-white/90"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <CTALink
                href="/contato"
                onClick={() => setMobileOpen(false)}
                className="group mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white btn-primary-cta hover:bg-primary-hover"
              >
                {contact.primaryCTA}
                <ArrowRight className="cta-arrow h-4 w-4" />
              </CTALink>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
