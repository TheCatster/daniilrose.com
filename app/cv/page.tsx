import type { Metadata } from "next";
import { CVBody, CVHeader } from "@/components/cv/cv-sections";
import { getCV, getSiteConfig } from "@/lib/content";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "CV",
  description: "Curriculum vitae of Daniil Rose.",
};

export default async function CVPage() {
  const [cv, site] = await Promise.all([getCV(), getSiteConfig()]);

  return (
    <article>
      <CVHeader cv={cv} site={site} />
      <CVBody cv={cv} />
    </article>
  );
}
