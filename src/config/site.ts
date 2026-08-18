import { COMPANY } from "@/lib/constants";

/**
 * Metadatos y configuración SEO del sitio. Consumido por app/layout.tsx.
 */
export const siteConfig = {
  name: COMPANY.name,
  title: "Forge Nexus | Desarrollo de Software, Apps Móviles e Inteligencia Artificial",
  description:
    "Diseñamos y construimos sistemas digitales a la medida en México: aplicaciones móviles, sitios web, automatización e Inteligencia Artificial con soporte garantizado.",
  // TODO(lead-dev): esta es una URL de despliegue de Vercel con hash
  // (project-hash-team.vercel.app), no el alias estable del proyecto.
  // Vercel genera una URL nueva de este tipo en cada deploy salvo que la
  // fijes como dominio de producción/alias en el dashboard del proyecto —
  // si no la fijas, este canonical, el sitemap y el robots.txt quedarán
  // apuntando a una URL que puede dejar de resolver en el próximo deploy.
  // Cambiar aquí cuando tengas dominio personalizado o alias estable.
  url: "https://forge-nexus-landing-nt3eel5pg-forge-nexus1.vercel.app",
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
