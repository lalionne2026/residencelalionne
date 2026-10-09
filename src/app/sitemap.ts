import type { MetadataRoute } from "next";
import { appartements } from "@/content/appartements";
import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/appartements", "/infos-pratiques", "/contact"];
  return [
    ...pages.map((p) => ({ url: `${site.url}${p}` })),
    ...appartements.map((a) => ({ url: `${site.url}/appartements/${a.slug}` })),
  ];
}
