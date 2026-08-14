import {
  Building2,
  GraduationCap,
  ShoppingCart,
  Stethoscope,
  Truck,
  UtensilsCrossed,
  type LucideIcon,
} from "lucide-react";

export interface Industry {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

export const industries: Industry[] = [
  {
    id: "salud",
    icon: Stethoscope,
    title: "Salud y Clínicas",
    description:
      "Sistemas de citas médicas, expedientes digitales, alertas para pacientes y gestión de servicios.",
  },
  {
    id: "oficinas",
    icon: Building2,
    title: "Oficinas y Empresas",
    description:
      "Automatización de tareas administrativas, gestión de personal, control de documentos y flujos de trabajo.",
  },
  {
    id: "retail",
    icon: ShoppingCart,
    title: "Comercio y Retail",
    description:
      "Control de inventarios en tiempo real, catálogos digitales interactivos y puntos de venta.",
  },
  {
    id: "logistica",
    icon: Truck,
    title: "Logística y Servicios",
    description:
      "Rastreo de entregas, asignación de personal en campo, geolocalización y control de rutas.",
  },
  {
    id: "educacion",
    icon: GraduationCap,
    title: "Educación e Instituciones",
    description:
      "Plataformas de gestión académica, portales estudiantiles y comunicación escolar.",
  },
  {
    id: "hospitalidad",
    icon: UtensilsCrossed,
    title: "Restaurantes y Hospitalidad",
    description:
      "Menús digitales interactivos, comandas electrónicas, reservas y programas de lealtad.",
  },
];

export const industriesCopy = {
  eyebrow: "Industrias",
  title: "Desarrollamos tecnología a la medida para todo tipo de industrias",
  description:
    "Adaptamos nuestro software e Inteligencia Artificial a los requerimientos específicos de tu sector para optimizar tus resultados.",
};
