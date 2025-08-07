import Head from "next/head";
import Script from "next/script";
import Navbar from "./Navbar";
import { Rubik } from 'next/font/google'
 
// If loading a variable font, you don't need to specify the font weight
const rubik = Rubik({ subsets: ['latin'], variable: '--font-rubik' })

export const siteTitle = "Daniil Rose";

export default function Layout({ children }) {
  return (
    <div className={`${rubik.className}`}>
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
      <Script
          async
          defer
          data-website-id="92fdacb6-2085-4d3d-b97c-8e0764149428"
          src="https://webstats.daniilrose.com/umami.js"
      />
    </div>
  );
}
