import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const dmSerifDisplay = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Kevin Gitau | Technical Support Engineer & Cybersecurity Enthusiast",
  description:
    "Kevin Gitau, 6 years in technical support and IT operations, building toward cybersecurity, and shipping real products. Based in Nairobi, Kenya.",
  keywords: [
    "Kevin Gitau",
    "Technical Support Engineer",
    "Cybersecurity",
    "Portfolio",
    "Nairobi",
    "Kenya",
    "Azure",
    "SIEM",
    "Network Engineer",
  ],
  authors: [{ name: "Kevin Gitau", url: "https://linkedin.com/in/kevinkgitau" }],
  openGraph: {
    title: "Kevin Gitau | Technical Support Engineer & Cybersecurity Enthusiast",
    description:
      "Solving real problems, building real things, and growing into cybersecurity.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kevin Gitau",
    description: "Technical Support Engineer | Cybersecurity | Builder",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${dmSerifDisplay.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
