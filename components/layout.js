import Head from "next/head";
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
    </div>
  );
}
