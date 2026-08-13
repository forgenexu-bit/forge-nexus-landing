import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/features/contact/components/ContactForm";
import { DirectContactCard } from "@/features/contact/components/DirectContactCard";
import { contactCopy } from "@/features/contact/data/contact-info";

export function ContactSection() {
  return (
    <section id="contacto" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          eyebrow={contactCopy.eyebrow}
          title={contactCopy.title}
          description={contactCopy.description}
          align="left"
        />

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
          <div className="lg:col-span-2">
            <DirectContactCard />
          </div>
        </div>
      </div>
    </section>
  );
}
