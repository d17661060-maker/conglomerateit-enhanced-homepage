import type { MetadataRoute } from "next";

const routes = [
  "",
  "/about",
  "/services",
  "/solutions",
  "/delivery-models",
  "/case-studies",
  "/gcc",
  "/executive-hiring",
  "/insights",
  "/insights/blog",
  "/insights/careers",
  "/contact",
  "/legal",
  "/legal/privacy-policy",
  "/legal/terms-of-use",
  "/legal/legal-info",
  "/legal/compliance",
  "/legal/acceptable-use",
  "/services/qa-qe",
  "/services/infrastructure",
  "/services/software-development",
  "/services/business-transformation",
  "/services/data-analytics",
  "/services/ai-first",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://conglomerateit.com";
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.includes("legal") ? 0.4 : 0.8,
  }));
}
