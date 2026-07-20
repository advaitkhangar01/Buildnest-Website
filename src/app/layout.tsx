import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";

const avenir = localFont({
  src: [
    {
      path: "../../public/fonts/avenir/Avenir-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/avenir/Avenir-Book.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/avenir/Avenir-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/avenir/Avenir-Heavy.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/avenir/Avenir-Black.woff2",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-avenir",
  display: "swap",
});

import { Montserrat, Oswald } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "900"],
  variable: "--font-proxima-nova",
  display: "swap",
});

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-proxima-nova-excn",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0F5C69",
};

export const metadata: Metadata = {
  title: "Buildnest | Premium Architecture, Interior & Construction Solutions",
  description: "Buildnest offers bespoke turnkey architecture, construction, and interior design solutions in Nagpur. Crafting timeless spaces with engineering precision.",
  keywords: ["Architecture", "Interior Design", "Construction", "Nagpur", "Premium", "Turnkey Projects", "Buildnest"],
  authors: [{ name: "Buildnest" }],
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Buildnest | Premium Architecture, Interior & Construction Solutions",
    description: "Bespoke turnkey architecture, construction, and interior design in Nagpur. Crafting timeless spaces with engineering precision.",
    url: "https://buildnestnagpur.com",
    siteName: "Buildnest",
    locale: "en_US",
    type: "website",
  },
};

import MobileQuickBar from "@/components/MobileQuickBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${avenir.variable} ${montserrat.variable} ${oswald.variable} antialiased`}
    >
      <body className="min-h-full flex flex-col blueprint-grid">
        <LenisProvider>
          {children}
          <MobileQuickBar />
        </LenisProvider>
      </body>
    </html>
  );
}
