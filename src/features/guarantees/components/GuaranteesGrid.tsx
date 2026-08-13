import { Card, CardGlow } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { guarantees, guaranteesCopy } from "@/features/guarantees/data/guarantees-data";

// Server Component: ver la nota en ServiceCard.tsx sobre `animate-fade-up`
// vs. framer-motion `whileInView`.
export function GuaranteesGrid() {
  return (
    <section id="mantenimiento" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow={guaranteesCopy.eyebrow}
          title={guaranteesCopy.title}
          description={guaranteesCopy.description}
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {guarantees.map((item, index) => (
            <article
              key={item.title}
              style={{ animationDelay: `${index * 0.08}s` }}
              className="animate-fade-up"
            >
              <Card className="flex h-full min-h-60 flex-col p-6 transition-all duration-200 hover:scale-[1.01] hover:border-slate-700">
                <CardGlow />
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-surface-border bg-white/[0.03]">
                    <item.icon className="h-5 w-5 text-amber-orange" />
                  </div>
                  <span className="text-2xl font-bold text-gradient-brand">
                    {item.metric}
                  </span>
                </div>
                <h3 className="mt-4 text-base font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {item.description}
                </p>
              </Card>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
