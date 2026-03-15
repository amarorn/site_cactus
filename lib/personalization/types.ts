/**
 * Visitor segments for B2B personalization.
 * Detection: cookies, UTM, session behavior, geo (see segment.ts).
 */
export type VisitorSegment =
  | "default"
  | "new"
  | "returning"
  | "enterprise"
  | "startup";

export type SegmentAudience = "enterprise" | "startup" | "default";

/** Session payload stored in cookie (JSON). */
export type SessionPayload = {
  /** First visit timestamp (ISO). */
  firstVisit?: string;
  /** Number of visits. */
  visitCount: number;
  /** Last segment assigned. */
  segment: VisitorSegment;
  /** Audience inferred from behavior/UTM (enterprise | startup | default). */
  audience: SegmentAudience;
  /** Paths visited (last N) for behavior. */
  paths?: string[];
  /** UTM campaign at first touch. */
  utmCampaign?: string;
  utmSource?: string;
  utmMedium?: string;
};

/** Input from request (middleware). */
export type PersonalizationInput = {
  cookieSession?: SessionPayload;
  utmCampaign?: string | null;
  utmSource?: string | null;
  utmMedium?: string | null;
  utmContent?: string | null;
  pathname: string;
  /** Geo from Vercel (x-vercel-ip-country etc) or similar. */
  country?: string | null;
  /** Referrer (e.g. enterprise domain list). */
  referrer?: string | null;
};
