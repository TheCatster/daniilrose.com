import type { IconType } from "react-icons";
import {
  FaGithub,
  FaLinkedin,
  FaStackOverflow,
  FaXTwitter,
  FaEnvelope,
} from "react-icons/fa6";
import { SiSourcehut, SiOrcid, SiGooglescholar } from "react-icons/si";
import type { Social } from "@/types/content";

const ICONS: Record<Social["icon"], IconType> = {
  github: FaGithub,
  linkedin: FaLinkedin,
  stackoverflow: FaStackOverflow,
  sourcehut: SiSourcehut,
  twitter: FaXTwitter,
  email: FaEnvelope,
  orcid: SiOrcid,
  googlescholar: SiGooglescholar,
};

export function SocialIcon({
  icon,
  size = 20,
}: {
  icon: Social["icon"];
  size?: number;
}) {
  const Icon = ICONS[icon];
  return <Icon size={size} aria-hidden />;
}
