import { COMPANY, WHATSAPP_DEFAULT_MESSAGE, buildWhatsappLink } from "@/lib/constants";
import { Mail, MapPin, type LucideIcon } from "lucide-react";
import type { IconType } from "react-icons";

export const contactChannels: {
  icon: LucideIcon | IconType;
  label: string;
  value: string;
  href?: string;
}[] = [
  {
    icon: Mail,
    label: "Email",
    value: COMPANY.email,
    href: `mailto:${COMPANY.email}`,
  },
  {
    icon: MapPin,
    label: "Ubicación",
    value: COMPANY.legalLocation,
    href: undefined,
  },
];

export const whatsappHref = buildWhatsappLink(WHATSAPP_DEFAULT_MESSAGE);

export const contactCopy = {
  eyebrow: "Contacto",
  title: "Cotiza tu Proyecto a la Medida",
  description:
    "Cuéntanos qué necesitas construir. Respondemos en menos de 2 horas hábiles y armamos una propuesta a la medida de tu alcance y presupuesto.",
};
