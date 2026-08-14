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
      "Analizamos a fondo tu negocio, tus metas y los problemas de tu operación diaria para diseñar exactamente la solución que necesitas, adaptada a tu presupuesto.",
    icon: Compass,
  },
  {
    number: "02",
    title: "Diseñamos",
    description:
      "Creamos una propuesta clara con prototipos visuales de tu producto. Sabrás exactamente cómo se verá y funcionará tu sistema antes de iniciar su construcción.",
    icon: PenTool,
  },
  {
    number: "03",
    title: "Construimos",
    description:
      "Desarrollamos tu producto con entregas y avances periódicos. Podrás probar y validar el sistema en tiempo real para asegurarnos de cumplir con tus expectativas.",
    icon: Wrench,
  },
  {
    number: "04",
    title: "Implementamos",
    description:
      "Ponemos tu sistema o aplicación en marcha de forma segura y sin interrupciones en tu operación diaria, capacitando a tu equipo para un uso inmediato.",
    icon: Rocket,
  },
  {
    number: "05",
    title: "Acompañamos y Evolucionamos",
    description:
      "Incluimos soporte de calidad garantizada, monitoreo permanente y actualizaciones para que tu tecnología crezca a la par de tu negocio.",
    icon: TrendingUp,
  },
];

export const processCopy = {
  eyebrow: "Proceso",
  title: "Metodología de Trabajo: De la Idea al Producto",
  description:
    "Una metodología transparente y sin sorpresas, pensada para que sepas exactamente qué esperar en cada etapa de tu proyecto.",
};
