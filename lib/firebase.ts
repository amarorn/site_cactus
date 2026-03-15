import { initializeApp, type FirebaseApp } from "firebase/app";
import { getAnalytics, logEvent as firebaseLogEvent, type Analytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

let app: FirebaseApp | null = null;
let analytics: Analytics | null = null;

export function initFirebase(): { app: FirebaseApp; analytics: Analytics } | null {
  if (typeof window === "undefined") return null;
  if (app && analytics) return { app, analytics };

  const hasConfig =
    firebaseConfig.apiKey &&
    firebaseConfig.projectId &&
    firebaseConfig.appId;

  if (!hasConfig) return null;

  app = initializeApp(firebaseConfig);
  analytics = getAnalytics(app);
  return { app, analytics };
}

export function getFirebaseAnalytics(): Analytics | null {
  return analytics;
}

export function logEvent(eventName: string, params?: Record<string, string>): void {
  if (typeof window === "undefined" || !analytics) return;
  firebaseLogEvent(analytics, eventName, params);
}

if (typeof window !== "undefined" && firebaseConfig.apiKey && firebaseConfig.appId) {
  initFirebase();
}
