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
    default: "Kodedit | AI Solutions for Small Businesses",
    template: "%s | Kodedit",
  },
  description: "Kodedit helps small businesses grow with AI. Chatbots, automation, and analytics that save 40+ hours/week and reduce costs by 60%. Results in 2-4 weeks.",
  keywords: [
    "Kodedit",
    "AI solutions",
    "small business AI",
    "AI chatbots",
    "business automation",
    "predictive analytics",
    "AI consulting",
    "process automation",
    "customer service AI",
    "AI implementation",
    "machine learning",
    "business intelligence"
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
    title: "Kodedit | AI Solutions for Small Businesses",
    description: "Kodedit helps small businesses grow with AI. Chatbots, automation, and analytics that save 40+ hours/week and reduce costs by 60%.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Kodedit - AI Solutions for Small Businesses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@kodedit",
    creator: "@kodedit",
    title: "Kodedit | AI Solutions for Small Businesses",
    description: "Kodedit helps small businesses grow with AI. Chatbots, automation, and analytics that save 40+ hours/week.",
    images: ["/og-image.png"],
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://kodedit.com",
  },
  category: "Technology",
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
