import Link from "next/link";
import { EmailLink } from "@/components/email-link";
import { SocialIcon } from "@/components/social-icon";
import type { CV, SiteConfig } from "@/types/content";

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-border py-8 first:border-t-0">
      <h2 className="mb-5 font-serif text-sm font-semibold uppercase tracking-[0.18em] text-accent">
        {title}
      </h2>
      {children}
    </section>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="mt-2 space-y-1.5 text-muted">
      {items.map((item) => (
        <li key={item} className="relative pl-4 leading-relaxed">
          <span className="absolute left-0 text-accent-2">&middot;</span>
          {item}
        </li>
      ))}
    </ul>
  );
}

export function CVHeader({ cv, site }: { cv: CV; site: SiteConfig }) {
  return (
    <header className="pb-2 text-center">
      <h1 className="font-serif text-4xl font-semibold tracking-tight">
        {site.name}
      </h1>
      <p className="mt-1 text-lg text-accent">{cv.headline}</p>
      <div className="mt-4 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-sm text-muted">
        <EmailLink
          name={site.email.name}
          domain={site.email.domain}
          tld={site.email.tld}
          className="transition hover:text-accent"
        />
        {cv.website && (
          <>
            <span aria-hidden>&middot;</span>
            <Link href={cv.website} className="transition hover:text-accent">
              {cv.website.replace(/^https?:\/\//, "").replace(/\/$/, "")}
            </Link>
          </>
        )}
        {cv.resumeUrl && (
          <>
            <span aria-hidden>&middot;</span>
            <Link
              href={cv.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-accent"
            >
              Résumé (PDF)
            </Link>
          </>
        )}
      </div>
      <div className="mt-4 flex items-center justify-center gap-4">
        {site.socials.map((social) => (
          <Link
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            className="text-muted transition hover:text-accent"
          >
            <SocialIcon icon={social.icon} size={18} />
          </Link>
        ))}
      </div>
    </header>
  );
}

export function CVBody({ cv }: { cv: CV }) {
  return (
    <div className="mt-6">
      <Section title="Education">
        {cv.education.map((edu) => (
          <div key={edu.institution} className="mb-4 last:mb-0">
            <div className="flex flex-wrap items-baseline justify-between gap-x-3">
              <h3 className="font-serif text-lg font-semibold">
                {edu.institution}
              </h3>
              <span className="text-sm text-muted">{edu.timeframe}</span>
            </div>
            {edu.gpa && (
              <p className="text-sm font-medium text-accent">GPA: {edu.gpa}</p>
            )}
            <ul className="mt-2 space-y-1 text-muted">
              {edu.degrees.map((degree) => (
                <li key={degree}>{degree}</li>
              ))}
            </ul>
            {edu.note && <p className="mt-2 text-sm text-muted">{edu.note}</p>}
          </div>
        ))}
      </Section>

      <Section title="Experience">
        <div className="space-y-6">
          {cv.experience.map((job) => (
            <div key={`${job.role}-${job.timeframe}`}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                <h3 className="font-serif text-lg font-semibold">{job.role}</h3>
                <span className="text-sm text-muted">{job.timeframe}</span>
              </div>
              <p className="text-sm font-medium text-accent">
                {job.organization}
                {job.location ? ` · ${job.location}` : ""}
              </p>
              <Bullets items={job.highlights} />
            </div>
          ))}
        </div>
      </Section>

      <Section title="Publications & Appearances">
        <Bullets items={cv.publications} />
      </Section>

      <Section title="Honors & Societies">
        <Bullets items={cv.honors} />
      </Section>

      <Section title="Skills">
        <div className="space-y-5">
          <SkillGroup label="Tools" items={cv.skills.tools} />
          <SkillGroup label="Human Languages" items={cv.skills.humanLanguages} />
          <SkillGroup
            label="Programming Languages"
            items={cv.skills.programmingLanguages}
          />
        </div>
      </Section>
    </div>
  );
}

function SkillGroup({ label, items }: { label: string; items: string[] }) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-fg">{label}</h3>
      <div className="mt-2 flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-full border border-border bg-surface px-3 py-1 text-sm text-muted"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
