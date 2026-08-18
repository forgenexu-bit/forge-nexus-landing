import { COMPANY } from "@/lib/constants";

/**
 * Metadatos y configuración SEO del sitio. Consumido por app/layout.tsx.
 */
export const siteConfig = {
  name: COMPANY.name,
  title: "Forge Nexus | Desarrollo de Software, Apps Móviles e Inteligencia Artificial",
  description:
    "Diseñamos y construimos sistemas digitales a la medida en México: aplicaciones móviles, sitios web, automatización e Inteligencia Artificial con soporte garantizado.",
  // Alias estable de Production en Vercel (no cambia entre deploys, a
  // diferencia de las URLs de deployment con hash tipo
  // project-hash-team.vercel.app). Cambiar aquí cuando tengas dominio
  // personalizado.
  url: "https://forge-nexus-landing.vercel.app",
  ogImage: "/brand/forge-nexus-logo.jpg",
  keywords: [
    "desarrollo de software",
    "inteligencia artificial",
    "aplicaciones móviles a la medida",
    "desarrollo de sitios web profesionales",
    "automatización con IA",
    "software a la medida México",
    "Chiapas",
  ],
  navigation: [
    { label: "Soluciones", href: "#soluciones" },
    { label: "Industrias", href: "#industrias" },
    { label: "IA", href: "#ia" },
    { label: "Tecnología", href: "#stack" },
    { label: "Proceso", href: "#proceso" },
    { label: "Mantenimiento", href: "#mantenimiento" },
    { label: "Contacto", href: "#contacto" },
  ],
} as const;

export type SiteNavItem = (typeof siteConfig.navigation)[number];
