# `daniilrose.com`

My personal website: about me, CV, and writing. Built to be minimal, fast, and
easy to keep up to date.

## Stack

- [Next.js](https://nextjs.org) 15 (App Router) + React 19, TypeScript
- [Tailwind CSS](https://tailwindcss.com) v4 with design tokens and class-based
  light/dark themes ([`next-themes`](https://github.com/pacocoursey/next-themes))
- Blog rendered from MDX at runtime via
  [`next-mdx-remote`](https://github.com/hashicorp/next-mdx-remote) with KaTeX
  math and syntax highlighting
- Content validated with [zod](https://zod.dev)

## Architecture: content vs. code

Everything you edit to update the site lives in [`content/`](content). The code
reads it at runtime, so **updating content does not require rebuilding the
Docker image**.

```
content/
  site.json        # name, nav, socials, email, analytics
  home.json        # profile image + membership badges
  about.mdx        # homepage bio (supports links/formatting)
  interests.json   # interest groups shown on the homepage
  cv.json          # education, experience, publications, honors, skills
  blog/*.mdx       # blog posts (frontmatter + body)
```

Each loader in [`lib/content.ts`](lib/content.ts) validates its file against a
schema in [`types/content.ts`](types/content.ts), so a malformed edit fails
loudly instead of silently breaking the page.

### How updates reach the live site without a rebuild

The production image is built once as a Next.js
[standalone server](https://nextjs.org/docs/app/api-reference/config/next-config-js/output).
`content/` is mounted as a Docker volume, and pages use Incremental Static
Regeneration (`revalidate = 3600`). To update the site:

1. Edit the files under `content/` (on the host, or wherever the volume lives).
2. Either wait for the revalidation window, or trigger it immediately:

   ```bash
   curl -X POST "https://www.daniilrose.com/api/revalidate?path=/blog&token=$REVALIDATE_TOKEN"
   ```

   Omit `path` (or use `/`) to refresh the whole site. New blog posts work too,
   because `/blog/[slug]` allows dynamic params.

Only actual code or design changes require rebuilding the image.

## Local development

```bash
pnpm install
pnpm dev
```

Then open http://localhost:3000.

Useful scripts:

- `pnpm build` — production build (standalone output)
- `pnpm start` — run the production build locally
- `pnpm lint` — lint

## Blog authoring

Posts are MDX files in `content/blog/` with frontmatter:

```mdx
---
title: "Post Title"
subtitle: "Optional subtitle"
date: "2025-07-31"
description: "One-line summary used on the listing and for SEO."
tags: ["tag-one", "tag-two"]
---

Body in MDX. Supports GitHub-flavored Markdown, `$math$` / `$$display math$$`
(KaTeX), and fenced code blocks with syntax highlighting.
```

Legacy Emacs `org-mode` posts (kept in the `posts/` submodule) can be converted
to MDX with [`scripts/convert-posts.mjs`](scripts/convert-posts.mjs):

```bash
node scripts/convert-posts.mjs   # requires pandoc
```

## Deployment

```bash
cp .env.example .env   # set a real REVALIDATE_TOKEN
docker compose up -d --build
```

The site is served on port `8992` (mapped to the container's `3000`). The
`content/` directory is mounted read-only into the container.
