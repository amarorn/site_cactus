"use client";

import { useState, useRef, useEffect } from "react";
import { Accessibility } from "lucide-react";
import { useA11y } from "./A11yProvider";
import { cn } from "@/lib/utils";

export function A11yWidget() {
  const { preferences, setFontScale, setHighContrast, setReduceMotion } = useA11y();
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handle = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handle);
    return () => window.removeEventListener("keydown", handle);
  }, [open]);

  return (
    <div className="fixed bottom-5 left-5 z-50 flex flex-col items-start gap-2">
      <div
        ref={panelRef}
        role="dialog"
        aria-label="Opções de acessibilidade"
        id="a11y-panel"
        aria-hidden={!open}
        className={cn(
          "rounded-xl border border-graphite/15 dark:border-white/15 bg-white dark:bg-graphite shadow-lg p-4 w-64 transition-all duration-200",
          open ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 translate-y-2"
        )}
      >
        <p className="text-xs font-semibold uppercase tracking-wider text-graphite/70 dark:text-white/70 mb-3">
          Acessibilidade
        </p>
        <div className="space-y-3">
          <div>
            <p className="text-sm font-medium text-graphite dark:text-white mb-1.5">Tamanho da fonte</p>
            <div className="flex gap-1">
              {([100, 110, 125] as const).map((scale) => (
                <button
                  key={scale}
                  type="button"
                  onClick={() => setFontScale(scale)}
                  className={cn(
                    "flex-1 rounded-md py-1.5 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
                    preferences.fontScale === scale
                      ? "bg-primary text-white"
                      : "bg-graphite/10 dark:bg-white/10 text-graphite dark:text-white hover:bg-graphite/20 dark:hover:bg-white/20"
                  )}
                >
                  {scale}%
                </button>
              ))}
            </div>
          </div>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={preferences.highContrast}
              onChange={(e) => setHighContrast(e.target.checked)}
              className="rounded border-graphite/30 text-primary focus:ring-primary"
            />
            <span className="text-sm text-graphite dark:text-white">Alto contraste</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={preferences.reduceMotion}
              onChange={(e) => setReduceMotion(e.target.checked)}
              className="rounded border-graphite/30 text-primary focus:ring-primary"
            />
            <span className="text-sm text-graphite dark:text-white">Desativar animações</span>
          </label>
        </div>
      </div>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls="a11y-panel"
        aria-label={open ? "Fechar opções de acessibilidade" : "Abrir opções de acessibilidade"}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-graphite dark:bg-white text-white dark:text-graphite shadow-lg hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
      >
        <Accessibility className="h-6 w-6" aria-hidden />
      </button>
    </div>
  );
}
