import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

/**
 * Tarjeta base con efecto glassmorphism, borde tenue y transición de
 * hover sutil. Sirve de fundación para ServiceCard, DemoCard, StepCard, etc.
 */
export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        // Nota: sin backdrop-blur a propósito. Con decenas de tarjetas en
        // pantalla, backdrop-filter obliga al navegador a recomponer una
        // copia difuminada de todo lo que hay detrás en cada frame de
        // scroll — es la causa más común de scroll con jank en layouts
        // como este. Un fondo casi opaco da el mismo look "glass" a una
        // fracción del costo.
        "group relative overflow-hidden rounded-2xl border border-surface-border bg-surface/90 transition-colors duration-300 hover:border-cyan-blue/40",
        className
      )}
      {...props}
    />
  );
}

export function CardGlow({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100",
        "bg-[radial-gradient(120px_80px_at_20%_0%,rgba(0,198,255,0.14),transparent_70%)]",
        className
      )}
    />
  );
}
