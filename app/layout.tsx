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

export const metadata: Metadata = {
  title: "Kevin Gitau | Security Operations Engineer",
  description:
    "Six years maintaining production infrastructure across enterprise, fintech, and telecommunications environments. Security operations, cloud infrastructure, and product development. Nairobi, Kenya.",
  authors: [{ name: "Kevin Gitau", url: "https://linkedin.com/in/kevinkgitau" }],
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Kevin Gitau | Security Operations Engineer",
    description:
      "Security operations, infrastructure, and real products. Based in Nairobi, Kenya.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  );
}
