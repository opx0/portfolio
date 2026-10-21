import type { MetadataRoute } from "next";
import { projects } from "./data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://www.opxz.dev", priority: 1 },
    { url: "https://www.opxz.dev/resume", priority: 0.8 },
    ...projects.map(({ slug }) => ({ url: `https://www.opxz.dev/work/${slug}`, priority: 0.7 })),
  ];
}
