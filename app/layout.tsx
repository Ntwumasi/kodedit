import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { SITE } from "@/content/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Kodedit — AI studio and venture lab",
    template: "%s — Kodedit",
  },
  description: SITE.description,
  applicationName: SITE.name,
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: SITE.name,
    url: SITE.url,
    title: "Kodedit — AI studio and venture lab",
    description: SITE.description,
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kodedit — AI studio and venture lab",
    description: SITE.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-canvas text-ink antialiased">
        {/* Entrances are JS-triggered; without JS everything stays visible. */}
        <noscript>
          <style>{`.reveal{opacity:1 !important;transform:none !important}`}</style>
        </noscript>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-[6px] focus:border focus:border-hairline-bright focus:bg-surface focus:px-4 focus:py-2 focus:text-[13.5px] focus:text-ink"
        >
          Skip to content
        </a>
        <Nav />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
