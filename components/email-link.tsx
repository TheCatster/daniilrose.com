"use client";

import { useEffect, useRef } from "react";

type Props = {
  name: string;
  domain: string;
  tld: string;
  className?: string;
};

/**
 * Anti-scraping email link. The address is never present in the server-rendered
 * HTML: the visible text is composed by CSS from `data-*` attributes, and the
 * `mailto:` href is attached on the client via a DOM ref (no React state, so it
 * stays out of the static markup that scrapers read).
 */
export function EmailLink({ name, domain, tld, className }: Props) {
  const ref = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.href = `mailto:${name}@${domain}.${tld}`;
    }
  }, [name, domain, tld]);

  return (
    <a
      ref={ref}
      className={`cryptedmail${className ? ` ${className}` : ""}`}
      data-name={name}
      data-domain={domain}
      data-tld={tld}
    />
  );
}
