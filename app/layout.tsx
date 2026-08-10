import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  style: ["normal", "italic"],
});

const SITE_URL = "https://kevingitau.dev";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Kevin Gitau | Technical Support & Security Engineer",
    template: "%s | Kevin Gitau",
  },
  description:
    "Technical support and security engineer based in Nairobi, Kenya. Five years across enterprise cloud, fintech, and telecommunications infrastructure. Production incident response, API troubleshooting, SIEM deployment, penetration testing, and Active Directory security.",
  keywords: [
    "technical support engineer",
    "cybersecurity engineer",
    "SIEM",
    "Wazuh",
    "penetration testing",
    "MITRE ATT&CK",
    "incident response",
    "Burp Suite",
    "BloodHound",
    "Active Directory security",
    "container security",
    "cloud security",
    "Azure",
    "Grafana",
    "Prometheus",
    "cybersecurity Kenya",
    "infrastructure engineer",
    "Kevin Gitau",
  ],
  authors: [{ name: "Kevin Gitau", url: SITE_URL }],
  creator: "Kevin Gitau",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Kevin Gitau",
    title: "Kevin Gitau | Technical Support & Security Engineer",
    description:
      "Technical support and security engineer with five years across enterprise cloud, fintech, and telecommunications. Production incident response, SIEM, and penetration testing. Based in Nairobi, Kenya.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Kevin Gitau, Technical Support and Security Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kevin Gitau | Technical Support & Security Engineer",
    description:
      "Technical support and security engineer with five years across enterprise cloud, fintech, and telecommunications.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Kevin Gitau",
  jobTitle: "Technical Support & Security Engineer",
  url: SITE_URL,
  email: "kevin.gitau27@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Nairobi",
    addressCountry: "KE",
  },
  sameAs: [
    "https://linkedin.com/in/kevinkgitau",
    "https://github.com/cayvoh254",
    "https://www.credly.com/users/kevin-kibe",
  ],
  knowsAbout: [
    "Security Operations",
    "SIEM",
    "Wazuh",
    "Penetration Testing",
    "MITRE ATT&CK",
    "Incident Response",
    "Active Directory",
    "Container Security",
    "Cloud Security",
    "Azure",
    "Technical Support",
    "Infrastructure Engineering",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
