export function WorkProcess() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Ons Werkproces
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Van eerste contact tot projectoplevering - zo werken wij samen met
              u
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold mb-4">Contact & Advies</h3>
              <p className="text-muted-foreground">
                Neem contact met ons op via telefoon, e-mail of het
                contactformulier. Wij geven u graag advies over uw project.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold mb-4">Offerte & Planning</h3>
              <p className="text-muted-foreground">
                Wij maken een gedetailleerde offerte en plannen het project in
                overleg met u in. Transparantie staat voorop.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold mb-4">
                Uitvoering & Oplevering
              </h3>
              <p className="text-muted-foreground">
                Ons ervaren team voert de werkzaamheden professioneel uit en
                levert het project op tijd en volgens afspraak op.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
