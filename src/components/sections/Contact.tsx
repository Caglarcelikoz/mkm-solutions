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

interface ContactProps {
  showHeader?: boolean;
}

export function Contact({ showHeader = true }: ContactProps) {
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

    // Client-side validatie
    if (!formData.firstName.trim()) {
      setSubmitStatus("error");
      setErrorMessage("Voornaam is verplicht");
      setIsSubmitting(false);
      return;
    }

    if (!formData.lastName.trim()) {
      setSubmitStatus("error");
      setErrorMessage("Achternaam is verplicht");
      setIsSubmitting(false);
      return;
    }

    if (!formData.email.trim()) {
      setSubmitStatus("error");
      setErrorMessage("E-mailadres is verplicht");
      setIsSubmitting(false);
      return;
    }

    if (!formData.service.trim()) {
      setSubmitStatus("error");
      setErrorMessage("Onderwerp is verplicht");
      setIsSubmitting(false);
      return;
    }

    if (!formData.message.trim()) {
      setSubmitStatus("error");
      setErrorMessage("Bericht is verplicht");
      setIsSubmitting(false);
      return;
    }

    // E-mail validatie
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus("error");
      setErrorMessage("Voer een geldig e-mailadres in");
      setIsSubmitting(false);
      return;
    }

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
        setErrorMessage(
          result.error ||
            "Er is een fout opgetreden bij het verzenden van uw bericht"
        );
      }
    } catch (error) {
      setSubmitStatus("error");
      setErrorMessage(
        "Er is een netwerkfout opgetreden. Controleer uw internetverbinding en probeer het opnieuw."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-12 pb-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          {showHeader && (
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold">Contact</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Neem contact met ons op voor een gratis offerte of advies. Wij
                helpen u graag verder met al uw grondwerkprojecten.
              </p>
            </div>
          )}

          {/* Contact Information - Bento Grid */}
          <div className="mb-16">
            {/* Bento Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Phone & Email - Combined Card */}
              <Card className="border-0 shadow-xl shadow-black/20 hover:shadow-2xl hover:shadow-black/30 transition-all duration-300 bg-white/95 backdrop-blur-sm hover:scale-105 rounded-3xl overflow-hidden md:col-span-1 lg:col-span-1 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900/5 via-transparent to-transparent rounded-3xl"></div>
                <CardHeader className="pb-4 relative z-10">
                  <CardTitle className="text-xl">Contact</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 relative z-10">
                  {/* Phone Section */}
                  <div>
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="p-3 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full shadow-sm">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold text-lg">Bellen</div>
                        <div className="text-sm text-muted-foreground">
                          Voor directe vragen of spoedeisende gevallen
                        </div>
                      </div>
                    </div>
                    <a
                      href={`tel:${SITE_CONFIG.phone}`}
                      className="text-xl font-bold text-primary hover:text-primary/80 transition-colors"
                    >
                      {SITE_CONFIG.phone}
                    </a>
                  </div>

                  {/* Email Section */}
                  <div>
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="p-3 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full shadow-sm">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold text-lg">E-mail</div>
                        <div className="text-sm text-muted-foreground">
                          Voor offertes en algemene vragen
                        </div>
                      </div>
                    </div>
                    <a
                      href={`mailto:${SITE_CONFIG.email}`}
                      className="text-lg font-semibold text-primary hover:text-primary/80 transition-colors break-all"
                    >
                      {SITE_CONFIG.email}
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* Location - Large Card */}
              <Card className="border-0 shadow-xl shadow-black/20 hover:shadow-2xl hover:shadow-black/30 transition-all duration-300 bg-white/95 backdrop-blur-sm hover:scale-105 rounded-3xl overflow-hidden md:col-span-2 lg:col-span-2 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900/5 via-transparent to-transparent rounded-3xl"></div>
                <CardHeader className="pb-4 relative z-10">
                  <div className="flex items-center space-x-3">
                    <div className="p-3 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full shadow-sm">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">
                      Locatie & Openingstijden
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6 relative z-10">
                  {/* Location Section */}
                  <div>
                    <CardDescription className="text-lg mb-4">
                      Bezoek ons op onze locatie
                    </CardDescription>
                    <p className="text-lg font-semibold mb-4">
                      {SITE_CONFIG.address}
                    </p>

                    {/* Google Maps Embed */}
                    <div className="w-full h-48 rounded-lg overflow-hidden border border-border">
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
                  </div>

                  {/* Opening Hours Section */}
                  <div>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="p-3 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full shadow-sm">
                        <Clock className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold text-lg">
                          Openingstijden
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Wij zijn bereikbaar tijdens onze openingstijden. Voor
                          spoedeisende gevallen kunt u altijd bellen.
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="text-center">
                        <div className="text-sm text-muted-foreground mb-2 uppercase tracking-wide">
                          Maandag - Vrijdag
                        </div>
                        <div className="text-lg font-bold text-gray-900">
                          {SITE_CONFIG.openingHours.weekdays}
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm text-muted-foreground mb-2 uppercase tracking-wide">
                          Zaterdag
                        </div>
                        <div className="text-lg font-bold text-gray-900">
                          {SITE_CONFIG.openingHours.saturday}
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm text-muted-foreground mb-2 uppercase tracking-wide">
                          Zondag
                        </div>
                        <div className="text-lg font-bold text-gray-900">
                          {SITE_CONFIG.openingHours.sunday}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <div className="space-y-8">
            <div className="text-center">
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Vul het formulier in en wij nemen zo snel mogelijk contact met u
                op. Voor vragen, offertes of advies staan wij voor u klaar.
              </p>
            </div>

            <Card className="border-0 shadow-xl shadow-black/20 hover:shadow-2xl hover:shadow-black/30 transition-all duration-300 max-w-4xl mx-auto bg-white/95 backdrop-blur-sm rounded-3xl overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900/5 via-transparent to-transparent rounded-3xl"></div>
              <CardContent className="p-8 relative z-10">
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

                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
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
                        className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                        placeholder="E-mailadres"
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
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium mb-2"
                    >
                      Onderwerp *
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
                      <option value="trajectcontroles">Trajectcontroles</option>
                      <option value="bestrating">Bestrating</option>
                      <option value="nutsleidingen">Nutsleidingen</option>
                      <option value="graafwerken">Graafwerken</option>
                      <option value="saneringswerken-gas-elektriciteit">
                        Saneringswerken Gas & Elektriciteit
                      </option>
                      <option value="watermeter-vervangen">
                        Watermeter Vervangen
                      </option>
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
        </div>
      </div>
    </section>
  );
}
