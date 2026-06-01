import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import Link from "next/link";
import type { ComponentProps } from "react";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeHighlight from "rehype-highlight";

const components = {
  a({ href = "#", children, ...props }: ComponentProps<"a">) {
    const external = href.startsWith("http");
    return (
      <Link
        href={href}
        className="text-accent underline-offset-2 hover:underline"
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...props}
      >
        {children}
      </Link>
    );
  },
  img({ src, alt }: ComponentProps<"img">) {
    if (typeof src !== "string") return null;
    return (
      <span className="my-6 flex justify-center">
        <Image
          src={src}
          alt={alt ?? ""}
          width={800}
          height={500}
          className="h-auto w-auto max-w-full rounded-lg"
        />
      </span>
    );
  },
  table({ children }: ComponentProps<"table">) {
    return (
      <div className="my-6 overflow-x-auto">
        <table className="w-full border-collapse text-sm">{children}</table>
      </div>
    );
  },
};

export function Mdx({ source }: { source: string }) {
  return (
    <MDXRemote
      source={source}
      components={components}
      options={{
        mdxOptions: {
          remarkPlugins: [remarkGfm, remarkMath],
          rehypePlugins: [rehypeKatex, rehypeHighlight],
        },
      }}
    />
  );
}
