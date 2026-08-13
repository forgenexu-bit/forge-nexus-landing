/**
 * Constantes del sistema de diseño derivado del logo de Forge Nexus.
 * Los valores reales viven como tokens CSS en `app/globals.css` (@theme);
 * este archivo existe para reutilizar los mismos valores desde TypeScript
 * (por ejemplo, en gradientes generados dinámicamente con Framer Motion/SVG).
 */
export const brandColors = {
  backgroundDeep: "#080B11",
  background: "#090D16",
  cyberBlue: "#007BFF",
  cyanBlue: "#00C6FF",
  neonPurple: "#8A2BE2",
  deepPurple: "#7000FF",
  amberOrange: "#FF8C00",
  fireOrange: "#FF5722",
} as const;

export const brandGradients = {
  primary: `linear-gradient(90deg, ${brandColors.cyberBlue}, ${brandColors.neonPurple}, ${brandColors.fireOrange})`,
  blueToPurple: `linear-gradient(135deg, ${brandColors.cyanBlue}, ${brandColors.deepPurple})`,
  purpleToOrange: `linear-gradient(135deg, ${brandColors.neonPurple}, ${brandColors.amberOrange})`,
} as const;
