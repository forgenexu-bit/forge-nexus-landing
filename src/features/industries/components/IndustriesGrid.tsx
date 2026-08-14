import { Card, CardGlow } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { industries, industriesCopy } from "@/features/industries/data/industries-data";

// Server Component: ver la nota en ServiceCard.tsx sobre `animate-fade-up`
// (CSS) en vez de framer-motion `whileInView`.
export function IndustriesGrid() {
  return (
    <section id="industrias" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow={industriesCopy.eyebrow}
          title={industriesCopy.title}
          description={industriesCopy.description}
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, index) => (
            <article
              key={industry.id}
              style={{ animationDelay: `${(index % 3) * 0.08}s` }}
              className="animate-fade-up"
            >
              <Card className="flex h-full flex-col gap-3 p-6">
                <CardGlow />
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-surface-border bg-white/[0.03]">
                  <industry.icon className="h-5 w-5 text-cyan-blue" />
                </div>
                <h3 className="text-base font-semibold text-foreground">
                  {industry.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {industry.description}
                </p>
              </Card>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
