import { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { VcaCertificate } from "@/components/sections/VcaCertificate";
import { TrustedPartners } from "@/components/sections/TrustedPartners";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { WorkProcess } from "@/components/sections/WorkProcess";
import { Contact } from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Grondwerkdiensten België | VCA** Gecertificeerd | MKM Solutions",
  description:
    "VCA** gecertificeerd grondwerkbedrijf in België sinds 2023. Professionele grondwerkdiensten: lantaarn- en laadpalen, trajectcontroles, bestrating, nutsleidingen en graafwerken. Gratis offerte voor particulieren en bedrijven!",
  keywords: [
    "grondwerken belgië",
    "grondwerkbedrijf",
    "vca gecertificeerd",
    "lantaarnpalen belgië",
    "laadpalen installatie",
    "trajectcontroles",
    "bestrating belgië",
    "nutsleidingen",
    "graafwerken",
    "grondwerkdiensten",
    "MKM Solutions",
    "grondwerken particulieren",
    "grondwerken bedrijven",
  ],
  openGraph: {
    title: "Grondwerkdiensten België | VCA** Gecertificeerd | MKM Solutions",
    description:
      "VCA** gecertificeerd grondwerkbedrijf in België sinds 2023. Professionele grondwerkdiensten voor particulieren en bedrijven.",
    url: "https://mkmsolutions.be",
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
    title: "Grondwerkdiensten België | VCA** Gecertificeerd | MKM Solutions",
    description:
      "VCA** gecertificeerd grondwerkbedrijf in België sinds 2023. Professionele grondwerkdiensten.",
  },
  alternates: {
    canonical: "https://mkmsolutions.be",
  },
};

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "MKM Solutions",
    description:
      "VCA** gecertificeerd grondwerkbedrijf in België sinds 2023. Professionele grondwerkdiensten voor particulieren en bedrijven.",
    url: "https://mkmsolutions.be",
    telephone: "+32-XXX-XXX-XXX",
    email: "info@mkmsolutions.be",
    address: {
      "@type": "PostalAddress",
      addressCountry: "BE",
      addressRegion: "België",
    },
    areaServed: {
      "@type": "Country",
      name: "België",
    },
    serviceType: [
      "Grondwerken",
      "Lantaarn- en Laadpalen",
      "Trajectcontroles",
      "Bestrating",
      "Nutsleidingen",
      "Graafwerken",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Grondwerkdiensten",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Lantaarn- en Laadpalen",
            description:
              "Professionele installatie en onderhoud van lantaarn- en laadpalen voor openbare ruimtes met moderne LED-technologie.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Trajectcontroles",
            description:
              "Installatie en onderhoud van trajectcontrolesystemen voor verkeersveiligheid met de nieuwste technologie.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Bestrating",
            description:
              "Aanleg en herstel van bestrating voor alle soorten projecten en locaties met hoogwaardige materialen.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Nutsleidingen",
            description:
              "Aanleg en onderhoud van nutsleidingen en infrastructuur met aandacht voor veiligheid en duurzaamheid.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Graafwerken",
            description:
              "Alle soorten graafwerken voor particulieren en bedrijven met professionele apparatuur en ervaren operators.",
          },
        },
      ],
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "25",
    },
    foundingDate: "2023",
    certification: {
      "@type": "EducationalOccupationalCredential",
      name: "VCA** Certificering",
      description: "Veiligheid, Gezondheid en Milieu Checklist Aannemers",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div>
        <Hero />
        <Services />
        <TrustedPartners />
        <WhyChooseUs />
        <WorkProcess />
        <VcaCertificate />
        <Contact />
      </div>
    </>
  );
}
