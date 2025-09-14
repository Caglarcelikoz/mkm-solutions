export const SITE_CONFIG = {
  name: "MKM Solutions",
  description:
    "Sinds 2023 staan wij bij MKM Solutions voor kwaliteit en service in de sector grondwerken: van lantaarn- en laadpalen, trajectcontroles en bestrating tot aanleg van nutsleidingen en alle soorten graafwerken; ook voor particulieren.",
  url: "https://mkmsolutions.be",
  email: "info@mkmsolutions.be",
  phone: "+32 484 81 89 83",
  address: "Toekomstlaan 13, 3600 Genk",
  openingHours: {
    weekdays: "09:00 - 17:00",
    saturday: "Op afspraak",
    sunday: "Gesloten",
  },
} as const;

export const NAVIGATION = [
  { name: "Home", href: "/" },
  { name: "Diensten", href: "/services" },
] as const;

export const SERVICES = [
  {
    title: "Lantaarn- en Laadpalen",
    description:
      "Professionele installatie en onderhoud van lantaarn- en laadpalen.",
    icon: "lightbulb",
  },
  {
    title: "Trajectcontroles",
    description: "Installatie en onderhoud van trajectcontrolesystemen.",
    icon: "camera",
  },
  {
    title: "Bestrating",
    description:
      "Aanleg en herstel van bestrating voor alle soorten projecten.",
    icon: "square",
  },
  {
    title: "Nutsleidingen",
    description: "Aanleg en onderhoud van nutsleidingen en infrastructuur.",
    icon: "pipe",
  },
  {
    title: "Graafwerken",
    description: "Alle soorten graafwerken voor particulieren en bedrijven.",
    icon: "shovel",
  },
] as const;
