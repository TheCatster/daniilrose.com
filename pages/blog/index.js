import Layout from "../../components/layout";
import Head from "next/head";
import Link from "next/link";
import Date from "../../components/date";
import Image from "next/image";
import cover from "../../public/images/pcb.webp";
import { getSortedPostsData } from "../../lib/posts";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Blog({ allPostsData }) {
  return (
    <Layout>
      <Head>
        <title>Blog - Daniil Rose</title>
      </Head>
      <div className="flex flex-wrap md:flex-nowrap place-items-start p-4 justify-between">
        <div className="flex flex-wrap flex-col place-items-center lg:mr-10">
          <div>
            {" "}
            <Image
                className="rounded-lg p-0 w-10 h-10 object-scale"
                src={cover}
                alt="A PCB with vias"
                sizes="100vw"
                style={{
                    width: "100%",
                    height: "auto",
                }}
                placeholder="blur"
                priority
            />
          </div>
          <h1 className="text-2xl lg:text-4xl font-bold p-4">Regressions</h1>
          <div className="max-w-md">
            <p className="flex-initial text-justify overflow-wrap pb-2 text-sm lg:text-base">
              Daniil Rose's comments on current issues in science and technology policy,
              higher ed, computers, and whatever else comes to mind.
            </p>
          </div>
        </div>
        <div className="flex flex-col place-items-center flex-grow">
          <section className="">
            {allPostsData.map(({ id, date, description, title, subtitle, tags }) => (
              <Link href={`/blog/posts/${id}`} key={title} passHref>
                  <article className="hover:bg-gray-200 dark:hover:bg-gray-700 p-4 rounded-md box-border border-2 mb-4">
                    <header>
                      <h3 className="text-base lg:text-lg font-semibold text-orange-feels">
                        {title}
                      </h3>
                      <h2 className="mb-1 text-sm lg:text-base">
                        {subtitle ? subtitle : ""}
                      </h2>
                      <span className="mb-4 text-sm font-light">
                        {" "}
                        <Date dateString={date} />
                      </span>
                      <div className="text-orange-feels">
                        {tags.map((tag) => (
                          <span key={tag}>
                              {"#" + tag + " "}
                          </span>
                        ))}
                      </div>
                    </header>
                    <section>
                      <p className="mb-2 text-justify text-sm lg:text-base">{description}</p>
                    </section>
                  </article>
              </Link>
            ))}
          </section>
        </div>
      </div>
    </Layout>
  );
}