import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "logo.clearbit.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
