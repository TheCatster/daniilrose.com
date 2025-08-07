import Layout from "@/components/layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { getAllPostIds, getPostData } from "@/lib/posts";
import Date from "@/components/date";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title + " | Daniil Rose"}</title>
      </Head>
      <div className="w-full overflow-x-auto place-items-center justify-center px-4">
        <article>
          <div className="py-4">
            <h1 className="text-3xl lg:text-4xl text-orange-feels">
                {postData.title}
            </h1>
            <h2 className="text-xl lg:text-2xl">
                {postData.subtitle ? postData.subtitle : ""}
            </h2>
          </div>
          <div className="flex flex-col flex-wrap font-light">
            <div>
              <em>
                <Date dateString={postData.date} />
              </em>
            </div>
            <div className="mr-2 mb-4 font-bold">
              Keywords:{" "}
              {postData.tags.map((tag) => (
                <span className="text-orange-feels font-normal" href={`/blog/${tag}`} key={tag}>
                    {"#" + tag + " "}
                </span>
              ))}
            </div>
          </div>
          <div className="text-justify text-base">
    <ReactMarkdown
            rehypePlugins={[rehypeRaw]}
            children={postData.contentHtml}
            components={{
              a({ href, children }) {
                return (
                  <Link href={href} target="_blank" rel="noopener noreferrer" className="text-orange-feels hover:underline hover:bg-gray-200 dark:hover:bg-gray-700">
                    {children}
                  </Link>
                );
              },

              table({ children }) {
                return (
                  <div className="overflow-x-auto">
                    <table className="table-auto min-w-full divide-y divide-gray-700 text-sm text-gray-200 mb-4">
                      {children}
                    </table>
                  </div>
                );
              },

              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || "");
                return !inline && match ? (
                  <SyntaxHighlighter
                    children={String(children).replace(/\n$/, "")}
                    language={match[1]}
                    style={atomDark}
                    PreTag="div"
                    {...props}
                  />
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code> 
                );
              },

              img({ src, title }) {
                return (
                  <div className="flex justify-center place-items-center">
                    <Image
                      src={src}
                      alt={title || `Image at ${src}`}
                      height={500}
                      width={500}
                      className="rounded-lg p-0 object-scale"
                    />
                  </div>
                );
              },
            }}
          />
          </div>
        </article>
        <footer>
          <div className="container text-center place-items-center justify-center">
            {" "}
            © <Date dateString={postData.date} />.
          </div>
        </footer>
      </div>
    </Layout>
  );
}