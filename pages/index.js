import Layout from "@/components/layout";
import Head from "next/head";
import Script from "next/script";
import Intro from "../components/aboutme/Intro";
import Interests from "../components/aboutme/Interests";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Daniil Rose</title>
        <Script
          async
          defer
          data-website-id="92fdacb6-2085-4d3d-b97c-8e0764149428"
          src="https://webstats.daniilrose.com/umami.js"
        />
      </Head>
      <Intro />
      <Interests />
    </Layout>
  );
}
