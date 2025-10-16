// src/app/sitemap.xml/route.ts
import { projects } from "@/app/Lib/projectData";

export async function GET() {
  const BASE_URL = "https://kojilab.vercel.app";

  const urls = [
    {
      loc: `${BASE_URL}/`,
      lastmod: new Date().toISOString(),
      changefreq: "weekly",
      priority: 1.0,
    },
    ...projects.map((p) => ({
      loc: `${BASE_URL}/projects/${p.slug}`,
      lastmod: new Date().toISOString(),
      changefreq: "weekly",
      priority: 0.8,
    })),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `<url>
  <loc>${u.loc}</loc>
  <lastmod>${u.lastmod}</lastmod>
  <changefreq>${u.changefreq}</changefreq>
  <priority>${u.priority}</priority>
</url>`
  )
  .join("\n")}
</urlset>`;

  return new Response(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "max-age=0, s-maxage=3600",
    },
  });
}
