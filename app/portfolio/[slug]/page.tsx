import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getProjectBySlug,
  getAllSlugs,
  portfolioProjects,
} from "@/data/portfolio";
import { PortfolioPage } from "@/components/portfolio/PortfolioPage";

const BASE_URL = "https://cactussystems.com.br";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Projeto não encontrado" };

  const title = `${project.title} | Portfólio Cactus System`;
  const description =
    project.description.length > 160
      ? project.description.slice(0, 157) + "..."
      : project.description;
  const url = `${BASE_URL}/portfolio/${project.slug}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      type: "article",
      images: project.image ? [{ url: project.image, width: 800, height: 500 }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

function buildProjectSchema(project: (typeof portfolioProjects)[number]) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.description,
    url: `${BASE_URL}/portfolio/${project.slug}`,
    image: project.image,
    genre: project.category,
    keywords: project.technologies.join(", "),
  };
}

export default async function PortfolioProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const schema = buildProjectSchema(project);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <PortfolioPage project={project} />
    </>
  );
}
