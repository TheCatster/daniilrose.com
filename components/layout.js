import Head from "next/head";
import Navbar from "./Navbar";

export const siteTitle = "Daniel Rose";

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Daniel Rose's personal site, including his CV and blog."
        />
      </Head>
      <div className="md:container md:mx-auto">
        <Navbar>{children}</Navbar>
      </div>
    </div>
  );
}
