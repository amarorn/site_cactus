/**
 * Middleware de personalização (segmento/audiência).
 * Desativado quando se usa output: "export" (Next.js não suporta middleware em export estático).
 * Para reativar: renomeie este arquivo para middleware.ts e remova ou altere output em next.config.
 */
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import {
  computeSegment,
  inferAudience,
  updateSession,
} from "@/lib/personalization/segment";
import {
  getSessionCookieName,
  getSegmentCookieName,
  parseSessionCookie,
  serializeSession,
  getCookieAttributes,
} from "@/lib/personalization/cookies";
import type { PersonalizationInput } from "@/lib/personalization/types";

export function middleware(request: NextRequest) {
  const cookie = request.cookies.toString();
  const session = parseSessionCookie(cookie);
  const pathname = request.nextUrl.pathname;

  const utmCampaign = request.nextUrl.searchParams.get("utm_campaign");
  const utmSource = request.nextUrl.searchParams.get("utm_source");
  const utmMedium = request.nextUrl.searchParams.get("utm_medium");
  const utmContent = request.nextUrl.searchParams.get("utm_content");

  const req = request as NextRequest & { geo?: { country?: string }; referrer?: string };
  const country = req.geo?.country ?? request.headers.get("x-vercel-ip-country");
  const referrer = req.referrer ?? request.headers.get("referer") ?? null;

  const input: PersonalizationInput = {
    cookieSession: session,
    utmCampaign: utmCampaign ?? null,
    utmSource: utmSource ?? null,
    utmMedium: utmMedium ?? null,
    utmContent: utmContent ?? null,
    pathname,
    country: country ?? null,
    referrer,
  };

  const audience = inferAudience(input);
  const segment = computeSegment(input);
  const nextSession = updateSession(input, segment, audience);

  const attrs = getCookieAttributes();
  const response = NextResponse.next();

  response.cookies.set(getSessionCookieName(), serializeSession(nextSession), {
    path: attrs.path,
    maxAge: attrs.maxAge,
    sameSite: attrs.sameSite,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
  });

  response.cookies.set(getSegmentCookieName(), segment, {
    path: attrs.path,
    maxAge: attrs.maxAge,
    sameSite: attrs.sameSite,
    httpOnly: false,
    secure: process.env.NODE_ENV === "production",
  });

  response.headers.set("x-segment", segment);
  response.headers.set("x-audience", audience);

  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|brand|logos|videos|.*\\.(?:ico|png|svg|mp4|webp)$).*)",
  ],
};
