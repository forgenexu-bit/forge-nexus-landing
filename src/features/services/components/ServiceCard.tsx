import { Card, CardGlow } from "@/components/ui/Card";
import type { ServiceItem } from "@/features/services/data/services-data";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

interface ServiceCardProps {
  service: ServiceItem;
  index: number;
}

// Server Component con animación de entrada 100% CSS (`animate-fade-up`,
// ver globals.css) en vez de framer-motion `whileInView`. Con 8 tarjetas en
// esta grilla, evitamos 8 IntersectionObservers + el runtime de motion, y el
// contenido nunca depende de que el JS del cliente hidrate para ser visible.
export function ServiceCard({ service, index }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <article
      style={{ animationDelay: `${(index % 4) * 0.06}s` }}
      className="animate-fade-up h-full"
    >
      <Card
        className={cn(
          "flex h-full flex-col p-6",
          service.highlight && "border-neon-purple/40"
        )}
      >
        <CardGlow />
        <div className="flex items-start justify-between">
          <div
            className={cn(
              "flex h-11 w-11 items-center justify-center rounded-xl border border-surface-border bg-white/[0.03]",
              service.highlight && "border-neon-purple/50 bg-neon-purple/10"
            )}
          >
            <Icon
              className={cn(
                "h-5 w-5 text-cyan-blue",
                service.highlight && "text-neon-purple"
              )}
            />
          </div>
          <span className="text-xs font-mono text-muted-foreground/70">
            {service.number}
          </span>
        </div>

        <h3 className="mt-4 text-lg font-semibold text-foreground">
          {service.title}
        </h3>
        <p className="mt-2 text-sm text-muted-foreground">
          {service.description}
        </p>

        <ul className="mt-4 grid grid-cols-1 gap-1.5 sm:grid-cols-2">
          {service.features.slice(0, 4).map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-1.5 text-xs text-foreground/75"
            >
              <Check className="mt-0.5 h-3 w-3 shrink-0 text-cyan-blue" />
              {feature}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap gap-1.5 border-t border-surface-border pt-4">
          {service.highlights.slice(0, 5).map((item) => (
            <span
              key={item}
              className="rounded-md bg-white/[0.03] px-2 py-1 text-[11px] text-muted-foreground"
            >
              {item}
            </span>
          ))}
        </div>
      </Card>
    </article>
  );
}
