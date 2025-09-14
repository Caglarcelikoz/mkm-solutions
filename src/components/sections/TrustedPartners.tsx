import Image from "next/image";

const partners = [
  {
    name: "APK",
    logo: "/apk.png",
    description: "Algemene Publieke Werken",
  },
  {
    name: "Agentschap Vlaanderen",
    logo: "/agentschap-vlaanderen.png",
    description: "Wegen en Verkeer",
  },
  {
    name: "Fluvius",
    logo: "/fluvius.png",
    description: "Energie en Water",
  },
  {
    name: "TotalEnergies",
    logo: "/total.png",
    description: "Energie Partner",
  },
  {
    name: "Proximus",
    logo: "/proximus.png",
    description: "Telecommunicatie",
  },
];

export function TrustedPartners() {
  return (
    <section className="relative py-12 bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 via-transparent to-primary/3"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/8 rounded-full blur-3xl opacity-25"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/3 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Onze Vertrouwde Partners
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              We werken samen met gerenommeerde organisaties en bedrijven om de
              hoogste kwaliteit te leveren voor uw projecten.
            </p>
          </div>

          {/* Partners - Responsive Grid */}
          <div className="grid grid-cols-2 md:flex md:items-center md:justify-center md:space-x-8 lg:space-x-12 py-8 gap-8 md:gap-0 justify-items-center">
            {partners.map((partner, index) => (
              <div
                key={partner.name}
                className="group flex items-center justify-center"
              >
                <div className="relative w-32 h-20 md:w-40 md:h-24 flex items-center justify-center opacity-80 hover:opacity-100 transition-all duration-300 hover:scale-105">
                  <Image
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    fill
                    className="object-contain transition-all duration-300"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced Divider */}
          <div className="flex items-center justify-center mt-8">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
            <div className="px-4">
              <div className="w-2 h-2 bg-primary rounded-full shadow-lg shadow-primary/50"></div>
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
          </div>

          {/* Bottom Accent */}
          <div className="text-center mt-6">
            <p className="text-gray-400 text-sm font-medium">
              Vertrouwde samenwerkingen voor betrouwbare resultaten
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
