import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Footer } from "~/components/footer";
import Header from "~/components/starter/header/header";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://heritagestonebridge.com"),
  title: {
    default: "Heritage at Stonebridge - Luxury 55+ Communities in Summerlin, Las Vegas",
    template: "%s",
  },
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-us">
      <body>
        {/* RealScout Widget Integration - loaded globally for all pages */}
        <Script
          src="https://em.realscout.com/widgets/realscout-web-components.umd.js"
          type="module"
          strategy="afterInteractive"
          crossOrigin="anonymous"
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
