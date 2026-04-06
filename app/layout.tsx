import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Using Inter as it's similar to Daikon's clean, modern aesthetic
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kodedit.com"),
  title: {
    default: "Kodedit | Full Lifecycle AI Development Platform",
    template: "%s | Kodedit",
  },
  description: "AI-powered development covering the full software lifecycle. From requirements to deployment with built-in quality gates, explainable AI, and enterprise governance.",
  keywords: [
    "Kodedit",
    "AI coding assistant",
    "AI development platform",
    "code generation",
    "developer tools",
    "AI code review",
    "automated testing",
    "software development AI",
    "full lifecycle development",
    "explainable AI",
    "code quality",
    "AI IDE",
    "coding assistant",
    "GitHub Copilot alternative",
    "Cursor alternative",
    "developer productivity"
  ],
  authors: [{ name: "Kodedit", url: "https://kodedit.com" }],
  creator: "Kodedit",
  publisher: "Kodedit",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kodedit.com",
    siteName: "Kodedit",
    title: "Kodedit | Full Lifecycle AI Development Platform",
    description: "AI-powered development covering the full software lifecycle. Built-in quality gates, explainable AI, and enterprise governance.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Kodedit - Full Lifecycle AI Development Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@kodedit",
    creator: "@kodedit",
    title: "Kodedit | Full Lifecycle AI Development Platform",
    description: "AI for the full development lifecycle. Not just code completion - requirements, planning, testing, review, and maintenance.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://kodedit.com",
  },
  category: "Developer Tools",
  other: {
    "msapplication-TileColor": "#fe3641",
    "apple-mobile-web-app-title": "Kodedit",
    "application-name": "Kodedit",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#fe3641" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.className} bg-[#171717] text-white antialiased`}>{children}</body>
    </html>
  );
}
