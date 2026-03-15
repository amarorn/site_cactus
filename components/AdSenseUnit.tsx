"use client";

import { useEffect, useRef } from "react";

const AD_CLIENT =
  process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_ID?.trim() || "ca-pub-5278426429130746";

export type AdSenseUnitProps = {
  adSlot: string;
  adClient?: string;
  adFormat?: "auto" | "rectangle" | "horizontal" | "vertical";
  fullWidthResponsive?: boolean;
  className?: string;
  style?: React.CSSProperties;
};

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

export function AdSenseUnit({
  adSlot,
  adClient = AD_CLIENT,
  adFormat = "auto",
  fullWidthResponsive = true,
  className,
  style,
}: AdSenseUnitProps) {
  const insRef = useRef<HTMLModElement>(null);
  const pushed = useRef(false);

  useEffect(() => {
    if (!adSlot || !insRef.current || pushed.current) return;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
      pushed.current = true;
    } catch {
      // ignore
    }
  }, [adSlot]);

  if (!adSlot) return null;

  return (
    <ins
      ref={insRef}
      className={`adsbygoogle ${className ?? ""}`.trim()}
      style={{ display: "block", ...style }}
      data-ad-client={adClient}
      data-ad-slot={adSlot}
      data-ad-format={adFormat}
      data-full-width-responsive={fullWidthResponsive}
    />
  );
}
