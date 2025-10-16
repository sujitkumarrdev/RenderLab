import { MetadataRoute } from "next";
import { projects } from "@/app/Lib/projectData";

const BASE_URL = "https://kojilab.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // Homepage
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,  
      priority: 1.0,
    },
    // Projects
    ...projects.map((project) => ({
      url: `${BASE_URL}/projects/${project.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,  
      priority: 0.8,
    })),
  ];
}
