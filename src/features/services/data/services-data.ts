import {
  BarChart3,
  BrainCircuit,
  Compass,
  LifeBuoy,
  Server,
  Settings2,
  Smartphone,
  Globe as WebIcon,
  type LucideIcon,
} from "lucide-react";

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
  /** Beneficios de negocio, no nombres de lenguajes o librerías. */
  highlights: string[];
  features: string[];
  highlight?: boolean;
}

export const services: ServiceItem[] = [
  {
    id: "moviles",
    number: "01",
    title: "Aplicaciones Móviles Nativas y Multiplataforma",
    description:
      "Apps profesionales para Android e iOS, con interfaz intuitiva, notificaciones para tus clientes y funcionalidad completa, adaptadas 100% a las necesidades de tu negocio.",
    icon: Smartphone,
    highlights: [
      "Diseño intuitivo",
      "Notificaciones para clientes",
      "Modo offline",
      "Sincronización directa",
    ],
    features: [
      "Interfaz moderna",
      "Alto rendimiento",
      "Notificaciones para tus clientes",
      "Almacenamiento local",
      "Autenticación segura",
      "Publicable en Google Play / App Store",
    ],
  },
  {
    id: "web",
    number: "02",
    title: "Sitios Web Profesionales",
    description:
      "Websites modernos, rápidos y optimizados para conversiones y posicionamiento, construidos con la misma tecnología que usan las plataformas líderes del mercado.",
    icon: WebIcon,
    highlights: [
      "Carga ultra rápida",
      "Adaptable a celulares",
      "Alta tasa de conversión",
      "Posicionamiento en Google",
    ],
    features: [
      "Se adapta a cualquier pantalla",
      "Optimizado para SEO",
      "Rápido y ligero",
      "Conexión 100% segura",
      "Panel administrador",
      "Analítica integrada",
    ],
  },
  {
    id: "backend",
    number: "03",
    title: "Servidores y Conexión de Sistemas",
    description:
      "Servidores y sistemas que potencian tus aplicaciones: manejo de datos, procesos de negocio y seguridad en el núcleo de tu producto.",
    icon: Server,
    highlights: [
      "Conexión segura de datos",
      "Integración entre sistemas",
      "Alta disponibilidad",
      "Procesos automatizados",
    ],
    features: [
      "Conexión con otros sistemas",
      "Accesos seguros y protegidos",
      "Validación de datos",
      "Integración de pagos",
      "Escalable",
      "Monitoreo y seguimiento continuo",
    ],
  },
  {
    id: "sistemas",
    number: "04",
    title: "Sistemas Personalizados (ERP / CRM)",
    description:
      "Soluciones hechas a medida para procesos específicos de tu negocio: inventario, RRHH, ventas, o cualquier flujo que hoy resuelvas manualmente.",
    icon: Settings2,
    highlights: [
      "Ahorro de horas de trabajo manual",
      "Control de inventario",
      "Reportes en tiempo real",
      "Seguridad de datos",
    ],
    features: [
      "Análisis profundo del proceso",
      "Diseño personalizado",
      "Integración con otros sistemas",
      "Capacitación a usuarios",
      "Reportes a medida",
      "Documentación completa",
    ],
  },
  {
    id: "dashboards",
    number: "05",
    title: "Dashboards y Analítica",
    description:
      "Paneles visuales en tiempo real para tomar decisiones basadas en datos claros y accesibles desde cualquier dispositivo.",
    icon: BarChart3,
    highlights: [
      "Datos en tiempo real",
      "Gráficos interactivos",
      "Alertas automáticas",
      "Acceso desde cualquier dispositivo",
    ],
    features: [
      "Datos en tiempo real",
      "Gráficos interactivos",
      "Filtros dinámicos",
      "Exportación de datos",
      "Alertas automáticas",
      "Multi-dispositivo",
    ],
  },
  {
    id: "consultoria",
    number: "06",
    title: "Consultoría Técnica",
    description:
      "Asesoría profesional sobre tecnología, procesos y mejores prácticas para que tu equipo tome mejores decisiones.",
    icon: Compass,
    highlights: [
      "Diagnóstico completo",
      "Plan de acción claro",
      "Optimización de procesos",
      "Recomendaciones a la medida",
    ],
    features: [
      "Evaluación de tecnología",
      "Recomendaciones tecnológicas",
      "Análisis de rendimiento",
      "Asesoría de seguridad",
      "Planificación de migración",
      "Revisión profesional de tu sistema",
    ],
  },
  {
    id: "ia",
    number: "07",
    title: "Inteligencia Artificial (IA)",
    description:
      "Integración de IA en aplicaciones existentes o nuevas: chatbots, recomendaciones, predicciones y automatización inteligente.",
    icon: BrainCircuit,
    highlights: [
      "Atención automática 24/7",
      "Respuestas personalizadas",
      "Predicciones de negocio",
      "Procesos más eficientes",
    ],
    features: [
      "Chatbots inteligentes",
      "Recomendaciones automáticas",
      "Análisis predictivo",
      "Automatización de procesos",
      "Reconocimiento de imágenes",
      "Procesamiento de lenguaje natural",
    ],
    highlight: true,
  },
  {
    id: "mantenimiento",
    number: "08",
    title: "Mantenimiento y Soporte Continuo",
    description:
      "Servicio post-lanzamiento incluido: actualizaciones, corrección de errores, optimización y soporte técnico permanente.",
    icon: LifeBuoy,
    highlights: [
      "Monitoreo 24/7",
      "Alertas tempranas",
      "Actualizaciones continuas",
      "Reportes mensuales",
    ],
    features: [
      "Monitoreo continuo",
      "Corrección de errores",
      "Actualizaciones de seguridad",
      "Optimización de rendimiento",
      "Soporte técnico directo",
      "Reportes mensuales",
    ],
  },
];

export const servicesCopy = {
  eyebrow: "Soluciones",
  title: "Soluciones de Software e Inteligencia Artificial",
  description:
    "Ocho servicios profesionales que cubren todo el ciclo de vida de tu producto digital, con Inteligencia Artificial integrada de forma transversal en cada uno.",
};
