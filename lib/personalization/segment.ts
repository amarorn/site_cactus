import type {
  VisitorSegment,
  SegmentAudience,
  SessionPayload,
  PersonalizationInput,
} from "./types";

const MAX_PATHS = 10;
const ENTERPRISE_KEYWORDS = ["enterprise", "corporativo", "empresa", "scale", "escala"];
const STARTUP_KEYWORDS = ["startup", "produto", "mvp", "growth"];

function normalize(s: string): string {
  return s.toLowerCase().trim();
}

function hasKeyword(text: string, keywords: string[]): boolean {
  const n = normalize(text);
  return keywords.some((k) => n.includes(k));
}

/**
 * Infers audience (enterprise vs startup) from UTM and behavior.
 */
export function inferAudience(input: PersonalizationInput): SegmentAudience {
  const campaign = [input.utmCampaign, input.utmContent, input.utmSource].filter(Boolean).join(" ");
  if (hasKeyword(campaign, ENTERPRISE_KEYWORDS)) return "enterprise";
  if (hasKeyword(campaign, STARTUP_KEYWORDS)) return "startup";

  const paths = input.cookieSession?.paths ?? [];
  const pathStr = paths.join(" ");
  if (pathStr.includes("data-arch") || pathStr.includes("arquitetura") || pathStr.includes("governanca")) return "enterprise";
  if (pathStr.includes("mobile") || pathStr.includes("mvp") || pathStr.includes("produto")) return "startup";

  return "default";
}

/**
 * Computes visitor segment: new vs returning, then audience (enterprise/startup/default).
 */
export function computeSegment(input: PersonalizationInput): VisitorSegment {
  const session = input.cookieSession;
  const isNew = !session || session.visitCount <= 1;
  const audience = inferAudience(input);

  if (audience === "enterprise") return "enterprise";
  if (audience === "startup") return "startup";
  if (isNew) return "new";
  return "returning";
}

/**
 * Builds updated session payload for cookie.
 */
export function updateSession(
  input: PersonalizationInput,
  segment: VisitorSegment,
  audience: SegmentAudience
): SessionPayload {
  const prev = input.cookieSession;
  const now = new Date().toISOString();
  const pathname = input.pathname ?? "";
  const paths = prev?.paths ?? [];
  const nextPaths = [pathname, ...paths.filter((p) => p !== pathname)].slice(0, MAX_PATHS);
  const visitCount = prev ? prev.visitCount + 1 : 1;

  return {
    firstVisit: prev?.firstVisit ?? now,
    visitCount,
    segment,
    audience,
    paths: nextPaths,
    utmCampaign: input.utmCampaign ?? prev?.utmCampaign,
    utmSource: input.utmSource ?? prev?.utmSource,
    utmMedium: input.utmMedium ?? prev?.utmMedium,
  };
}
