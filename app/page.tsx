import Image from "next/image";
import { AffiliationLogo } from "@/components/affiliation-logo";
import { Mdx } from "@/lib/mdx";
import { getAbout, getHomeConfig, getInterests, getSiteConfig } from "@/lib/content";

export const revalidate = 3600;

function SidebarPanel({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-xl border border-border bg-surface p-5">
      <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
        {title}
      </h2>
      <div className="mt-3">{children}</div>
    </section>
  );
}

export default async function HomePage() {
  const [site, home, interests, about] = await Promise.all([
    getSiteConfig(),
    getHomeConfig(),
    getInterests(),
    getAbout(),
  ]);

  return (
    <div className="grid gap-x-10 gap-y-6 md:grid-cols-[260px_1fr] md:items-start">
      {/* Profile photo: top of the left column */}
      <div className="md:col-start-1 md:row-start-1">
        <div className="relative mx-auto aspect-[4/5] w-56 overflow-hidden rounded-xl border border-border md:w-full">
          <Image
            src={home.profileImage}
            alt={home.profileAlt}
            fill
            sizes="(max-width: 768px) 224px, 260px"
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Bio: right column, spanning both rows on desktop */}
      <div className="md:col-start-2 md:row-start-1 md:row-span-2">
        <h1 className="font-serif text-4xl font-semibold tracking-tight">
          {site.name}
        </h1>
        <p className="mt-2 text-lg text-accent">{site.shortBio}</p>
        <div className="prose-article prose mt-6 max-w-none dark:prose-invert">
          <Mdx source={about} />
        </div>
      </div>

      {/* Affiliations + Interests: stacked under the photo on the left */}
      <div className="flex flex-col gap-6 md:col-start-1 md:row-start-2">
        {home.affiliations.length > 0 && (
          <SidebarPanel title="Affiliations">
            <ul className="space-y-3 text-sm text-muted">
              {home.affiliations.map((affiliation) => (
                <li key={affiliation.name} className="flex items-center gap-3">
                  <AffiliationLogo affiliation={affiliation} />
                  <span className="leading-snug">{affiliation.name}</span>
                </li>
              ))}
            </ul>
          </SidebarPanel>
        )}

        <SidebarPanel title="Interests">
          <div className="space-y-4">
            {interests.map((group) => (
              <div key={group.title}>
                <h3 className="text-xs font-semibold uppercase tracking-wide text-fg/70">
                  {group.title}
                </h3>
                <ul className="mt-1 space-y-0.5 text-sm text-muted">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </SidebarPanel>
      </div>
    </div>
  );
}
