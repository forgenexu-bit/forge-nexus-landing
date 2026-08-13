import { BrainCircuit, Cloud, Globe, Smartphone, type LucideIcon } from "lucide-react";

export interface TechPillar {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

/**
 * Los 4 pilares tecnológicos que sostienen cada proyecto. Presentados de
 * forma minimalista y en lenguaje de negocio, sin listar cada librería por
 * separado: el cliente decide por resultados, no por un logo reconocido.
 */
export const techPillars: TechPillar[] = [
  {
    id: "web",
    icon: Globe,
    title: "Desarrollo Web & Plataformas",
    description:
      "Desarrollado sobre estándares modernos de alta velocidad, diseño responsivo y optimización automática para buscadores (SEO).",
  },
  {
    id: "android",
    icon: Smartphone,
    title: "Desarrollo Móvil Android",
    description:
      "Aplicaciones nativas en Kotlin/Java para Android con alto rendimiento, interfaz moderna y consumo eficiente de batería.",
  },
  {
    id: "cloud",
    icon: Cloud,
    title: "Servidores & Cloud",
    description:
      "Infraestructura segura en la nube con disponibilidad del 99.5%, protección de datos y alta escalabilidad.",
  },
  {
    id: "ia",
    icon: BrainCircuit,
    title: "Inteligencia Artificial Integrada",
    description:
      "Modelos de lenguaje, automatización inteligente y análisis predictivo adaptados a tus procesos.",
  },
];

export const stackCopy = {
  eyebrow: "Tecnología",
  title: "Tecnología Moderna y Escalable de Nivel Producción",
  description:
    "La base técnica detrás de cada solución que construimos: estable, segura y preparada para crecer al ritmo de tu negocio.",
};
