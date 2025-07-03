import Script from "next/script";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import './globals.css'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI Page Builder - Professional AI-Generated Landing Pages for $500",
  description: "Get a stunning, conversion-optimized landing page built by AI in just 24 hours. Fixed price of $500 with unlimited revisions and mobile optimization.",
  keywords: "AI landing pages, website design, landing page creation, AI web design, professional websites",
  openGraph: {
    title: "AI Page Builder - Professional AI Landing Pages",
    description: "Professional AI-generated landing pages delivered in 24 hours for $500",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/remixicon/4.6.0/remixicon.min.css" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Script src="/frontend.js" />
      </body>
    </html>
  );
}