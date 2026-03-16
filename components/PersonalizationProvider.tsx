"use client";

import { createContext, useContext, useMemo, useState, useEffect } from "react";
import type { VisitorSegment } from "@/lib/personalization/types";
import { getSegmentFromCookie } from "@/lib/personalization/cookies";

const SEGMENTS: VisitorSegment[] = ["default", "new", "returning", "enterprise", "startup"];

function parseSegment(value: string | null | undefined): VisitorSegment {
  if (value && SEGMENTS.includes(value as VisitorSegment)) return value as VisitorSegment;
  return "default";
}

type PersonalizationContextValue = {
  segment: VisitorSegment;
};

const PersonalizationContext = createContext<PersonalizationContextValue | null>(null);

export function PersonalizationProvider({ children }: { children: React.ReactNode }) {
  const [segment, setSegment] = useState<VisitorSegment>("default");

  useEffect(() => {
    const value = getSegmentFromCookie(document.cookie);
    queueMicrotask(() => setSegment(parseSegment(value)));
  }, []);

  const value = useMemo(() => ({ segment }), [segment]);
  return (
    <PersonalizationContext.Provider value={value}>
      {children}
    </PersonalizationContext.Provider>
  );
}

export function usePersonalization(): VisitorSegment {
  const ctx = useContext(PersonalizationContext);
  return ctx?.segment ?? "default";
}
