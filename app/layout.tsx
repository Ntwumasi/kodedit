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
  title: "Kodedit - AI Solutions for Small Businesses",
  description: "Transform your small business with AI. We provide chatbots, automation, and predictive analytics that save time, reduce costs, and accelerate growth.",
  keywords: [
    "AI solutions",
    "small business automation",
    "AI chatbots",
    "business process automation",
    "predictive analytics",
    "AI implementation",
    "business intelligence",
    "customer service automation",
    "AI consulting",
    "machine learning for business"
  ],
  authors: [{ name: "Kodedit" }],
  creator: "Kodedit",
  publisher: "Kodedit",
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
    title: "Kodedit - AI Solutions for Small Businesses",
    description: "Transform your small business with AI. We provide chatbots, automation, and predictive analytics that save time, reduce costs, and accelerate growth.",
    siteName: "Kodedit",
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
    title: "Kodedit - AI Solutions for Small Businesses",
    description: "Transform your small business with AI. We provide chatbots, automation, and predictive analytics that save time, reduce costs, and accelerate growth.",
    images: ["/og-image.png"],
    creator: "@kodedit",
    site: "@kodedit",
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://kodedit.com",
  },
  category: "Technology",
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
