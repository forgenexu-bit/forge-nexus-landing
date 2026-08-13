import { SectionHeading } from "@/components/ui/SectionHeading";
import { DemoCard } from "@/features/showcase/components/DemoCard";
import { demos, showcaseCopy } from "@/features/showcase/data/demos-data";

export function DemosGrid() {
  return (
    <section id="demos" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow={showcaseCopy.eyebrow}
          title={showcaseCopy.title}
          description={showcaseCopy.description}
        />

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
          {demos.map((demo, index) => (
            <DemoCard key={demo.id} demo={demo} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
