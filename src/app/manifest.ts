import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "MKM Solutions - Grondwerkbedrijf België",
    short_name: "MKM Solutions",
    description:
      "VCA** gecertificeerd grondwerkbedrijf in België sinds 2023. Professionele grondwerkdiensten voor particulieren en bedrijven.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    icons: [
      {
        src: "/logo.png",
        sizes: "any",
        type: "image/png",
      },
    ],
    categories: ["business", "construction", "services"],
    lang: "nl-BE",
    orientation: "portrait-primary",
  };
}
