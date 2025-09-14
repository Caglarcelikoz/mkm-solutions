import Image from "next/image";

export function Hero() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/mkm-solutions-building.jpeg"
          alt="MKM Solutions Building"
          fill
          className="object-cover"
          priority
        />
        {/* Darker overlay for better text readability */}
        <div className="absolute inset-0 bg-black/70"></div>
        {/* Subtle gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center bg-white/35 backdrop-blur-sm rounded-2xl p-4 sm:p-6 md:p-8 lg:p-12 border border-white/40">
          {/* Logo Section */}
          <div className="mb-8">
            <div className="relative w-64 h-32 xs:w-72 xs:h-36 sm:w-80 sm:h-40 md:w-96 md:h-48 lg:w-112 lg:h-56 mx-auto mb-4">
              <Image
                src="/logo.png"
                alt="MKM Solutions"
                fill
                className="object-contain drop-shadow-lg"
                priority
              />
            </div>

            <p className="text-lg sm:text-xl lg:text-2xl text-white max-w-3xl mx-auto leading-relaxed drop-shadow-md px-2">
              MKM Solutions is uw betrouwbare partner voor professionele
              grondwerken. Wij leveren maatwerk oplossingen voor nutsleidingen,
              graafwerken en infrastructuur projecten met oog voor detail en
              kwaliteit.
            </p>
          </div>

          {/* Key Features - Modern Design */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto mb-8">
            <div className="flex items-center gap-3 bg-white/15 backdrop-blur-sm rounded-full px-4 py-3 border border-white/25 w-full sm:w-auto sm:min-w-[200px] justify-center">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="text-white font-medium">Ervaren Team</span>
            </div>

            <div className="flex items-center gap-3 bg-white/15 backdrop-blur-sm rounded-full px-4 py-3 border border-white/25 w-full sm:w-auto sm:min-w-[200px] justify-center">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
              <span className="text-white font-medium">Moderne Technieken</span>
            </div>

            <div className="flex items-center gap-3 bg-white/15 backdrop-blur-sm rounded-full px-4 py-3 border border-white/25 w-full sm:w-auto sm:min-w-[200px] justify-center">
              <svg
                className="w-5 h-5 text-white"
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
              <span className="text-white font-medium">Snelle Uitvoering</span>
            </div>
          </div>

          {/* Belgium Coverage - Clean Design */}
          <div className="relative max-w-xl mx-auto text-center">
            {/* Main Text with Icons */}
            <div className="flex items-center justify-center gap-3 mb-1">
              {/* Belgium Flag Colors */}
              <div className="flex items-center gap-1">
                <div
                  className="w-2 h-2 bg-red-500 rounded-full animate-pulse"
                  style={{ animationDelay: "0s", animationDuration: "2s" }}
                ></div>
                <div
                  className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"
                  style={{ animationDelay: "0.7s", animationDuration: "2s" }}
                ></div>
                <div
                  className="w-2.5 h-2.5 bg-gray-800 rounded-full border border-white/30 animate-pulse"
                  style={{ animationDelay: "1.4s", animationDuration: "2s" }}
                ></div>
              </div>

              {/* Main Text */}
              <h3 className="text-lg font-semibold text-white drop-shadow-md">
                Heel België
              </h3>

              {/* Map Icon with Effect */}
              <div className="relative">
                <svg
                  className="w-5 h-5 text-white/80"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                {/* Animated pulse effect */}
                <div className="absolute inset-0 rounded-full bg-white/20 animate-ping"></div>
              </div>
            </div>

            {/* Subtitle */}
            <p className="text-white/80 text-sm drop-shadow-sm">
              Actief in alle provincies
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
