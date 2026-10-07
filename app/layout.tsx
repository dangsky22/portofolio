import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  preload: true,
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
  weight: ["400"],
  preload: true,
});

export const metadata: Metadata = {
  title: "Rizky Dermawan Hendry Putra | Portfolio",
  description: "Final-year Computer Science student at Paramadina University with hands-on experience in Flutter, Laravel, and Node.js — bridging code and collaboration.",
  keywords: ["Rizky Dermawan", "Portfolio", "Web Developer", "Mobile Developer", "Flutter", "Laravel", "Node.js"],
  authors: [{ name: "Rizky Dermawan Hendry Putra" }],
  openGraph: {
    title: "Rizky Dermawan Hendry Putra | Portfolio",
    description: "Informatics Student · Mobile & Web Developer · Project Management",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
