import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://unihero.uz";
  return [
    { url: `${base}/`, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/about` },
    { url: `${base}/resources` },
    { url: `${base}/events` },
    { url: `${base}/contact` },
    { url: `${base}/motivation` },
  ];
}
