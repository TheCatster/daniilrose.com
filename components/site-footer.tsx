import Link from "next/link";
import { SocialIcon } from "@/components/social-icon";
import type { Social } from "@/types/content";

export function SiteFooter({
  name,
  socials,
}: {
  name: string;
  socials: Social[];
}) {
  return (
    <footer className="mt-20 border-t border-border">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 px-5 py-8 sm:flex-row sm:justify-between">
        <p className="text-sm text-muted">
          &copy; {new Date().getFullYear()} {name}
        </p>
        <div className="flex items-center gap-4">
          {socials.map((social) => (
            <Link
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="text-muted transition hover:text-accent"
            >
              <SocialIcon icon={social.icon} />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
