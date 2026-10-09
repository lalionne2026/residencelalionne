import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  devIndicators: false,
  images: {
    // AVIF d'abord (~20 % plus léger que WebP), WebP sinon.
    formats: ["image/avif", "image/webp"],
    // 75 = qualité par défaut, 85 = grande photo d'accueil et plein écran.
    qualities: [75, 85],
    minimumCacheTTL: 60 * 60 * 24 * 365,
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
