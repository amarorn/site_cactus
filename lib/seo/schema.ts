import { company } from "@/content/company";
import { contact } from "@/content/contact";
import { seo } from "@/content/seo";
import { homeServices } from "@/content/services";

type FAQItem = { question: string; answer: string };

export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${seo.siteUrl}/#organization`,
    name: company.name,
    description: company.shortDescription,
    url: seo.siteUrl,
    logo: `${seo.siteUrl}/brand/logo-primary.svg`,
    email: contact.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: company.location.city,
      addressRegion: company.location.state,
      addressCountry: "BR",
    },
    areaServed: {
      "@type": "Country",
      name: "Brasil",
    },
    sameAs: seo.social.linkedin ? [seo.social.linkedin] : undefined,
  };
}

export function buildProductSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Serviços Cactus System",
    description: "Desenvolvimento de software, engenharia de dados e IA.",
    numberOfItems: homeServices.length,
    itemListElement: homeServices.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Product",
        "@id": `${seo.siteUrl}/servicos#${s.id}`,
        name: s.title,
        description: s.description,
        provider: { "@id": `${seo.siteUrl}/#organization` },
      },
    })),
  };
}

export function buildFAQSchema(items: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function buildArticleSchema(params: {
  headline: string;
  description: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
  author?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: params.headline,
    description: params.description,
    url: params.url,
    datePublished: params.datePublished,
    dateModified: params.dateModified ?? params.datePublished,
    author: params.author
      ? { "@type": "Organization", name: params.author }
      : { "@type": "Organization", name: company.name },
    publisher: { "@id": `${seo.siteUrl}/#organization` },
  };
}

export function buildReviewSchema(params: {
  itemName: string;
  author: string;
  reviewBody: string;
  ratingValue: number;
  bestRating?: number;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: {
      "@type": "Product",
      name: params.itemName,
    },
    author: { "@type": "Person", name: params.author },
    reviewBody: params.reviewBody,
    reviewRating: {
      "@type": "Rating",
      ratingValue: params.ratingValue,
      bestRating: params.bestRating ?? 5,
    },
  };
}
