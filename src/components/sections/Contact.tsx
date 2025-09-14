"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  Loader2,
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { useState } from "react";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export function Contact() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
      } else {
        setSubmitStatus("error");
        setErrorMessage(result.error || "Er is een fout opgetreden");
      }
    } catch (error) {
      setSubmitStatus("error");
      setErrorMessage("Er is een netwerkfout opgetreden");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-12 pb-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold">Contact</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Neem contact met ons op voor een gratis offerte of advies. Wij
              helpen u graag verder met al uw grondwerkprojecten.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Neem Contact Op</h3>
                <p className="text-muted-foreground mb-6">
                  Vul het formulier in en wij nemen zo snel mogelijk contact met
                  u op. Voor vragen, offertes of advies staan wij voor u klaar.
                </p>
              </div>

              <Card className="border-2">
                <CardContent className="p-6">
                  {/* Success Message */}
                  {submitStatus === "success" && (
                    <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                        <p className="text-green-800 font-medium">
                          Uw bericht is succesvol verzonden! Wij nemen zo snel
                          mogelijk contact met u op.
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Error Message */}
                  {submitStatus === "error" && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                      <p className="text-red-800 font-medium">{errorMessage}</p>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="firstName"
                          className="block text-sm font-medium mb-2"
                        >
                          Voornaam *
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                          placeholder="Uw voornaam"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="lastName"
                          className="block text-sm font-medium mb-2"
                        >
                          Achternaam *
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                          placeholder="Uw achternaam"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium mb-2"
                        >
                          E-mailadres *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                          placeholder="uw@email.nl"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium mb-2"
                        >
                          Telefoonnummer
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                          placeholder="06-12345678"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="service"
                        className="block text-sm font-medium mb-2"
                      >
                        Onderwerp
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                      >
                        <option value="">Selecteer een onderwerp</option>
                        <option value="offerte">Offerte aanvragen</option>
                        <option value="lantaarn-laadpalen">
                          Lantaarn- en Laadpalen
                        </option>
                        <option value="trajectcontroles">
                          Trajectcontroles
                        </option>
                        <option value="bestrating">Bestrating</option>
                        <option value="nutsleidingen">Nutsleidingen</option>
                        <option value="graafwerken">Graafwerken</option>
                        <option value="vraag">Algemene vraag</option>
                        <option value="overig">Overig</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium mb-2"
                      >
                        Bericht *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        required
                        className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none"
                        placeholder="Beschrijf uw vraag, de gewenste werkzaamheden of laat ons weten hoe wij u kunnen helpen..."
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full text-lg py-6"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          Versturen...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-5 w-5" />
                          Verstuur Bericht
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Contact Informatie</h3>
                <p className="text-muted-foreground mb-6">
                  Wij zijn bereikbaar tijdens onze openingstijden. Voor
                  spoedeisende gevallen kunt u altijd bellen.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-6">
                <Card className="border-2 hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-3 bg-primary/10 rounded-full">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">Bellen</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-lg mb-4">
                      Voor directe vragen of spoedeisende gevallen
                    </CardDescription>
                    <a
                      href={`tel:${SITE_CONFIG.phone}`}
                      className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors"
                    >
                      {SITE_CONFIG.phone}
                    </a>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-3 bg-primary/10 rounded-full">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">E-mail</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-lg mb-4">
                      Voor offertes en algemene vragen
                    </CardDescription>
                    <a
                      href={`mailto:${SITE_CONFIG.email}`}
                      className="text-xl font-semibold text-primary hover:text-primary/80 transition-colors"
                    >
                      {SITE_CONFIG.email}
                    </a>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-3 bg-primary/10 rounded-full">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">Locatie</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-lg mb-4">
                      Bezoek ons op onze locatie
                    </CardDescription>
                    <p className="text-lg font-semibold mb-4">
                      {SITE_CONFIG.address}
                    </p>

                    {/* Google Maps Embed */}
                    <div className="w-full h-64 rounded-lg overflow-hidden border border-border">
                      <iframe
                        src="https://maps.google.com/maps?q=Toekomstlaan+13,+3600+Genk,+Belgium&t=&z=15&ie=UTF8&iwloc=&output=embed"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="MKM Solutions Locatie - Toekomstlaan 13, 3600 Genk"
                      />
                    </div>

                    {/* Directions Button */}
                    <div className="mt-4">
                      <a
                        href="https://www.google.com/maps/dir/?api=1&destination=Toekomstlaan+13,+3600+Genk,+België"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium"
                      >
                        <MapPin className="mr-2 h-4 w-4" />
                        Routebeschrijving
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-3 bg-primary/10 rounded-full">
                        <Clock className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">Openingstijden</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-lg mb-4">
                      Wij zijn bereikbaar tijdens:
                    </CardDescription>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-medium">Maandag - Vrijdag:</span>
                        <span>{SITE_CONFIG.openingHours.weekdays}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Zaterdag:</span>
                        <span>{SITE_CONFIG.openingHours.saturday}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Zondag:</span>
                        <span>{SITE_CONFIG.openingHours.sunday}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
