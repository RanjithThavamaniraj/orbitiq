import type { Metadata } from "next";
import { DM_Sans, DM_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "OrbitIQ — Community Intelligence Platform",
  description:
    "Transform community activity into actionable insights with enterprise data pipelines and AI-powered analytics.",
  openGraph: {
    title: "OrbitIQ — Community Intelligence Platform",
    description:
      "Transform community activity into actionable insights with enterprise data pipelines and AI-powered analytics.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${instrumentSerif.variable} ${dmMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full page-canvas text-text">{children}</body>
    </html>
  );
}
