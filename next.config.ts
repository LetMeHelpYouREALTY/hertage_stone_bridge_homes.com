import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    // RealScout and MLS photos are served from third-party domains we don't
    // control ahead of time, so fall back to the browser-native <img> element
    // (used throughout the real-estate components) instead of next/image.
    unoptimized: true,
  },
  // Security headers are configured in vercel.json (applies at the edge for
  // the production deployment). Add a `headers()` function here too if this
  // project is ever run behind a host other than Vercel.
};

export default nextConfig;
