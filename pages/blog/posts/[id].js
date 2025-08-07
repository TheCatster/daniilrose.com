import Layout from "@/components/layout";
import Head from "next/head";
import Image from "next/image";
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
      <div className="place-items-center justify-center px-4">
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
                  <div className="container text-center content-center place-items-center logo-color">
                    <Image
                      src={src}
                      alt={title}
                      width={140}
                      height={140}
                      className="rounded-lg object-scale"
                      priority
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