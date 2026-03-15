import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",

  images: {
    unoptimized: true,
    formats: ["image/webp", "image/avif"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "logo.clearbit.com",
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
