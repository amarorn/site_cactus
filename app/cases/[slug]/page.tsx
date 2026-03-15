import type { Metadata } from "next";
import { notFound } from "next/navigation";
import dynamic from "next/dynamic";
import {
  getCaseStudyBySlug,
  getAllCaseStudySlugs,
} from "@/content/case-studies";
import { CaseStudyHero } from "@/components/case-study/CaseStudyHero";
import { CaseChallenge } from "@/components/case-study/CaseChallenge";
import { CaseSolution } from "@/components/case-study/CaseSolution";
import { CaseArchitectureDiagram } from "@/components/case-study/CaseArchitectureDiagram";
import { CaseMetrics } from "@/components/case-study/CaseMetrics";
import { CaseTimeline } from "@/components/case-study/CaseTimeline";
import { CaseTestimonial } from "@/components/case-study/CaseTestimonial";

const SectionDivider = dynamic(
  () => import("@/components/sections/SectionDivider").then((m) => ({ default: m.SectionDivider })),
  { ssr: true }
);
const CTASection = dynamic(
  () => import("@/components/sections/CTASection").then((m) => ({ default: m.CTASection })),
  { ssr: true }
);

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllCaseStudySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);
  if (!caseStudy) return { title: "Case não encontrado" };
  return {
    title: `${caseStudy.client} | Case | Cactus System`,
    description: `${caseStudy.client} – ${caseStudy.challenge.slice(0, 140)}...`,
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);
  if (!caseStudy) notFound();

  return (
    <div className="bg-white dark:bg-graphite">
      <CaseStudyHero caseStudy={caseStudy} />
      <SectionDivider variant="organic" className="text-white dark:text-graphite" />

      <CaseChallenge caseStudy={caseStudy} />
      <SectionDivider variant="wave" className="text-graphite" />

      <CaseSolution caseStudy={caseStudy} />

      {caseStudy.architecture && (
        <>
          <SectionDivider variant="blob" flip className="text-light-gray dark:text-graphite/50" />
          <CaseArchitectureDiagram caseStudy={caseStudy as typeof caseStudy & { architecture: NonNullable<typeof caseStudy.architecture> }} />
        </>
      )}

      {caseStudy.metrics && caseStudy.metrics.length > 0 && (
        <>
          <SectionDivider variant="wave" className="text-graphite" />
          <CaseMetrics caseStudy={caseStudy as typeof caseStudy & { metrics: NonNullable<typeof caseStudy.metrics> }} />
        </>
      )}

      {caseStudy.timeline && caseStudy.timeline.length > 0 && (
        <>
          <SectionDivider variant="organic" flip className="text-graphite" />
          <CaseTimeline caseStudy={caseStudy as typeof caseStudy & { timeline: NonNullable<typeof caseStudy.timeline> }} />
        </>
      )}

      {caseStudy.testimonial && (
        <>
          <SectionDivider variant="blob" className="text-light-gray dark:text-graphite/50" />
          <CaseTestimonial caseStudy={caseStudy as typeof caseStudy & { testimonial: NonNullable<typeof caseStudy.testimonial> }} />
        </>
      )}

      <SectionDivider variant="wave" className="text-graphite" />
      <CTASection
        title="Quer resultados como esses?"
        subtitle="Converse com nossa equipe e veja como podemos ajudar no seu próximo projeto."
        primaryLabel="Falar com especialistas"
        secondaryLabel="Ver todos os cases"
        secondaryHref="/clientes"
      />
    </div>
  );
}
