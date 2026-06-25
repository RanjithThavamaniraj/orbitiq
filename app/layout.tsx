import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full page-glow text-body">{children}</body>
    </html>
  );
}
