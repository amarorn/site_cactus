import { HeroSection } from "@/components/sections/HeroSection";
import { ClientStrip } from "@/components/sections/ClientStrip";
import { ServiceGrid } from "@/components/sections/ServiceGrid";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { WhyCactus } from "@/components/sections/WhyCactus";
import { TechStack } from "@/components/sections/TechStack";
import { LocationSection } from "@/components/sections/LocationSection";
import { CTASection } from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ClientStrip />
      <ServiceGrid />
      <ProcessTimeline />
      <WhyCactus />
      <TechStack />
      <LocationSection />
      <CTASection
        title="Pronto para começar?"
        subtitle="Converse com nossa equipe e veja como podemos ajudar no seu próximo projeto."
        primaryLabel="Falar com especialistas"
        secondaryLabel="Ver serviços"
      />
    </>
  );
}
