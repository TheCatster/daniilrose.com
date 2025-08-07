import Layout from "@/components/layout";
import Head from "next/head";
import Intro from "@/components/aboutme/Intro";
import Interests from "@/components/aboutme/Interests";

export default function Home() {
    return (
        <Layout>
            <Head>
                <title>Daniil Rose</title>
            </Head>
            <Intro />
            <div className="hidden md:block">
                <Interests />
            </div>
        </Layout>
    );
}
