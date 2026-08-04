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
  title: "Kevin Gitau — Technical Support & Cybersecurity",
  description:
    "Six years keeping critical infrastructure running across telecom, climate tech, and fintech. Moving deliberately into cybersecurity. Nairobi, Kenya — open to remote roles globally.",
  authors: [{ name: "Kevin Gitau", url: "https://linkedin.com/in/kevinkgitau" }],
  openGraph: {
    title: "Kevin Gitau — Technical Support & Cybersecurity",
    description:
      "Technical support background, growing security practice, and real products shipped. Based in Nairobi.",
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
