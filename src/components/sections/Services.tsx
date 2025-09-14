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
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const services = [
  {
    id: "lantaarn-laadpalen",
    title: "Lantaarn- en Laadpalen",
    description:
      "Professionele installatie en onderhoud van lantaarn- en laadpalen voor openbare ruimtes",
    icon: Lightbulb,
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop&q=80",
    features: ["LED-verlichting", "Laadpalen", "Energie-efficiënt"],
    duration: "2-5 dagen",
  },
  {
    id: "trajectcontroles",
    title: "Trajectcontroles",
    description:
      "Installatie en onderhoud van trajectcontrolesystemen voor verkeersveiligheid",
    icon: Camera,
    image:
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=400&fit=crop&q=80",
    features: ["Snelheidscamera's", "Verkeerslichten", "Monitoring"],
    duration: "3-7 dagen",
  },
  {
    id: "bestrating",
    title: "Bestrating",
    description:
      "Aanleg en herstel van bestrating voor alle soorten projecten en locaties",
    icon: Square,
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop&q=80",
    features: ["Straten", "Parkeerplaatsen", "Trottoirs"],
    duration: "5-14 dagen",
  },
  {
    id: "nutsleidingen",
    title: "Nutsleidingen",
    description: "Aanleg en onderhoud van nutsleidingen en infrastructuur",
    icon: Wrench,
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop&q=80",
    features: ["Waterleidingen", "Gasleidingen", "Elektriciteit"],
    duration: "3-10 dagen",
  },
  {
    id: "graafwerken",
    title: "Graafwerken",
    description: "Alle soorten graafwerken voor particulieren en bedrijven",
    icon: Shovel,
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop&q=80",
    features: ["Fundamenten", "Bassins", "Drainage"],
    duration: "1-5 dagen",
  },
];

export function Services() {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold">Onze Diensten</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Van lantaarn- en laadpalen tot trajectcontroles en bestrating - wij
            bieden een compleet pakket aan grondwerkdiensten met de hoogste
            kwaliteitsstandaarden.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm overflow-hidden flex flex-col h-full"
              >
                {/* Image Header */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Icon Overlay */}
                  <div className="absolute top-4 right-4">
                    <div className="p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>

                  {/* Duration Badge */}
                  <div className="absolute bottom-4 left-4">
                    <div className="px-3 py-1 bg-primary text-primary-foreground rounded-full text-sm font-medium">
                      {service.duration}
                    </div>
                  </div>
                </div>

                <CardHeader className="pb-4">
                  <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4 flex flex-col flex-grow">
                  {/* Features */}
                  <div className="flex-grow flex flex-col">
                    <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider text-muted-foreground">
                      Wat wij doen:
                    </h4>
                    <div className="flex flex-wrap gap-2 flex-grow items-start">
                      {service.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm font-medium"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="pt-2 mt-auto">
                    <Button
                      variant="outline"
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300"
                      asChild
                    >
                      <Link href={`/services#${service.id}`}>
                        Meer informatie
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">2023</div>
            <div className="text-sm text-muted-foreground uppercase tracking-wider">
              Sinds
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">100%</div>
            <div className="text-sm text-muted-foreground uppercase tracking-wider">
              Kwaliteit
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">24/7</div>
            <div className="text-sm text-muted-foreground uppercase tracking-wider">
              Service
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">5+</div>
            <div className="text-sm text-muted-foreground uppercase tracking-wider">
              Diensten
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <div className="space-y-6">
            <h3 className="text-2xl lg:text-3xl font-bold">
              Klaar om uw grondwerkproject te starten?
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Neem contact met ons op voor een gratis offerte of advies. Wij
              helpen u graag verder!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8 py-4 text-lg" asChild>
                <Link href="/#contact">Gratis Offerte Aanvragen</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-4 text-lg"
                asChild
              >
                <Link href="/services">Alle Diensten Bekijken</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
