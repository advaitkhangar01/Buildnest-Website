import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";

const avenir = localFont({
  src: [
    {
      path: "../../public/fonts/avenir/Avenir-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/avenir/Avenir-Book.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/avenir/Avenir-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/avenir/Avenir-Heavy.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/avenir/Avenir-Black.ttf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-avenir",
});

import { Montserrat, Oswald } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "900"],
  variable: "--font-proxima-nova",
});

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-proxima-nova-excn",
});

export const metadata: Metadata = {
  title: "Buildnest | Premium Architecture, Interior & Construction Solutions",
  description: "Buildnest offers bespoke turnkey architecture, construction, and interior design solutions in Nagpur. Crafting timeless spaces with engineering precision.",
  keywords: ["Architecture", "Interior Design", "Construction", "Nagpur", "Premium", "Turnkey Projects", "Buildnest"],
  authors: [{ name: "Buildnest" }],
  openGraph: {
    title: "Buildnest | Premium Architecture, Interior & Construction Solutions",
    description: "Bespoke turnkey architecture, construction, and interior design in Nagpur. Crafting timeless spaces with engineering precision.",
    url: "https://buildnestnagpur.com",
    siteName: "Buildnest",
    locale: "en_US",
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
      className={`${avenir.variable} ${montserrat.variable} ${oswald.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col noise-overlay blueprint-grid">
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
