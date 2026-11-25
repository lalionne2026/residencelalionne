import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

// Les scripts tiers sont limités à Google Analytics. 'unsafe-inline' reste nécessaire aux scripts
// que Next.js insère dans la page tant qu'on n'utilise pas de nonces (qui rendraient chaque page dynamique).
const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline' https://www.googletagmanager.com${isDev ? " 'unsafe-eval'" : ""}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' blob: data: https://www.google-analytics.com https://www.googletagmanager.com",
  "font-src 'self'",
  `connect-src 'self' https://www.google-analytics.com https://region1.google-analytics.com https://analytics.google.com https://region1.analytics.google.com${isDev ? " ws:" : ""}`,
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=(), usb=()" },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  experimental: {
    agentUpgrade: "security",
  },
  async headers() {
    return [
      { source: "/:path*", headers: securityHeaders },
      // Photos originales (le site sert surtout les versions optimisées de /_next/image) :
      // une semaine de cache, pour qu'une photo remplacée sous le même nom finisse par se mettre à jour.
      {
        source: "/images/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=604800, stale-while-revalidate=86400" }],
      },
    ];
  },
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
