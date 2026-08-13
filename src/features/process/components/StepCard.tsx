import type { ProcessStep } from "@/features/process/data/process-data";

// Server Component: ver la nota en ServiceCard.tsx sobre por qué usamos
// `animate-fade-up` (CSS) en vez de framer-motion `whileInView` aquí. El
// fondo también pasa de `backdrop-blur` a un tono casi opaco por costo de
// scroll (misma razón que en components/ui/Card.tsx).
export function StepCard({ step, index }: { step: ProcessStep; index: number }) {
  const Icon = step.icon;

  return (
    <div
      style={{ animationDelay: `${index * 0.08}s` }}
      className="animate-fade-up relative flex flex-col gap-4 rounded-2xl border border-surface-border bg-surface/90 p-6"
    >
      <div className="flex items-center justify-between">
        <span className="text-2xl font-bold text-gradient-brand">
          {step.number}
        </span>
        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-surface-border bg-white/[0.03]">
          <Icon className="h-4.5 w-4.5 text-cyan-blue" />
        </div>
      </div>
      <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
      <p className="text-sm text-muted-foreground">{step.description}</p>
    </div>
  );
}
