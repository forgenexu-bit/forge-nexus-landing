import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/features/services/components/ServiceCard";
import { services, servicesCopy } from "@/features/services/data/services-data";

export function ServicesGrid() {
  return (
    <section id="soluciones" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow={servicesCopy.eyebrow}
          title={servicesCopy.title}
          description={servicesCopy.description}
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
