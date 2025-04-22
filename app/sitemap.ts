import { getBlogPosts } from "app/pages/utils";

export const baseUrl = "https://kalinpatel.me";

export default async function sitemap() {
  let blogs = getBlogPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  let routes = ["", "/guac"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  // return [...routes, ...blogs];
  return [...routes];
}
