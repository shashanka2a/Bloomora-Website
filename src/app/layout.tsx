import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
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
  title: "Bloomora - Website & App Development Agency",
  description:
    "Full-stack design & development agency — we build websites and apps that convert. Professional web and mobile app development services.",
  icons: { 
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" }
    ],
    shortcut: "/favicon.svg",
    apple: "/favicon.svg"
  },
  openGraph: {
    title: "Bloomora - Website & App Development Agency",
    description:
      "Full-stack design & development agency — we build websites and apps that convert. Professional web and mobile app development services.",
    url: "https://bloomora.example.com",
    siteName: "Bloomora",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Bloomora Social Preview",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0E0E0E]`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
