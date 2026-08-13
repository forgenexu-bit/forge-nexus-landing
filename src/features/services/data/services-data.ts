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
  technologies: string[];
  features: string[];
  highlight?: boolean;
}

export const services: ServiceItem[] = [
  {
    id: "moviles",
    number: "01",
    title: "Aplicaciones Móviles Nativas y Multiplataforma",
    description:
      "Apps profesionales para Android e iOS, con interfaz intuitiva y funcionalidad completa: Flutter & Dart para multiplataforma, o Kotlin nativo cuando el proyecto lo requiere.",
    icon: Smartphone,
    technologies: [
      "Flutter",
      "Dart",
      "Kotlin",
      "Java",
      "Jetpack",
      "Material Design 3",
      "Firebase",
      "APIs REST",
    ],
    features: [
      "Interfaz moderna",
      "Alto rendimiento",
      "Notificaciones push",
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
      "Websites modernos, rápidos y optimizados para conversiones y posicionamiento, construidos con el mismo stack que usan las plataformas SaaS líderes.",
    icon: WebIcon,
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5", "CSS3"],
    features: [
      "Responsive (mobile-first)",
      "Optimizado para SEO",
      "Rápido y ligero",
      "HTTPS seguro",
      "Panel administrador",
      "Analytics integrado",
    ],
  },
  {
    id: "backend",
    number: "03",
    title: "Backend y APIs Robustas",
    description:
      "Servidores y APIs que potencian tus aplicaciones: manejo de datos, lógica de negocio y seguridad en el núcleo de tu producto.",
    icon: Server,
    technologies: [
      "Node.js / Express",
      "Python / FastAPI",
      "PostgreSQL",
      "MongoDB",
      "JWT",
      "OAuth2",
    ],
    features: [
      "APIs RESTful",
      "Autenticación OAuth2",
      "Validación de datos",
      "Integración de pagos",
      "Escalable",
      "Logs y monitoreo",
    ],
  },
  {
    id: "sistemas",
    number: "04",
    title: "Sistemas Personalizados (ERP / CRM)",
    description:
      "Soluciones hechas a medida para procesos específicos de tu negocio: inventario, RRHH, ventas, o cualquier flujo que hoy resuelvas manualmente.",
    icon: Settings2,
    technologies: [
      "Stack adaptado a la necesidad",
      "Bases de datos relacionales",
      "NoSQL",
      "APIs a medida",
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
    technologies: ["React", "Recharts", "Chart.js", "Google Analytics"],
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
      "Asesoría profesional sobre tecnología, arquitectura y mejores prácticas para que tu equipo tome mejores decisiones técnicas.",
    icon: Compass,
    technologies: ["Auditoría de stack", "Seguridad", "Cloud", "Code review"],
    features: [
      "Evaluación de tecnología",
      "Recomendaciones de stack",
      "Análisis de performance",
      "Asesoría de seguridad",
      "Planificación de migración",
      "Code review profesional",
    ],
  },
  {
    id: "ia",
    number: "07",
    title: "Inteligencia Artificial (IA)",
    description:
      "Integración de IA en aplicaciones existentes o nuevas: chatbots, recomendaciones, predicciones y automatización inteligente.",
    icon: BrainCircuit,
    technologies: ["OpenAI API", "ChatGPT", "TensorFlow", "Python", "Scikit-learn", "NLP"],
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
      "Servicio post-lanzamiento incluido: actualizaciones, corrección de bugs, optimización y soporte técnico permanente.",
    icon: LifeBuoy,
    technologies: ["Monitoreo 24/7", "GitHub Actions", "Alertas", "Logs"],
    features: [
      "Monitoreo continuo",
      "Corrección de bugs",
      "Updates de seguridad",
      "Optimización de performance",
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
