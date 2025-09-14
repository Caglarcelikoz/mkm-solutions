import Image from "next/image";

export function VcaCertificate() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-primary/80 rounded-3xl p-8 md:p-12 text-white">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-16 -translate-y-16"></div>
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-white rounded-full translate-x-12 translate-y-12"></div>
              <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white rounded-full"></div>
            </div>

            <div className="relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Left Side - Logo and Title */}
                <div className="text-center lg:text-left">
                  <div className="inline-flex items-center space-x-4 mb-6">
                    <div className="w-24 h-24 bg-white rounded-2xl flex items-center justify-center shadow-xl border-4 border-white/30">
                      <Image
                        src="/vca.png"
                        alt="VCA Certificaat"
                        width={64}
                        height={64}
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold mb-2">VCA**</h3>
                      <p className="text-white/80 text-lg">Gecertificeerd</p>
                    </div>
                  </div>
                  <p className="text-white/90 text-lg leading-relaxed max-w-lg mx-auto lg:mx-0">
                    Officieel VCA** gecertificeerd voor de hoogste veiligheids-
                    en kwaliteitsstandaarden in de grondwerksector.
                  </p>
                </div>

                {/* Right Side - Benefits */}
                <div className="space-y-4">
                  <div className="flex items-start space-x-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">
                        Veiligheid Gegarandeerd
                      </h4>
                      <p className="text-white/80 text-sm">
                        Strenge veiligheidsprotocollen en risicobeheer
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">
                        Kwaliteitsstandaarden
                      </h4>
                      <p className="text-white/80 text-sm">
                        Voldoet aan alle industriële kwaliteitsnormen
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">
                        Professionele Uitvoering
                      </h4>
                      <p className="text-white/80 text-sm">
                        Ervaren team met bewezen track record
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
