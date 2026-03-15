import dynamic from "next/dynamic";
import { HeroSection } from "@/components/sections/HeroSection";

const ClientStrip = dynamic(
  () => import("@/components/sections/ClientStrip").then((m) => ({ default: m.ClientStrip })),
  { ssr: true }
);

const SectionDivider = dynamic(
  () => import("@/components/sections/SectionDivider").then((m) => ({ default: m.SectionDivider })),
  { ssr: true }
);

const ServiceGrid = dynamic(
  () => import("@/components/sections/ServiceGrid").then((m) => ({ default: m.ServiceGrid })),
  { ssr: true }
);

const ProcessTimeline = dynamic(
  () => import("@/components/sections/ProcessTimeline").then((m) => ({ default: m.ProcessTimeline })),
  { ssr: true }
);

const WhyCactus = dynamic(
  () => import("@/components/sections/WhyCactus").then((m) => ({ default: m.WhyCactus })),
  { ssr: true }
);

const TechStack = dynamic(
  () => import("@/components/sections/TechStack").then((m) => ({ default: m.TechStack })),
  { ssr: true }
);

const LocationSection = dynamic(
  () => import("@/components/sections/LocationSection").then((m) => ({ default: m.LocationSection })),
  { ssr: true }
);

const CTASection = dynamic(
  () => import("@/components/sections/CTASection").then((m) => ({ default: m.CTASection })),
  { ssr: true }
);

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
