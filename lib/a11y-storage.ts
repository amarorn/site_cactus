const STORAGE_KEY = "cactus-a11y";

export type A11yPreferences = {
  fontScale: 100 | 110 | 125;
  highContrast: boolean;
  reduceMotion: boolean;
};

const defaults: A11yPreferences = {
  fontScale: 100,
  highContrast: false,
  reduceMotion: false,
};

export function getA11yPreferences(): A11yPreferences {
  if (typeof window === "undefined") return defaults;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaults;
    const parsed = JSON.parse(raw) as Partial<A11yPreferences>;
    return {
      fontScale: [100, 110, 125].includes(Number(parsed.fontScale))
        ? (parsed.fontScale as 100 | 110 | 125)
        : defaults.fontScale,
      highContrast: Boolean(parsed.highContrast),
      reduceMotion: Boolean(parsed.reduceMotion),
    };
  } catch {
    return defaults;
  }
}

export function setA11yPreferences(prefs: Partial<A11yPreferences>): void {
  const current = getA11yPreferences();
  const next = { ...current, ...prefs };
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  } catch {
    // ignore
  }
  applyA11yClasses(next);
}

const FONT_CLASSES = ["a11y-font-100", "a11y-font-110", "a11y-font-125"] as const;
const FONT_MAP = { 100: "a11y-font-100", 110: "a11y-font-110", 125: "a11y-font-125" } as const;

export function applyA11yClasses(prefs: A11yPreferences): void {
  if (typeof document === "undefined") return;
  const root = document.documentElement;
  FONT_CLASSES.forEach((c) => root.classList.remove(c));
  root.classList.add(FONT_MAP[prefs.fontScale]);
  if (prefs.highContrast) root.classList.add("a11y-contrast-high");
  else root.classList.remove("a11y-contrast-high");
  if (prefs.reduceMotion) root.classList.add("a11y-reduce-motion");
  else root.classList.remove("a11y-reduce-motion");
}
