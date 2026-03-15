import { MetadataRoute } from "next";
import { seo } from "@/content/seo";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = seo.siteUrl;
  const routes = [
    "",
    "/servicos",
    "/solucoes",
    "/clientes",
    "/sobre",
    "/contato",
    "/privacidade",
  ];

  return routes.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
}
