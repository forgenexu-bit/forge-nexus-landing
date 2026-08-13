import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  icon?: ReactNode;
  className?: string;
}

/**
 * Chip/badge de diferenciador o etiqueta corta, con borde tenue y
 * fondo glass. Usado en el Hero (checkmarks) y como etiquetas de sección.
 */
export function Badge({ children, icon, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-surface-border bg-background-deep/90 px-3.5 py-1.5 text-xs font-medium text-foreground/90",
        className
      )}
    >
      {icon}
      {children}
    </span>
  );
}

/**
 * Eyebrow: etiqueta corta en mayúsculas con degradado, usada arriba de
 * los títulos de cada sección para dar identidad visual consistente.
 */
export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-gradient-brand">
      <span className="h-1.5 w-1.5 rounded-full bg-cyan-blue shadow-[0_0_8px_2px_rgba(0,198,255,0.7)]" />
      {children}
    </span>
  );
}
