import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Users, Clock, Award, CheckCircle } from "lucide-react";

export function WhyChooseUs() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Waarom MKM Solutions?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Wij onderscheiden ons door onze expertise, betrouwbaarheid en
              persoonlijke aanpak
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-2 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Ervaren Team</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Ons team heeft jarenlange ervaring in de grondwerksector en
                  staat garant voor kwaliteit.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-2 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Snelle Service</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Wij leveren snelle en efficiënte service zonder in te boeten
                  op kwaliteit.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-2 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Kwaliteitsgarantie</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Wij staan achter ons werk en bieden garantie op alle
                  uitgevoerde werkzaamheden.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-2 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Betrouwbaar</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Wij houden ons aan afspraken en leveren altijd wat we beloven.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
