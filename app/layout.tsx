import type { Metadata, Viewport } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  preload: true,
});

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
  style: ["normal", "italic"],
  preload: true,
});

export const viewport: Viewport = {
  themeColor: "#0B0E14",
};

export const metadata: Metadata = {
  title: "Rizky Dermawan Hendry Putra | Portfolio",
  description: "Computer Science graduate from Paramadina University with hands-on experience in Flutter, Laravel, and Node.js — bridging code and collaboration.",
  keywords: ["Rizky Dermawan", "Portfolio", "Web Developer", "Mobile Developer", "Flutter", "Laravel", "Node.js"],
  authors: [{ name: "Rizky Dermawan Hendry Putra" }],
  openGraph: {
    title: "Rizky Dermawan Hendry Putra | Portfolio",
    description: "Informatics Graduate · Mobile & Web Developer · Project Management",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
