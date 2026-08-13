import { Eyebrow } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
}

/**
 * Encabezado consistente para cada sección de la landing: eyebrow con
 * degradado de marca, título y descripción opcional.
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className
      )}
    >
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2
        className={cn(
          "max-w-2xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl",
          align === "center" && "mx-auto"
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "max-w-2xl text-base text-muted-foreground",
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
