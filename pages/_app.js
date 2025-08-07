import "@/styles/globals.css";
import { Rubik } from 'next/font/google'
 
// If loading a variable font, you don't need to specify the font weight
const rubik = Rubik({ subsets: ['latin'], variable: '--font-rubik' })

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={`${rubik.variable}`}>
      <Component {...pageProps} />
    </main>
  );
}
