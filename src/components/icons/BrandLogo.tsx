import Image from "next/image";

/**
 * Marca de Forge Nexus: hexágono con nodo central y conexiones radiales.
 * Recorte del logo oficial de la empresa (public/brand/mark.png).
 */
export function BrandMark({ className }: { className?: string }) {
  return (
    <Image
      src="/brand/mark.png"
      alt=""
      width={600}
      height={600}
      priority
      className={className}
    />
  );
}

/** Lockup completo: marca + wordmark, usado en el navbar y footer. */
export function BrandLogo({ className }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className ?? ""}`}>
      <BrandMark className="h-8 w-8 shrink-0" />
      <span className="flex flex-col leading-none">
        <span className="text-base font-bold tracking-tight text-foreground">
          FORGE <span className="text-gradient-brand">NEXUS</span>
        </span>
        <span className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.25em] text-muted-foreground">
          Software Solutions
        </span>
      </span>
    </span>
  );
}
