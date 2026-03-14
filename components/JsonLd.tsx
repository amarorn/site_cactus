import { company } from "@/content/company";
import { contact } from "@/content/contact";
import { seo } from "@/content/seo";

export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: company.name,
    description: company.shortDescription,
    url: seo.siteUrl,
    email: contact.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: company.location.city,
      addressRegion: company.location.state,
    },
    areaServed: "BR",
    serviceType: [
      "Desenvolvimento de software",
      "Engenharia de dados",
      "Arquitetura de dados",
      "Analytics",
      "Inteligência artificial",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
