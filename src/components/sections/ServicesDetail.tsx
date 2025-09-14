import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Lightbulb,
  Camera,
  Square,
  Wrench,
  Shovel,
  CheckCircle,
  Clock,
  Shield,
  Award,
  Users,
  ArrowRight,
  Star,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const detailedServices = [
  {
    id: "lantaarn-laadpalen",
    title: "Lantaarn- en Laadpalen",
    description:
      "Professionele installatie en onderhoud van lantaarn- en laadpalen voor openbare ruimtes met moderne LED-technologie.",
    icon: Lightbulb,
    image: "/TotalEnergies-Duitsland.jpeg",
    features: [
      "LED-verlichting installatie",
      "Laadpalen voor elektrische voertuigen",
      "Onderhoud en reparatie",
      "Energie-efficiënte oplossingen",
      "Moderne technologie",
      "Smart city integratie",
    ],
    process: [
      "Locatie inspectie en planning",
      "Offerte binnen 24 uur",
      "Afspraak inplannen",
      "Installatie met moderne apparatuur",
      "Testen en oplevering",
    ],
    benefits: ["Duurzaam", "Energie-efficiënt", "Modern"],
    duration: "2-5 werkdagen",
    warranty: "2 jaar garantie",
  },
  {
    id: "trajectcontroles",
    title: "Trajectcontroles",
    description:
      "Installatie en onderhoud van trajectcontrolesystemen voor verkeersveiligheid met de nieuwste technologie.",
    icon: Camera,
    image: "/trajectcontrole.png",
    features: [
      "Snelheidscamera's",
      "Verkeerslichten",
      "Monitoring systemen",
      "Onderhoud en kalibratie",
    ],
    process: [
      "Verkeersanalyse en planning",
      "Systeem ontwerp",
      "Installatie en configuratie",
      "Testen en kalibratie",
      "Oplevering",
    ],
    benefits: ["Veilig", "Betrouwbaar", "Precisie"],
    duration: "3-7 werkdagen",
    warranty: "3 jaar garantie",
  },
  {
    id: "bestrating",
    title: "Bestrating",
    description:
      "Aanleg en herstel van bestrating voor alle soorten projecten en locaties met hoogwaardige materialen.",
    icon: Square,
    image: "/bestrating.jpg",
    features: [
      "Straten en wegen",
      "Parkeerplaatsen",
      "Trottoirs en voetpaden",
      "Opritten en terrassen",
      "Herstelwerkzaamheden",
      "Waterafvoer systemen",
      "Duurzame materialen",
      "Kleurrijke bestrating",
    ],
    process: [
      "Grondwerk en voorbereiding",
      "Fundering aanleggen",
      "Bestrating plaatsen",
      "Afwerking en voegen",
      "Kwaliteitscontrole",
    ],
    benefits: ["Duurzaam", "Kwaliteit", "Vakmanschap"],
  },
  {
    id: "nutsleidingen",
    title: "Nutsleidingen",
    description:
      "Aanleg en onderhoud van nutsleidingen en infrastructuur met aandacht voor veiligheid en duurzaamheid.",
    icon: Wrench,
    image: "/nutsleidingen.jpg",
    features: [
      "Waterleidingen",
      "Gasleidingen",
      "Elektriciteitskabels",
      "Telecom infrastructuur",
      "Riool en afvoer",
      "Ondergrondse kabels",
      "Veiligheidsmaatregelen",
      "Compliance certificering",
    ],
    process: [
      "Grondonderzoek en planning",
      "Graafwerkzaamheden",
      "Leidingen plaatsen",
      "Aansluitingen maken",
      "Testen en oplevering",
    ],
    benefits: ["Veilig", "Betrouwbaar", "Compliance"],
    duration: "3-10 werkdagen",
    warranty: "2 jaar garantie",
  },
  {
    id: "graafwerken",
    title: "Graafwerken",
    description:
      "Alle soorten graafwerken voor particulieren en bedrijven met professionele apparatuur en ervaren operators.",
    icon: Shovel,
    image: "/graafwerken.jpg",
    features: [
      "Fundamenten",
      "Bassins en vijvers",
      "Drainage systemen",
      "Tuinwerkzaamheden",
      "Onderhoudswerk",
      "Grondverzet",
      "Afvalverwerking",
      "Milieuvriendelijk",
    ],
    process: [
      "Project analyse en planning",
      "Materieel en personeel",
      "Graafwerkzaamheden",
      "Afvalverwerking",
      "Oplevering en opruiming",
    ],
    benefits: ["Precisie", "Efficiënt", "Flexibel"],
  },
];

const whyChooseUs = [
  {
    icon: Clock,
    title: "Snelle Service",
    description:
      "Gratis offerte binnen 24 uur en snelle afhandeling van uw project zonder concessies aan kwaliteit.",
  },
  {
    icon: Users,
    title: "Ervaren Vakmensen",
    description:
      "Sinds 2023 actief in grondwerken met continue bijscholing en certificering van ons team.",
  },
  {
    icon: Shield,
    title: "Kwaliteitsgarantie",
    description:
      "Wij staan garant voor onze werkzaamheden met de hoogste kwaliteitsstandaarden en materialen.",
  },
  {
    icon: Award,
    title: "Professioneel Werk",
    description:
      "Erkend voor professionele afhandeling van grondwerkprojecten met moderne apparatuur.",
  },
];

export function ServicesDetail() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
                Onze Diensten
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Van lantaarn- en laadpalen tot trajectcontroles en bestrating -
                wij bieden een compleet pakket aan grondwerkdiensten met de
                hoogste kwaliteitsstandaarden en moderne technologie.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto space-y-20">
            {detailedServices.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;

              return (
                <div key={service.id} id={service.id} className="space-y-12">
                  {/* Service Header */}
                  <div className="text-center space-y-6">
                    <div className="flex justify-center mb-6">
                      <div className="p-6 bg-gray-100 rounded-2xl shadow-sm">
                        <Icon className="h-16 w-16 text-black" />
                      </div>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                      {service.title}
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Service Content */}
                  <div
                    className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-start ${
                      !isEven ? "lg:grid-flow-col-dense" : ""
                    }`}
                  >
                    {/* Image */}
                    <div className={`${!isEven ? "lg:col-start-2" : ""}`}>
                      <div className="relative h-80 md:h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover transition-transform hover:scale-105"
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div
                      className={`space-y-10 ${
                        !isEven ? "lg:col-start-1" : ""
                      }`}
                    >
                      {/* Features */}
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900">
                          Wat wij doen:
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {service.features.map((feature, idx) => (
                            <div
                              key={idx}
                              className="flex items-start space-x-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                            >
                              <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-700 font-medium">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Process */}
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900">
                          Ons Proces:
                        </h3>
                        <div className="space-y-4">
                          {service.process.map((step, idx) => (
                            <div
                              key={idx}
                              className="flex items-start space-x-4 p-4 rounded-xl bg-white border border-gray-200 shadow-sm"
                            >
                              <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                                {idx + 1}
                              </div>
                              <span className="text-gray-700 font-medium pt-2">
                                {step}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Divider */}
                  {index < detailedServices.length - 1 && (
                    <div className="border-t border-gray-200 pt-16"></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-10">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                Klaar om uw grondwerkproject te starten?
              </h2>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                Neem contact met ons op voor een gratis offerte of advies. Wij
                helpen u graag verder!
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="px-8 py-4 text-lg bg-black hover:bg-gray-800 text-white"
                asChild
              >
                <Link href="/#contact">Gratis Offerte Aanvragen</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
