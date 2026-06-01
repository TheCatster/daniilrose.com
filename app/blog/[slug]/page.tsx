import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";
import { Mdx } from "@/lib/mdx";
import { PostDate } from "@/components/post-date";
import { getAllPostsMeta, getPost, getPostSlugs } from "@/lib/content";

export const revalidate = 3600;
export const dynamicParams = true;

export async function generateStaticParams() {
  const slugs = await getPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <article>
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-sm text-muted transition hover:text-accent"
      >
        <FiArrowLeft size={16} /> All writing
      </Link>

      <header className="mb-8 mt-4">
        <h1 className="font-serif text-4xl font-semibold tracking-tight">
          {post.title}
        </h1>
        {post.subtitle && (
          <p className="mt-2 text-xl text-muted">{post.subtitle}</p>
        )}
        <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1">
          <PostDate date={post.date} />
          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span key={tag} className="text-xs text-accent">
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </header>

      <div className="prose-article prose max-w-none dark:prose-invert">
        <Mdx source={post.content} />
      </div>

      <footer className="mt-12 border-t border-border pt-6 text-center text-sm text-muted">
        &copy; {new Date(post.date).getFullYear()} Daniil Rose. All rights
        reserved.
      </footer>
    </article>
  );
}
