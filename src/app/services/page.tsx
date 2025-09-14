import { Metadata } from "next";
import { ServicesDetail } from "@/components/sections/ServicesDetail";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title:
    "Grondwerkdiensten België | Lantaarnpalen, Bestrating & Meer | MKM Solutions",
  description:
    "Ontdek onze uitgebreide grondwerkdiensten in België: lantaarn- en laadpalen, trajectcontroles, bestrating, nutsleidingen en graafwerken. VCA** gecertificeerd sinds 2023. Gratis offerte!",
  keywords: [
    "grondwerkdiensten belgië",
    "lantaarnpalen belgië",
    "laadpalen installatie",
    "trajectcontroles belgië",
    "bestrating belgië",
    "nutsleidingen belgië",
    "graafwerken belgië",
    "vca gecertificeerd",
    "grondwerkbedrijf",
    "MKM Solutions",
    "grondwerken particulieren",
    "grondwerken bedrijven",
  ],
  openGraph: {
    title:
      "Grondwerkdiensten België | Lantaarnpalen, Bestrating & Meer | MKM Solutions",
    description:
      "Ontdek onze uitgebreide grondwerkdiensten in België: lantaarn- en laadpalen, trajectcontroles, bestrating, nutsleidingen en graafwerken. VCA** gecertificeerd.",
    url: "https://mkmsolutions.be/services",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MKM Solutions - Grondwerkdiensten België",
      },
    ],
  },
  twitter: {
    title:
      "Grondwerkdiensten België | Lantaarnpalen, Bestrating & Meer | MKM Solutions",
    description:
      "Ontdek onze uitgebreide grondwerkdiensten in België. VCA** gecertificeerd sinds 2023.",
  },
  alternates: {
    canonical: "https://mkmsolutions.be/services",
  },
};

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: "Diensten" }]} />
      <ServicesDetail />
    </div>
  );
}
