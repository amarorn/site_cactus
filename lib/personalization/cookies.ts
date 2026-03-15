import type { SessionPayload } from "./types";

const SESSION_COOKIE = "cactus_session";
const SEGMENT_COOKIE = "cactus_segment";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365; // 1 year

export function getSessionCookieName(): string {
  return SESSION_COOKIE;
}

export function getSegmentCookieName(): string {
  return SEGMENT_COOKIE;
}

export function getSegmentFromCookie(cookieHeader: string | null): string | null {
  if (!cookieHeader) return null;
  const match = cookieHeader.match(new RegExp(`${SEGMENT_COOKIE}=([^;]+)`));
  return match ? decodeURIComponent(match[1]) : null;
}

export function parseSessionCookie(cookieHeader: string | null): SessionPayload | undefined {
  if (!cookieHeader) return undefined;
  const match = cookieHeader.match(new RegExp(`${SESSION_COOKIE}=([^;]+)`));
  if (!match) return undefined;
  try {
    return JSON.parse(decodeURIComponent(match[1])) as SessionPayload;
  } catch {
    return undefined;
  }
}

export function serializeSession(session: SessionPayload): string {
  return encodeURIComponent(JSON.stringify(session));
}

export function getCookieAttributes(): { path: string; maxAge: number; sameSite: "lax" } {
  return { path: "/", maxAge: COOKIE_MAX_AGE, sameSite: "lax" };
}
