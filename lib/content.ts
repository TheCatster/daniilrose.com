import "server-only";
import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import { z } from "zod";
import {
  cvSchema,
  homeSchema,
  interestGroupSchema,
  postFrontmatterSchema,
  siteSchema,
  type CV,
  type HomeConfig,
  type InterestGroup,
  type Post,
  type PostMeta,
  type SiteConfig,
} from "@/types/content";

/**
 * Root of the editable content tree. Override with the CONTENT_DIR env var so a
 * mounted Docker volume can supply content without rebuilding the image.
 */
const CONTENT_DIR = process.env.CONTENT_DIR
  ? path.resolve(process.env.CONTENT_DIR)
  : path.join(process.cwd(), "content");

const BLOG_DIR = path.join(CONTENT_DIR, "blog");

async function readJson<S extends z.ZodTypeAny>(
  file: string,
  schema: S,
): Promise<z.infer<S>> {
  const raw = await fs.readFile(path.join(CONTENT_DIR, file), "utf8");
  const parsed = schema.safeParse(JSON.parse(raw));
  if (!parsed.success) {
    const details = parsed.error.issues
      .map((i) => `  - ${i.path.join(".") || "(root)"}: ${i.message}`)
      .join("\n");
    throw new Error(`Invalid content in ${file}:\n${details}`);
  }
  return parsed.data;
}

export function getSiteConfig(): Promise<SiteConfig> {
  return readJson("site.json", siteSchema);
}

export function getHomeConfig(): Promise<HomeConfig> {
  return readJson("home.json", homeSchema);
}

export function getInterests(): Promise<InterestGroup[]> {
  return readJson("interests.json", z.array(interestGroupSchema));
}

export function getCV(): Promise<CV> {
  return readJson("cv.json", cvSchema);
}

export async function getAbout(): Promise<string> {
  const raw = await fs.readFile(path.join(CONTENT_DIR, "about.mdx"), "utf8");
  return matter(raw).content;
}

async function listPostFiles(): Promise<string[]> {
  try {
    const files = await fs.readdir(BLOG_DIR);
    return files.filter((f) => f.endsWith(".mdx") || f.endsWith(".md"));
  } catch {
    return [];
  }
}

export async function getPostSlugs(): Promise<string[]> {
  const files = await listPostFiles();
  return files.map((f) => f.replace(/\.mdx?$/, ""));
}

export async function getPost(slug: string): Promise<Post | null> {
  for (const ext of [".mdx", ".md"]) {
    try {
      const raw = await fs.readFile(path.join(BLOG_DIR, `${slug}${ext}`), "utf8");
      const { content, data } = matter(raw);
      const fm = postFrontmatterSchema.parse(data);
      return { ...fm, slug, content };
    } catch {
      // try next extension
    }
  }
  return null;
}

export async function getAllPostsMeta(): Promise<PostMeta[]> {
  const slugs = await getPostSlugs();
  const posts = await Promise.all(slugs.map((slug) => getPost(slug)));
  return posts
    .filter((p): p is Post => p !== null)
    .map(({ content: _content, ...meta }) => meta)
    .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
}
