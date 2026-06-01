import { execFileSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import matter from "gray-matter";

const POSTS_DIR = path.join(process.cwd(), "posts");
const OUT_DIR = path.join(process.cwd(), "content", "blog");
const DOLLAR = "@@DOLLARSIGN@@";

fs.mkdirSync(OUT_DIR, { recursive: true });

const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith(".org"));

for (const file of files) {
  const slug = file.replace(/\.org$/, "");
  const raw = fs.readFileSync(path.join(POSTS_DIR, file), "utf8");
  const { data, content } = matter(raw);

  // Convert LaTeX equation environments to \[ \] so pandoc's org reader treats
  // them as display math (otherwise raw LaTeX environments are dropped).
  let body = content
    .replace(/\\begin\{equation\}/g, "\\[")
    .replace(/\\end\{equation\}/g, "\\]");

  // Protect literal dollar signs (money) so remark-math does not treat them as
  // delimiters. Equations use \[ \], never $, so this is safe.
  const protectedBody = body.replaceAll("$", DOLLAR);

  const tmp = path.join(os.tmpdir(), `${slug}.org`);
  fs.writeFileSync(tmp, protectedBody);

  let md = execFileSync(
    "pandoc",
    [
      "-f",
      "org",
      "-t",
      "gfm+tex_math_dollars-autolink_bare_uris",
      "--wrap=none",
      tmp,
    ],
    { encoding: "utf8" },
  );
  fs.unlinkSync(tmp);

  // Restore protected dollars as escaped literals for MDX/remark-math.
  md = md.replaceAll(DOLLAR, "\\$");

  // pandoc emits absolute image paths as file:// URIs; make them site-relative.
  md = md.replaceAll("file://", "");

  // Convert GFM ```math fences into $$ blocks that remark-math understands.
  md = md.replace(/```+\s*math\s*\n([\s\S]*?)\n```+/g, (_, eq) => `$$\n${eq.trim()}\n$$`);

  // MDX cannot parse <url> autolinks; rewrite them as explicit markdown links.
  md = md.replace(/<((?:https?:\/\/)[^>\s]+)>/g, "[$1]($1)");

  // MDX requires void HTML elements to be self-closing.
  md = md.replace(/<br\s*\/?>/gi, "<br />");

  const fm = {
    title: data.title ?? slug,
    subtitle: data.subtitle ?? "",
    date: data.date ?? "1970-01-01",
    description: data.description ?? "",
    tags: Array.isArray(data.tags) ? data.tags : [],
  };

  const frontmatter =
    "---\n" +
    `title: ${JSON.stringify(fm.title)}\n` +
    `subtitle: ${JSON.stringify(fm.subtitle)}\n` +
    `date: ${JSON.stringify(fm.date)}\n` +
    `description: ${JSON.stringify(fm.description)}\n` +
    `tags: [${fm.tags.map((t) => JSON.stringify(t)).join(", ")}]\n` +
    "---\n\n";

  fs.writeFileSync(path.join(OUT_DIR, `${slug}.mdx`), frontmatter + md.trim() + "\n");
  console.log(`converted ${file} -> content/blog/${slug}.mdx`);
}
