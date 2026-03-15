import { HeroSection } from "@/components/sections/HeroSection";
import { ClientStrip } from "@/components/sections/ClientStrip";
import { ServiceGrid } from "@/components/sections/ServiceGrid";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { WhyCactus } from "@/components/sections/WhyCactus";
import { TechStack } from "@/components/sections/TechStack";
import { LocationSection } from "@/components/sections/LocationSection";
import { CTASection } from "@/components/sections/CTASection";
import { SectionDivider } from "@/components/sections/SectionDivider";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ClientStrip />
      <SectionDivider variant="organic" className="text-white dark:text-graphite" />
      <ServiceGrid />
      <SectionDivider variant="cactus-curve" flip className="text-light-gray dark:text-graphite/50" />
      <ProcessTimeline />
      <SectionDivider variant="wave" className="text-white dark:text-graphite" />
      <WhyCactus />
      <SectionDivider variant="organic" flip className="text-graphite" />
      <TechStack />
      <SectionDivider variant="cactus-curve" className="text-white dark:text-graphite" />
      <LocationSection />
      <SectionDivider variant="organic" flip className="text-graphite" />
      <CTASection
        title="Pronto para começar?"
        subtitle="Converse com nossa equipe e veja como podemos ajudar no seu próximo projeto."
        primaryLabel="Falar com especialistas"
        secondaryLabel="Ver serviços"
      />
    </>
  );
}
