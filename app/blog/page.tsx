import type { Metadata } from "next";
import Link from "next/link";
import { PostDate } from "@/components/post-date";
import { getAllPostsMeta } from "@/lib/content";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Daniil Rose's writing on science and technology policy, higher education, computing, and whatever else comes to mind.",
};

export default async function BlogPage() {
  const posts = await getAllPostsMeta();

  return (
    <div>
      <header className="mb-10">
        <h1 className="font-serif text-4xl font-semibold tracking-tight">
          Regressions
        </h1>
        <p className="mt-3 max-w-prose text-muted">
          Comments on current issues in science and technology policy, higher
          education, computing, and whatever else comes to mind.
        </p>
      </header>

      {posts.length === 0 ? (
        <p className="text-muted">No posts yet. Check back soon.</p>
      ) : (
        <ul className="space-y-3">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="block rounded-xl border border-border bg-surface p-5 transition hover:border-accent"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                  <h2 className="font-serif text-xl font-semibold text-fg">
                    {post.title}
                  </h2>
                  <PostDate date={post.date} />
                </div>
                {post.subtitle && (
                  <p className="mt-1 text-fg/80">{post.subtitle}</p>
                )}
                {post.description && (
                  <p className="mt-2 text-sm text-muted">{post.description}</p>
                )}
                {post.tags.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span key={tag} className="text-xs text-accent">
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
