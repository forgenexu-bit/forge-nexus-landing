import type { IconType } from "react-icons";
import { FaLinkedin } from "react-icons/fa6";
import { SiFacebook, SiInstagram, SiX } from "react-icons/si";

/**
 * Datos institucionales de Forge Nexus.
 * Fuente única de verdad para nombre, contacto y presencia digital de la marca.
 */
export const COMPANY = {
  name: "Forge Nexus",
  tagline: "Software Solutions",
  legalLocation: "Tuxtla Gutiérrez, Chiapas, México",
  email: "info@forgenexus.com",
  instagram: "@forgenexu",
  instagramUrl: "https://www.instagram.com/forgenexu",
  website: "www.forgenexus.com",
  privacyPolicyUrl: "https://aviso-privacidad-five.vercel.app/",
} as const;

/**
 * Presencia de Forge Nexus en redes sociales. Fuente única de verdad
 * consumida por el Footer y la tarjeta de contacto directo.
 */
export const SOCIAL_LINKS: { name: string; icon: IconType; url: string }[] = [
  { name: "Instagram", icon: SiInstagram, url: COMPANY.instagramUrl },
  { name: "X (Twitter)", icon: SiX, url: "https://x.com/ForgeNexusqmr6" },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    url: "https://www.linkedin.com/in/forgenexus-undefined-575b93429",
  },
  {
    name: "Facebook",
    icon: SiFacebook,
    url: "https://www.facebook.com/profile.php?id=61593012934061",
  },
];

// TODO(lead-dev): reemplazar por el número real de WhatsApp de la empresa
// (formato E.164, ej. "5219611234567") antes de publicar a producción.
export const WHATSAPP_NUMBER_PLACEHOLDER = "5210000000000";

export function buildWhatsappLink(message: string) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER_PLACEHOLDER}?text=${encoded}`;
}

export const WHATSAPP_DEFAULT_MESSAGE =
  "Hola Forge Nexus, me interesa cotizar un proyecto de...";
