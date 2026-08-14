import { AiIntegrationAccordion } from "@/features/services/components/AiIntegrationAccordion";
import { ServicesGrid } from "@/features/services/components/ServicesGrid";
import { ContactSection } from "@/features/contact/components/ContactSection";
import { GuaranteesGrid } from "@/features/guarantees/components/GuaranteesGrid";
import { HeroSection } from "@/features/hero/components/HeroSection";
import { IndustriesGrid } from "@/features/industries/components/IndustriesGrid";
import { ProcessTimeline } from "@/features/process/components/ProcessTimeline";
import { TechStackGrid } from "@/features/tech-stack/components/TechStackGrid";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesGrid />
      <IndustriesGrid />
      <AiIntegrationAccordion />
      <TechStackGrid />
      <ProcessTimeline />
      <GuaranteesGrid />
      <ContactSection />
    </>
  );
}
