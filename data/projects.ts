import type { Project } from "@/types";

export type { Project };

export const projects: Project[] = [
  {
    id: "digital-analytics-platform",
    title: "Digital Analytics Platform",
    description:
      "Cloud-native platform for ingesting and analyzing large-scale digital interaction data.",
    category: "Data Platform",
    technologies: ["Node.js", "React", "Kubernetes", "Terraform", "Docker"],
    highlights: [
      "Ingestão em escala",
      "Analytics em tempo real",
      "Arquitetura cloud-native",
    ],
    slug: "digital-analytics-platform",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  },
  {
    id: "document-intelligence-system",
    title: "Document Intelligence System",
    description:
      "Automated document processing platform using OCR and structured data extraction.",
    category: "AI",
    technologies: ["Python", "OCR", "Data Pipelines"],
    highlights: [
      "OCR e extração estruturada",
      "Pipelines automatizados",
      "Processamento em lote",
    ],
    slug: "document-intelligence-system",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80",
  },
  {
    id: "computer-vision-platform",
    title: "Computer Vision Platform",
    description:
      "AI system for automated vehicle license plate recognition.",
    category: "AI",
    technologies: ["Python", "Computer Vision", "Machine Learning"],
    highlights: [
      "Reconhecimento de placas",
      "Modelos de visão computacional",
      "Deploy em produção",
    ],
    slug: "computer-vision-platform",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
  },
  {
    id: "mobile-operations-app",
    title: "Mobile Operations App",
    description:
      "Cross-platform mobile application for operational management.",
    category: "Mobile",
    technologies: ["Flutter", "REST APIs"],
    highlights: [
      "App multiplataforma",
      "Integração com APIs",
      "Gestão operacional",
    ],
    slug: "mobile-operations-app",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
  },
];
