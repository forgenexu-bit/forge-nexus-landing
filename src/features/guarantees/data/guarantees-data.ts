import {
  Clock3,
  DatabaseBackup,
  ShieldCheck,
  Zap,
  type LucideIcon,
} from "lucide-react";

export interface Guarantee {
  icon: LucideIcon;
  metric: string;
  title: string;
  description: string;
}

// Compromisos en lenguaje humano: nada de siglas (SLA, RPO, RTO, hotfix).
// Cada tarjeta es una promesa que un empresario entiende sin traducir.
export const guarantees: Guarantee[] = [
  {
    icon: ShieldCheck,
    metric: "99.5%",
    title: "Disponibilidad Garantizada",
    description:
      "Tu plataforma activa y lista para operar sin caídas de servicio.",
  },
  {
    icon: Clock3,
    metric: "< 2h",
    title: "Atención Inmediata",
    description:
      "Respuesta directa a tus solicitudes de soporte técnico en menos de 2 horas hábiles.",
  },
  {
    icon: Zap,
    metric: "< 24h",
    title: "Corrección de Errores",
    description:
      "Resolución prioritaria de cualquier fallo crítico en menos de 24 horas.",
  },
  {
    icon: DatabaseBackup,
    metric: "24/7",
    title: "Copias de Seguridad Diarias",
    description:
      "Respaldos automáticos continuos para garantizar la seguridad absoluta de tus datos.",
  },
];

export const guaranteesCopy = {
  eyebrow: "Garantía y Soporte Incluido",
  title: "Compromisos de Calidad y Mantenimiento Continuo",
  description:
    "El mantenimiento y soporte continuo va incluido, con compromisos claros y medibles para que tu negocio nunca se detenga.",
};
