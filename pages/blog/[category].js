import Layout from "../../components/layout";
import Head from "next/head";
import Link from "next/link";
import Date from "../../components/date";
import Image from "next/image";
import cover from "../../public/images/pcb.webp";
import { useRouter } from "next/router";
import { getAllPostTags, getSortedPostsData } from "../../lib/posts";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostTags();
  return {
    paths,
    fallback: false,
  };
}

export default function Blog({ allPostsData }) {
  const router = useRouter();
  const { category } = router.query;

  return (
    <Layout>
      <Head>
        <title>Blog: {category} - Daniil Rose</title>
      </Head>
      <div className="flex flex-wrap md:flex-nowrap place-items-start p-4 justify-between">
        <div className="flex flex-wrap flex-col place-items-center">
          <div>
            {" "}
            <Image
              priority
              placeholder="blur"
              src={cover}
              height={150}
              width={150}
              alt="PCB with vias"
              className="object-scale rounded-lg p-4"
            />
          </div>
          <h1 className="text-2xl lg:text-4xl font-bold p-4">Regressions</h1>
          <div className="max-w-md">
            <p className="flex-initial overflow-wrap pb-2 text-sm lg:text-md">
              Welcome to Regressions! Here I discuss various mathematical
              concepts, computer knowledge, Emacs, and GNU/Linux things.
            </p>
            <p className="flex-initial overflow-wrap text-sm lg:text-md">
              I especially love electronics at the hardware/firmware levels, and
              that is where the name &quot;regressions&quot; comes from
              (returning to the former.)
            </p>
          </div>
        </div>
        <div className="flex flex-col place-items-center flex-grow">
          <section className="ml-10">
            {allPostsData.map(({ id, date, description, title, tags }) => {
              if (tags.includes(category)) {
                return (
                  <Link href={`/blog/posts/${id}`} key={title}>
                    <a>
                      <article className="hover:bg-gray-200 dark:hover:bg-gray-700 p-4 rounded-md box-border border-2 mb-4">
                        <header>
                          <h3 className="mb-1 text-md lg:text-lg font-semibold text-orange-feels">
                            {title}
                          </h3>
                          <span className="mb-4 text-sm font-light">
                            {" "}
                            <Date dateString={date} />
                          </span>
                          <div>
                            {tags.map((tag) => (
                              <Link href={`/blog/${tag}`} key={tag}>
                                <a className="text-orange-feels">
                                  {"#" + tag + " "}
                                </a>
                              </Link>
                            ))}
                          </div>
                        </header>
                        <section>
                          <p className="mb-2 text-sm lg:text-md">
                            {description}
                          </p>
                        </section>
                      </article>
                    </a>
                  </Link>
                );
              }
            })}
          </section>
        </div>
      </div>
    </Layout>
  );
}
