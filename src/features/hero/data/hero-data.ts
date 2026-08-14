import {
  Layers,
  ShieldCheck,
  Smartphone,
  Wallet,
  type LucideIcon,
} from "lucide-react";

export const heroCopy = {
  eyebrow: "Software · IA · Automatización",
  headlinePrefix: "Tu negocio no solo se digitaliza. Se",
  headlineHighlight: "INTELIGENTIZA.",
  subtitle: "Software • Inteligencia Artificial • Automatización • Datos",
  description:
    "Diseñamos y construimos productos digitales a la medida —web, móvil, sistemas e IA— con soporte de calidad asegurada y evolutiva, adaptados al presupuesto real de tu negocio.",
  primaryCta: "Iniciar un Proyecto",
  secondaryCta: "Ver soluciones",
};

interface Differentiator {
  icon: LucideIcon;
  label: string;
}

export const differentiators: Differentiator[] = [
  { icon: Wallet, label: "Flexibilidad de presupuesto" },
  { icon: Smartphone, label: "Aplicaciones móviles a la medida para tu negocio" },
  { icon: Layers, label: "Soporte de calidad asegurada y evolutiva" },
  { icon: ShieldCheck, label: "Mantenimiento y soporte continuo incluido" },
];

export const dashboardMock = {
  title: "AI Business Dashboard",
  subtitle: "Vista en tiempo real",
  metrics: [
    { label: "Revenue", value: "+18.4%", trend: "up" as const },
    { label: "AI Score", value: "94", trend: "up" as const },
    { label: "Uptime", value: "99.5%", trend: "flat" as const },
  ],
  chartSeries: [38, 52, 44, 61, 58, 72, 66, 80, 75, 88],
  insight: "La IA detectó un pico de demanda y ajustó el forecast automáticamente.",
};
