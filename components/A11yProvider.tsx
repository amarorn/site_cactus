"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import {
  getA11yPreferences,
  setA11yPreferences,
  applyA11yClasses,
  type A11yPreferences,
} from "@/lib/a11y-storage";

type A11yContextValue = {
  preferences: A11yPreferences;
  setFontScale: (scale: 100 | 110 | 125) => void;
  setHighContrast: (on: boolean) => void;
  setReduceMotion: (on: boolean) => void;
};

const A11yContext = createContext<A11yContextValue | null>(null);

export function useA11y() {
  const ctx = useContext(A11yContext);
  if (!ctx) throw new Error("useA11y must be used within A11yProvider");
  return ctx;
}

export function A11yProvider({ children }: { children: React.ReactNode }) {
  const [preferences, setPreferences] = useState<A11yPreferences>(() =>
    typeof window === "undefined" ? getA11yPreferences() : getA11yPreferences()
  );

  useEffect(() => {
    const stored = getA11yPreferences();
    setPreferences(stored);
    applyA11yClasses(stored);
  }, []);

  useEffect(() => {
    applyA11yClasses(preferences);
  }, [preferences]);

  const setFontScale = useCallback((fontScale: 100 | 110 | 125) => {
    setA11yPreferences({ fontScale });
    setPreferences((p) => ({ ...p, fontScale }));
  }, []);

  const setHighContrast = useCallback((highContrast: boolean) => {
    setA11yPreferences({ highContrast });
    setPreferences((p) => ({ ...p, highContrast }));
  }, []);

  const setReduceMotion = useCallback((reduceMotion: boolean) => {
    setA11yPreferences({ reduceMotion });
    setPreferences((p) => ({ ...p, reduceMotion }));
  }, []);

  const value = useMemo(
    () => ({
      preferences,
      setFontScale,
      setHighContrast,
      setReduceMotion,
    }),
    [preferences, setFontScale, setHighContrast, setReduceMotion]
  );

  return <A11yContext.Provider value={value}>{children}</A11yContext.Provider>;
}
