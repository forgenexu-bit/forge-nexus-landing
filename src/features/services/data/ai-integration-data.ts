import {
  BarChart3,
  Compass,
  Server,
  Settings2,
  Smartphone,
  Globe as WebIcon,
  type LucideIcon,
} from "lucide-react";

export interface AiIntegrationArea {
  id: string;
  area: string;
  icon: LucideIcon;
  items: string[];
}

export const aiIntegrationAreas: AiIntegrationArea[] = [
  {
    id: "moviles",
    area: "Apps Móviles",
    icon: Smartphone,
    items: [
      "Chatbot IA para soporte al cliente",
      "Recomendaciones personalizadas de productos",
      "Reconocimiento facial para autenticación",
      "Predicción de comportamiento de usuario",
      "Optimización automática de recursos",
    ],
  },
  {
    id: "web",
    area: "Sitios Web",
    icon: WebIcon,
    items: [
      "Chat IA para atención al cliente 24/7",
      "Búsqueda inteligente con IA",
      "Recomendaciones de productos y contenido",
      "Análisis de sentimiento de comentarios",
      "Personalización automática de experiencia",
    ],
  },
  {
    id: "backend",
    area: "Backend / APIs",
    icon: Server,
    items: [
      "Procesamiento automático de datos",
      "Detección de fraude en transacciones",
      "Optimización automática de consultas a BD",
      "Predicción de demanda de recursos",
      "Análisis de patrones en datos",
    ],
  },
  {
    id: "sistemas",
    area: "Sistemas Personalizados",
    icon: Settings2,
    items: [
      "Automatización inteligente de procesos",
      "Predicción de necesidades del negocio",
      "Análisis automático de reportes",
      "Clasificación y categorización automática",
      "Alertas predictivas inteligentes",
    ],
  },
  {
    id: "dashboards",
    area: "Dashboards",
    icon: BarChart3,
    items: [
      "Análisis predictivo de métricas",
      "Recomendaciones automáticas de acciones",
      "Detección de anomalías en datos",
      "Forecasting inteligente",
      "Insights automáticos basados en IA",
    ],
  },
  {
    id: "consultoria",
    area: "Consultoría",
    icon: Compass,
    items: [
      "Análisis de tecnologías con IA",
      "Recomendaciones optimizadas por ML",
      "Predicción de resultados técnicos",
      "Análisis de patrones en código",
      "Auditoría de seguridad asistida por IA",
    ],
  },
];

export const aiIntegrationCopy = {
  eyebrow: "Inteligencia Artificial",
  title: "Cómo integramos IA en cada área de tu empresa",
  description:
    "La IA no es un servicio aislado: repotencia cada una de nuestras soluciones. Así aplicamos Machine Learning, NLP y Computer Vision según el área de tu negocio.",
};
