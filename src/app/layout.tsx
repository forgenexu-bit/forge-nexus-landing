import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { siteConfig } from "@/config/site";
import { COMPANY, SOCIAL_LINKS, WHATSAPP_NUMBER } from "@/lib/constants";
import type { Metadata } from "next";
import "./globals.css";

// Nota: usamos la pila de fuentes del sistema (definida en globals.css) en vez
// de next/font/google. Ese loader necesita descargar el archivo de fuente de
// fonts.gstatic.com en cada arranque de `next dev`/`next build`; en redes
// restringidas (firewall corporativo, sin internet) eso rompe la compilación
// con "Module not found: @vercel/turbopack-next/internal/font/google/font".
// Una pila de fuentes del sistema no depende de red y se ve prácticamente
// idéntica en cualquier SO moderno.

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s · ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [siteConfig.ogImage],
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
};

// Datos estructurados (JSON-LD) para que Google entienda a Forge Nexus como
// negocio real: nombre, descripción, ubicación y contacto. Se inyecta como
// <script> plano en el body (patrón recomendado por Next.js para JSON-LD),
// no requiere JS del cliente para ser leído por los crawlers.
const professionalServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: COMPANY.name,
  description:
    "Desarrollo de Software Profesional, Apps Móviles, Web e Inteligencia Artificial.",
  url: siteConfig.url,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Tuxtla Gutierrez",
    addressRegion: "Chiapas",
    addressCountry: "MX",
  },
  email: COMPANY.email,
  telephone: `+${WHATSAPP_NUMBER}`,
  sameAs: SOCIAL_LINKS.map((social) => social.url),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(professionalServiceJsonLd),
          }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
