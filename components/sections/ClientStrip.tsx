"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { clients } from "@/content/clients";

const LOGO_BASE = "https://logo.clearbit.com";
const LOCAL_BASE = "/logos/clients";

type LogoSource = "localSvg" | "localPng" | "clearbit" | "text";

function getLogoSrc(
  source: LogoSource,
  slug: string,
  domain: string
): string | null {
  if (source === "localSvg") return `${LOCAL_BASE}/${slug}.svg`;
  if (source === "localPng") return `${LOCAL_BASE}/${slug}.png`;
  if (source === "clearbit") return `${LOGO_BASE}/${domain}`;
  return null;
}

function nextSource(source: LogoSource): LogoSource {
  if (source === "localSvg") return "localPng";
  if (source === "localPng") return "clearbit";
  if (source === "clearbit") return "text";
  return "text";
}

export function ClientStrip() {
  return (
    <section className="border-y border-graphite/10 dark:border-white/10 bg-light-gray dark:bg-graphite/50 py-16">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.2em] text-graphite/60 dark:text-white/60"
        >
          Empresas que confiam na Cactus
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-4 sm:gap-6"
        >
          {clients.map((client, i) => (
            <ClientLogo key={client.slug} client={client} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ClientLogo({
  client,
  index,
}: {
  client: (typeof clients)[number];
  index: number;
}) {
  const [source, setSource] = useState<LogoSource>("localSvg");
  const src = getLogoSrc(source, client.slug, client.domain);

  const handleError = () => {
    setSource((prev) => nextSource(prev));
  };

  const theme = client.logoTheme ?? null;
  const imgClass = theme === "light" ? "invert dark:invert-0" : "";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ scale: 1.05, y: -2 }}
      className="flex h-12 w-32 shrink-0 items-center justify-center rounded-lg border border-graphite/15 dark:border-white/20 bg-white dark:bg-white/5 px-4 py-2 shadow-sm transition-shadow hover:shadow-md sm:h-14 sm:w-36"
    >
      {source !== "text" && src ? (
        <div className="flex min-h-[28px] w-full items-center justify-center sm:min-h-[32px]">
          <img
            key={src}
            src={src}
            alt={client.name}
            width={120}
            height={40}
            decoding="async"
            className={`h-6 w-auto max-w-[100px] object-contain object-center sm:h-7 sm:max-w-[120px] ${imgClass}`}
            onError={handleError}
            onLoad={(e) => {
              const target = e.currentTarget;
              if (target.naturalWidth === 0 || target.naturalHeight === 0) handleError();
            }}
          />
        </div>
      ) : (
        <span className="text-center text-sm font-medium text-graphite dark:text-white/90">
          {client.name}
        </span>
      )}
    </motion.div>
  );
}
