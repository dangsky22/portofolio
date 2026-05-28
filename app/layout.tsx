import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
