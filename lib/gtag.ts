export function trackEvent(
  eventName: string,
  params?: Record<string, string>
): void {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", eventName, params);
}

declare global {
  interface Window {
    gtag: (command: string, ...args: unknown[]) => void;
  }
}
