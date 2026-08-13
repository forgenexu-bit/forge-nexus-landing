import {
  Compass,
  PenTool,
  Rocket,
  TrendingUp,
  Wrench,
  type LucideIcon,
} from "lucide-react";

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Descubrimos",
    description:
      "Entendemos tu negocio, tus procesos y el problema real que necesitas resolver antes de proponer una sola línea de código.",
    icon: Compass,
  },
  {
    number: "02",
    title: "Diseñamos",
    description:
      "Definimos arquitectura, experiencia de usuario y alcance, ajustados a tu presupuesto y tiempos reales.",
    icon: PenTool,
  },
  {
    number: "03",
    title: "Construimos",
    description:
      "Desarrollamos bajo Clean Architecture y control de versiones, con entregas incrementales que puedes revisar en el camino.",
    icon: Wrench,
  },
  {
    number: "04",
    title: "Implementamos",
    description:
      "Desplegamos a producción con monitoreo activo desde el primer día, sin sorpresas de último minuto.",
    icon: Rocket,
  },
  {
    number: "05",
    title: "Evolucionamos",
    description:
      "Damos mantenimiento continuo, medimos resultados y mejoramos el producto —incluida la IA— con cada iteración.",
    icon: TrendingUp,
  },
];

export const processCopy = {
  eyebrow: "Proceso",
  title: "Metodología de Trabajo: De la Idea al Producto",
  description:
    "Una metodología clara en cinco pasos, pensada para que sepas exactamente en qué etapa está tu proyecto en todo momento.",
};
