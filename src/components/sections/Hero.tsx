import Image from "next/image";

export function Hero() {
  return (
    <section className="bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo Section */}
          <div className="mb-8">
            <div className="relative w-80 h-40 sm:w-96 sm:h-48 lg:w-112 lg:h-56 mx-auto">
              <Image
                src="/logo.png"
                alt="MKM Solutions"
                fill
                className="object-contain"
                priority
              />
            </div>

            <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Sinds 2023 staan wij bij MKM Solutions voor kwaliteit en service
              in de sector grondwerken. Van lantaarn- en laadpalen tot aanleg
              van nutsleidingen en alle soorten graafwerken.
            </p>
          </div>

          {/* Trust Indicators - Minimalist */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">2023</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">
                Sinds
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">100%</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">
                Kwaliteit
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">24/7</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">
                Service
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
