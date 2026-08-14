import { MetadataRoute } from "next";
import { PROJECTS_DATA } from "@/data/projectsData";
import { BLOG_POSTS } from "@/data/blogData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://buildnestnagpur.com";

  // Static routes (including new local landing and service routes)
  const staticPaths = [
    "",
    "/about",
    "/contact",
    "/services",
    "/projects",
    "/blog",
    "/architects-in-nagpur",
    "/architecture",
    "/interior-design",
    "/turnkey-construction",
    "/villa-design",
  ];

  const staticUrls = staticPaths.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1.0 : 0.8,
  }));

  // Dynamic projects routes
  const projectUrls = Object.keys(PROJECTS_DATA).map((slug) => ({
    url: `${baseUrl}/projects/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Dynamic blogs routes
  const blogUrls = BLOG_POSTS.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticUrls, ...projectUrls, ...blogUrls];
}
