import { COMPANY } from "@/lib/constants";

/**
 * Metadatos y configuración SEO del sitio. Consumido por app/layout.tsx.
 */
export const siteConfig = {
  name: COMPANY.name,
  title: "Forge Nexus | Desarrollo de Software, Apps Android e Inteligencia Artificial",
  description:
    "Diseñamos y construimos software a la medida en México: Aplicaciones Android nativas, plataformas Web, APIs e Inteligencia Artificial con soporte continuo.",
  // TODO(lead-dev): cambiar a dominio personalizado cuando esté disponible.
  url: "https://forgenexus.vercel.app",
  ogImage: "/brand/forge-nexus-logo.jpg",
  keywords: [
    "desarrollo de software",
    "inteligencia artificial",
    "apps Android Kotlin",
    "aplicaciones móviles nativas",
    "desarrollo web Next.js",
    "automatización con IA",
    "software a la medida México",
    "Chiapas",
  ],
  navigation: [
    { label: "Soluciones", href: "#soluciones" },
    { label: "IA", href: "#ia" },
    { label: "Stack", href: "#stack" },
    { label: "Proceso", href: "#proceso" },
    { label: "Mantenimiento", href: "#mantenimiento" },
    { label: "Contacto", href: "#contacto" },
  ],
} as const;

export type SiteNavItem = (typeof siteConfig.navigation)[number];
