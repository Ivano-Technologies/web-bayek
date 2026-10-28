import type { MetadataRoute } from "next";

const base = "https://bayek.org";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: base, changeFrequency: "monthly", priority: 1 },
    {
      url: `${base}/integrated-services`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    { url: `${base}/construction`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/contact`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/privacy`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/terms`, changeFrequency: "yearly", priority: 0.3 },
  ];
}
