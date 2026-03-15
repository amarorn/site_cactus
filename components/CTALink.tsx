"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { trackEvent } from "@/lib/gtag";

type CTALinkProps = React.ComponentProps<typeof Link>;

export function CTALink({ href, onClick, children, ...props }: CTALinkProps) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      onClick={(e) => {
        trackEvent("cta_primary_click", {
          page: pathname ?? "",
          link_url: typeof href === "string" ? href : href.pathname ?? "",
        });
        onClick?.(e);
      }}
      {...props}
    >
      {children}
    </Link>
  );
}
