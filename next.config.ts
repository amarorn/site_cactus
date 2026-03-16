import type { NextConfig } from "next";

// Na Vercel (VERCEL=1) nao usa export para API routes funcionarem; no GitHub Actions usa export para Pages
const nextConfig: NextConfig = {
  ...(process.env.VERCEL ? {} : { output: "export" as const }),
  env: {
    NEXT_PUBLIC_VERCEL: process.env.VERCEL ?? "",
  },
  images: {
    unoptimized: true,
    formats: ["image/webp", "image/avif"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "logo.clearbit.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },

  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },

  compress: true,

  async headers() {
    return [
      {
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
