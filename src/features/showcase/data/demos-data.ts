import { Bot, MapPinned, Radar, type LucideIcon } from "lucide-react";

export interface DemoItem {
  id: string;
  title: string;
  category: string;
  description: string;
  icon: LucideIcon;
  tech: string[];
}

export const demos: DemoItem[] = [
  {
    id: "exploracion-regional",
    title: "Plataforma de Exploración Regional",
    category: "Web + Paneles de Control + Geolocalización",
    description:
      "Demo interna que mapea puntos de interés y datos regionales de Chiapas sobre un panel interactivo, con filtros dinámicos y capas de datos en tiempo real.",
    icon: MapPinned,
    tech: ["Mapas interactivos", "Panel en tiempo real", "Filtros dinámicos", "Datos actualizados"],
  },
  {
    id: "monitoreo-alertas",
    title: "Sistema de Monitoreo con Alertas en Tiempo Real",
    category: "Automatización + IA + Monitoreo en Tiempo Real",
    description:
      "Proyecto interno que ingiere eventos en vivo, detecta anomalías con modelos de análisis predictivo y dispara alertas automáticas por umbral.",
    icon: Radar,
    tech: ["Alertas instantáneas", "Detección de anomalías", "Monitoreo continuo", "Actualización en vivo"],
  },
  {
    id: "chatbot-soporte",
    title: "Chatbot de Soporte Inteligente",
    category: "Inteligencia Artificial · Atención al Cliente",
    description:
      "Asistente conversacional propio construido sobre modelos de lenguaje, entrenado para resolver preguntas frecuentes y escalar a soporte humano cuando es necesario.",
    icon: Bot,
    tech: ["Atención 24/7", "Respuestas naturales", "Escalado a soporte humano"],
  },
];

export const showcaseCopy = {
  eyebrow: "Demostraciones",
  title: "Soluciones Desarrolladas y Casos de Estudio",
  description:
    "En vez de mostrar clientes o cifras que no podemos verificar contigo, te mostramos demos propias y proyectos internos que reflejan cómo trabajamos.",
};
