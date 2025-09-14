import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "MKM Solutions - VCA** Gecertificeerd Grondwerkbedrijf België",
    template: "%s | MKM Solutions",
  },
  description:
    "VCA** gecertificeerd grondwerkbedrijf in België sinds 2023. Professionele grondwerkdiensten: lantaarn- en laadpalen, trajectcontroles, bestrating, nutsleidingen en graafwerken. Gratis offerte!",
  keywords: [
    "grondwerken belgië",
    "vca gecertificeerd",
    "lantaarnpalen",
    "laadpalen",
    "trajectcontroles",
    "bestrating",
    "nutsleidingen",
    "graafwerken",
    "grondwerkbedrijf",
    "grondwerkdiensten",
    "MKM",
    "grondwerken genk",
    "regenput",
    "puntopening",
    "ANPR camera's",
    "graafwerken voor particulier",
    "graafwerken voor particulieren",
    "graafwerken voor bedrijven",
    "MKM Genk",
    "MKM Carrosserie",
    "Mustafa Mutlu",
    "MKM Solutions",
  ],
  authors: [{ name: "MKM Solutions" }],
  creator: "MKM Solutions",
  publisher: "MKM Solutions",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://mkmsolutions.be"),
  alternates: {
    canonical: "/",
    languages: {
      "nl-BE": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "nl_BE",
    url: "https://mkmsolutions.be",
    siteName: "MKM Solutions",
    title: "MKM Solutions - VCA** Gecertificeerd Grondwerkbedrijf België",
    description:
      "VCA** gecertificeerd grondwerkbedrijf in België sinds 2023. Professionele grondwerkdiensten voor particulieren en bedrijven.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MKM Solutions - Grondwerkbedrijf België",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MKM Solutions - VCA** Gecertificeerd Grondwerkbedrijf België",
    description:
      "VCA** gecertificeerd grondwerkbedrijf in België sinds 2023. Professionele grondwerkdiensten.",
    images: ["/og-image.jpg"],
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
  verification: {
    google: "your-google-verification-code",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
