import {
  buildOrganizationSchema,
  buildProductSchema,
  buildFAQSchema,
} from "@/lib/seo/schema";
import { faqItems } from "@/content/faq";

export function JsonLd() {
  const organization = buildOrganizationSchema();
  const productList = buildProductSchema();
  const faq = buildFAQSchema(
    faqItems.map((item) => ({ question: item.question, answer: item.answer }))
  );

  const graph = {
    "@context": "https://schema.org",
    "@graph": [organization, productList, faq],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
