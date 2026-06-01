import type { IconType } from "react-icons";
import { SiIeee, SiAcm, SiGnu } from "react-icons/si";
import { GiFreemasonry } from "react-icons/gi";
import type { Affiliation } from "@/types/content";

// Authentic single-color logos available as vector icons. Affiliations without
// an entry here fall back to a uniform monogram tile, keeping the row consistent.
const LOGOS: Record<string, IconType> = {
    ieee: SiIeee,
    acm: SiAcm,
    gnu: SiGnu,
    fm: GiFreemasonry,
};

export function AffiliationLogo({ affiliation }: { affiliation: Affiliation }) {
  const Logo = affiliation.icon ? LOGOS[affiliation.icon] : undefined;
  const monogram =
    affiliation.abbr ?? affiliation.name.slice(0, 2).toUpperCase();

  return (
    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-accent/10 text-accent">
      {affiliation.mask ? (
        <span
          aria-hidden
          className="block h-[18px] w-[18px] bg-accent"
          style={{
            maskImage: `url(${affiliation.mask})`,
            WebkitMaskImage: `url(${affiliation.mask})`,
            maskSize: "contain",
            WebkitMaskSize: "contain",
            maskRepeat: "no-repeat",
            WebkitMaskRepeat: "no-repeat",
            maskPosition: "center",
            WebkitMaskPosition: "center",
          }}
        />
      ) : Logo ? (
        <Logo size={16} aria-hidden />
      ) : (
        <span className="text-[10px] font-bold leading-none tracking-tight">
          {monogram}
        </span>
      )}
    </span>
  );
}
