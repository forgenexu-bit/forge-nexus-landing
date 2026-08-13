import { SectionHeading } from "@/components/ui/SectionHeading";
import { stackCopy, techPillars } from "@/features/tech-stack/data/stack-data";

// Server Component: ver la nota en ServiceCard.tsx sobre `animate-fade-up`
// (CSS) en vez de framer-motion `whileInView`.
export function TechStackGrid() {
  return (
    <section id="stack" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow={stackCopy.eyebrow}
          title={stackCopy.title}
          description={stackCopy.description}
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {techPillars.map((pillar, index) => (
            <article
              key={pillar.id}
              style={{ animationDelay: `${index * 0.08}s` }}
              className="animate-fade-up flex flex-col gap-4 rounded-2xl border border-surface-border bg-surface/90 p-6"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-surface-border bg-white/[0.03]">
                <pillar.icon className="h-5 w-5 text-cyan-blue" />
              </div>
              <h3 className="text-base font-semibold text-foreground">
                {pillar.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {pillar.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
