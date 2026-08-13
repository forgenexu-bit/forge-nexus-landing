import { SectionHeading } from "@/components/ui/SectionHeading";
import { StepCard } from "@/features/process/components/StepCard";
import { processCopy, processSteps } from "@/features/process/data/process-data";

export function ProcessTimeline() {
  return (
    <section id="proceso" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow={processCopy.eyebrow}
          title={processCopy.title}
          description={processCopy.description}
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {processSteps.map((step, index) => (
            <StepCard key={step.number} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
