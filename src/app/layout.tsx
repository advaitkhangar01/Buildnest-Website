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
  metadataBase: new URL("https://buildnestnagpur.com"),
  title: "Buildnest | Architects, Interior Design & Construction in Nagpur",
  description: "Buildnest offers bespoke turnkey architecture, civil construction, and interior design solutions in Nagpur. Crafting timeless luxury spaces and villas with engineering precision.",
  keywords: [
    "architects in Nagpur",
    "best architects in Nagpur",
    "architect in Nagpur",
    "architecture firms in Nagpur",
    "interior designers in Nagpur",
    "architect and interior designer Nagpur",
    "turnkey construction Nagpur",
    "residential architects Nagpur",
    "villa architects Nagpur",
    "Buildnest",
    "Buildnest Nagpur"
  ],
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
    title: "Buildnest | Architects, Interior Design & Construction in Nagpur",
    description: "Bespoke turnkey architecture, civil construction, and luxury interior design in Nagpur. Crafting timeless residential & commercial spaces.",
    url: "https://buildnestnagpur.com",
    siteName: "Buildnest",
    images: [
      {
        url: "/images/logo.png",
        width: 786,
        height: 714,
        alt: "Buildnest Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

import MobileQuickBar from "@/components/MobileQuickBar";
import Preloader from "@/components/Preloader";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Buildnest",
  "url": "https://buildnestnagpur.com",
  "logo": "https://buildnestnagpur.com/images/logo.png",
  "sameAs": [
    "https://www.instagram.com/buildnest_nagpur/",
    "https://www.facebook.com/profile.php?id=61591824793874",
    "https://www.linkedin.com/in/rohan-shahoo-880068423/"
  ]
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "Architect",
  "@id": "https://buildnestnagpur.com/#architect",
  "name": "Buildnest",
  "image": "https://buildnestnagpur.com/images/hero_bg.webp",
  "url": "https://buildnestnagpur.com",
  "telephone": "+919424708016",
  "priceRange": "$$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Plot No. 8, Panchtara Society, Behind Orivision Hospital, Narendra Nagar, Somalwada",
    "addressLocality": "Nagpur",
    "addressRegion": "Maharashtra",
    "postalCode": "440015",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 21.1009,
    "longitude": 79.0684
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "opens": "09:00",
    "closes": "19:00"
  },
  "areaServed": [
    {
      "@type": "AdministrativeArea",
      "name": "Nagpur"
    }
  ]
};

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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <Preloader />
        <LenisProvider>
          {children}
          <MobileQuickBar />
        </LenisProvider>
      </body>
    </html>
  );
}
