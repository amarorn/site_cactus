import type { SessionPayload } from "./types";

/**
 * Optional session store for cross-device or server-side session memory.
 * Implement with Redis (e.g. Vercel KV, Upstash) and plug into middleware
 * when SESSION_STORE=redis; otherwise middleware uses cookie only.
 */
export type SessionStore = {
  get(sessionId: string): Promise<SessionPayload | null>;
  set(
    sessionId: string,
    payload: SessionPayload,
    ttlSeconds?: number
  ): Promise<void>;
};

const DEFAULT_TTL = 60 * 60 * 24 * 365;

export function createRedisSessionStore(
  get: (key: string) => Promise<string | null>,
  set: (key: string, value: string, options?: { ex?: number }) => Promise<void>
): SessionStore {
  const prefix = "cactus:session:";
  return {
    async get(sessionId: string): Promise<SessionPayload | null> {
      const raw = await get(prefix + sessionId);
      if (!raw) return null;
      try {
        return JSON.parse(raw) as SessionPayload;
      } catch {
        return null;
      }
    },
    async set(
      sessionId: string,
      payload: SessionPayload,
      ttlSeconds: number = DEFAULT_TTL
    ): Promise<void> {
      await set(prefix + sessionId, JSON.stringify(payload), { ex: ttlSeconds });
    },
  };
}
