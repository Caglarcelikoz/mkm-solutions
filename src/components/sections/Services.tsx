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
    image: "/laadpaal.png",
    features: ["Laadpalen", "Energie-efficiënt", "Moderne technologie"],
  },
  {
    id: "trajectcontroles",
    title: "Trajectcontroles",
    description:
      "Installatie en onderhoud van trajectcontrolesystemen voor verkeersveiligheid",
    icon: Camera,
    image: "/trajectcontrole2.jpg",
    features: ["Trajectcontroles", "ANPR camera's"],
  },
  {
    id: "bestrating",
    title: "Bestrating",
    description:
      "Aanleg en herstel van bestrating voor alle soorten projecten en locaties",
    icon: Square,
    image: "/bestrating1.jpeg",
    features: ["Straten", "Parkeerplaatsen", "Trottoirs"],
  },
  {
    id: "nutsleidingen",
    title: "Nutsleidingen",
    description: "Aanleg en onderhoud van nutsleidingen en infrastructuur",
    icon: Wrench,
    image: "/nutsleidingen2.jpeg",
    features: ["Waterleidingen", "Telecom infrastructuur", "Elektriciteit"],
  },
  {
    id: "graafwerken",
    title: "Graafwerken",
    description: "Alle soorten graafwerken voor particulieren en bedrijven",
    icon: Shovel,
    image: "/graafwerken.jpg",
    features: ["Fundamenten", "Regenputten", "Puntopeningen"],
  },
];

export function Services() {
  return (
    <section className="pt-20 py-12 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold">Onze Diensten</h2>
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
      </div>
    </section>
  );
}
