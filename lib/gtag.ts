import { logEvent as firebaseLogEvent, getFirebaseAnalytics } from "@/lib/firebase";

export function trackEvent(
  eventName: string,
  params?: Record<string, string>
): void {
  const analytics = getFirebaseAnalytics();
  if (analytics) {
    firebaseLogEvent(eventName, params);
    return;
  }
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", eventName, params);
  }
}

declare global {
  interface Window {
    gtag?: (command: string, ...args: unknown[]) => void;
  }
}
