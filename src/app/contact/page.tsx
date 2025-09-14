import { Metadata } from "next";
import { Contact } from "@/components/sections/Contact";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Contact | Gratis Offerte Grondwerken België | MKM Solutions",
  description:
    "Neem contact op met MKM Solutions voor een gratis offerte grondwerken in België. VCA** gecertificeerd grondwerkbedrijf sinds 2023. Snelle reactie en professioneel advies!",
  keywords: [
    "contact grondwerken belgië",
    "gratis offerte grondwerken",
    "grondwerkbedrijf contact",
    "MKM Solutions contact",
    "offerte aanvragen",
    "grondwerken belgië",
    "vca gecertificeerd",
    "grondwerkdiensten",
  ],
  openGraph: {
    title: "Contact | Gratis Offerte Grondwerken België | MKM Solutions",
    description:
      "Neem contact op met MKM Solutions voor een gratis offerte grondwerken in België. VCA** gecertificeerd grondwerkbedrijf sinds 2023.",
    url: "https://mkmsolutions.be/contact",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MKM Solutions - Contact Grondwerken België",
      },
    ],
  },
  twitter: {
    title: "Contact | Gratis Offerte Grondwerken België | MKM Solutions",
    description:
      "Neem contact op met MKM Solutions voor een gratis offerte grondwerken in België. VCA** gecertificeerd.",
  },
  alternates: {
    canonical: "https://mkmsolutions.be/contact",
  },
};

export default function ContactPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact MKM Solutions",
    description:
      "Neem contact op met MKM Solutions voor een gratis offerte grondwerken in België. VCA** gecertificeerd grondwerkbedrijf sinds 2023.",
    url: "https://mkmsolutions.be/contact",
    mainEntity: {
      "@type": "LocalBusiness",
      name: "MKM Solutions",
      description: "VCA** gecertificeerd grondwerkbedrijf in België sinds 2023",
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
      openingHours: "Mo-Fr 08:00-17:00",
      priceRange: "€€",
      paymentAccepted: "Cash, Credit Card, Bank Transfer",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="min-h-screen">
        {/* Breadcrumbs */}
        <div className="container mx-auto px-4 pt-8">
          <Breadcrumbs items={[{ label: "Contact" }]} />
        </div>

        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
                  Contact
                </h1>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                  Klaar om uw grondwerkproject te starten? Neem contact met ons
                  op voor een gratis offerte en persoonlijk advies van onze
                  experts.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <Contact showHeader={false} />
      </div>
    </>
  );
}
