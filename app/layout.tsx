import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import "katex/dist/katex.min.css";
import "highlight.js/styles/github-dark.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { getSiteConfig } from "@/lib/content";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz"],
});

export async function generateMetadata(): Promise<Metadata> {
  const site = await getSiteConfig();
  return {
    metadataBase: new URL("https://www.daniilrose.com"),
    title: {
      default: site.name,
      template: `%s | ${site.name}`,
    },
    description: site.shortBio,
    openGraph: {
      title: site.name,
      description: site.shortBio,
      url: "https://www.daniilrose.com",
      siteName: site.name,
      type: "website",
      images: [{ url: "/images/logo-square.png", width: 150, height: 150 }],
    },
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const site = await getSiteConfig();

  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body className={`${inter.variable} ${fraunces.variable} min-h-screen`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <SiteHeader name={site.name} nav={site.nav} />
          <main className="mx-auto w-full max-w-3xl px-5 py-10">{children}</main>
          <SiteFooter name={site.name} socials={site.socials} />
        </ThemeProvider>
        {site.analyticsSrc && site.analyticsWebsiteId && (
          <Script
            async
            defer
            data-website-id={site.analyticsWebsiteId}
            src={site.analyticsSrc}
          />
        )}
      </body>
    </html>
  );
}
