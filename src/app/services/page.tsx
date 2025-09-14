import { Metadata } from "next";
import { ServicesDetail } from "@/components/sections/ServicesDetail";

export const metadata: Metadata = {
  title: "Onze Diensten - MKM Solutions",
  description:
    "Ontdek onze uitgebreide grondwerkdiensten: lantaarn- en laadpalen, trajectcontroles, bestrating, nutsleidingen en graafwerken. Professionele service sinds 2023.",
};

export default function ServicesPage() {
  return <ServicesDetail />;
}
