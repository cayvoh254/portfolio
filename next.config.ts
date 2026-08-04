import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

/**
 * Content Security Policy
 * - 'unsafe-eval' is needed in development for Turbopack HMR
 * - 'unsafe-inline' is needed for Next.js hydration scripts and Tailwind inline styles
 * - Google Fonts are explicitly allowlisted
 */
const csp = [
  "default-src 'self'",
  isDev
    ? "script-src 'self' 'unsafe-eval' 'unsafe-inline'"
    : "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' https://fonts.gstatic.com",
  "img-src 'self' data: blob:",
  "connect-src 'self'",
  "frame-src 'none'",
  "frame-ancestors 'none'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self' mailto:",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  // Prevent browsers from MIME-sniffing a response away from declared content-type
  { key: "X-Content-Type-Options", value: "nosniff" },

  // Block clickjacking — no framing allowed from any origin
  { key: "X-Frame-Options", value: "DENY" },

  // Enable browser XSS filter (legacy browsers)
  { key: "X-XSS-Protection", value: "1; mode=block" },

  // Control how much referrer info is sent
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },

  // Enforce HTTPS for 2 years, including subdomains — enable preload when on a real domain
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains",
  },

  // Disable unused browser features
  {
    key: "Permissions-Policy",
    value: [
      "camera=()",
      "microphone=()",
      "geolocation=()",
      "browsing-topics=()",
      "interest-cohort=()",
      "payment=()",
      "usb=()",
    ].join(", "),
  },

  // Enable DNS prefetch for performance
  { key: "X-DNS-Prefetch-Control", value: "on" },

  // Content Security Policy
  { key: "Content-Security-Policy", value: csp },
];

const nextConfig: NextConfig = {
  // Remove the X-Powered-By: Next.js header to reduce fingerprinting
  poweredByHeader: false,

  // Apply security headers to all routes
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
