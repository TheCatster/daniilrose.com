import Head from "next/head";
import Navbar from "./Navbar";

export const siteTitle = "Daniil Rose";

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Daniil Rose's personal site, including his CV and blog."
        />
      </Head>
      <div className="container mx-auto max-w-7xl">
        <Navbar>{children}</Navbar>
      </div>
    </div>
  );
}
