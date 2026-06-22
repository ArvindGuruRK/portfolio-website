import type { MetadataRoute } from "next";
import { allPosts } from "content-collections";
import { DATA } from "@/data/resume";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = DATA.url.replace(/\/$/, "");

  // Base routes
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
  ];

  // Blog posts
  const blogPosts = allPosts.map((post) => {
    const slug = post._meta.path.replace(/\.mdx$/, "");
    return {
      url: `${baseUrl}/blog/${slug}`,
      lastModified: new Date(post.publishedAt || new Date()),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    };
  });

  return [...routes, ...blogPosts];
}
