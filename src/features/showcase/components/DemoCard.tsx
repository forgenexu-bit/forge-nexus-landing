import { Card, CardGlow } from "@/components/ui/Card";
import { TechPill } from "@/features/showcase/components/TechPill";
import type { DemoItem } from "@/features/showcase/data/demos-data";

// Server Component: ver la nota en ServiceCard.tsx sobre por qué usamos
// `animate-fade-up` (CSS) en vez de framer-motion `whileInView` aquí.
export function DemoCard({ demo, index }: { demo: DemoItem; index: number }) {
  const Icon = demo.icon;

  return (
    <article
      style={{ animationDelay: `${index * 0.08}s` }}
      className="animate-fade-up"
    >
      <Card className="flex h-full flex-col p-6">
        <CardGlow />
        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-surface-border bg-white/[0.03]">
          <Icon className="h-5 w-5 text-fire-orange" />
        </div>

        <span className="mt-4 text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
          {demo.category}
        </span>
        <h3 className="mt-1.5 text-lg font-semibold text-foreground">
          {demo.title}
        </h3>
        <p className="mt-2 text-sm text-muted-foreground">
          {demo.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-1.5 border-t border-surface-border pt-4">
          {demo.tech.map((tech) => (
            <TechPill key={tech} label={tech} />
          ))}
        </div>
      </Card>
    </article>
  );
}
