import Link from "next/link";
import Image from "next/image";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex justify-center md:justify-start">
              <div className="relative">
                <Image
                  src="/logo.png"
                  alt="MKM Solutions"
                  width={280}
                  height={120}
                  className="object-contain filter brightness-0 invert"
                />
              </div>
            </div>
            <div className="text-center md:text-left max-w-lg">
              <p className="text-lg text-primary-foreground/90 leading-relaxed mb-4">
                Kwaliteit en service in grondwerken. Sinds 2023 uw betrouwbare
                partner voor alle grondwerkprojecten in heel België.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <div className="flex items-center gap-2 text-primary-foreground/80">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm">Heel België</span>
                </div>
                <div className="flex items-center gap-2 text-primary-foreground/80">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm">VCA** Gecertificeerd</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-primary-foreground border-b-2 border-primary-foreground/30 pb-2">
              Navigatie
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200 flex items-center gap-2 group"
                >
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                  </svg>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200 flex items-center gap-2 group"
                >
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Diensten
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200 flex items-center gap-2 group"
                >
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-primary-foreground border-b-2 border-primary-foreground/30 pb-2">
              Onze Diensten
            </h3>
            <ul className="space-y-3">
              <li className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200 flex items-center gap-2 group">
                <div className="w-2 h-2 bg-primary-foreground/60 rounded-full group-hover:scale-125 transition-transform"></div>
                Lantaarn- en Laadpalen
              </li>
              <li className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200 flex items-center gap-2 group">
                <div className="w-2 h-2 bg-primary-foreground/60 rounded-full group-hover:scale-125 transition-transform"></div>
                Trajectcontroles
              </li>
              <li className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200 flex items-center gap-2 group">
                <div className="w-2 h-2 bg-primary-foreground/60 rounded-full group-hover:scale-125 transition-transform"></div>
                Bestrating
              </li>
              <li className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200 flex items-center gap-2 group">
                <div className="w-2 h-2 bg-primary-foreground/60 rounded-full group-hover:scale-125 transition-transform"></div>
                Nutsleidingen
              </li>
              <li className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200 flex items-center gap-2 group">
                <div className="w-2 h-2 bg-primary-foreground/60 rounded-full group-hover:scale-125 transition-transform"></div>
                Graafwerken
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-primary-foreground/20">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="text-center lg:text-left">
              <p className="text-primary-foreground/90 font-medium">
                © {currentYear} MKM Solutions. Alle rechten voorbehouden.
              </p>
              <p className="text-sm text-primary-foreground/60 mt-1">
                Website ontwikkeld door{" "}
                <a
                  href="https://www.cshinedigital.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors font-medium"
                >
                  C-Shine Digital
                </a>
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-primary-foreground/60">
              <span>BTW: BE 0802.101.908</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
