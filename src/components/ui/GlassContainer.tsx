import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

/**
 * Contenedor con efecto glassmorphism (bordes tenues + backdrop-blur)
 * reutilizado por tarjetas, paneles y el mockup del dashboard.
 */
export function GlassContainer({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "glass-panel rounded-2xl shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)]",
        className
      )}
      {...props}
    />
  );
}
