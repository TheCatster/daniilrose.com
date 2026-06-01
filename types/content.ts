import { z } from "zod";

export const socialSchema = z.object({
  label: z.string(),
  href: z.string(),
  icon: z.enum([
    "github",
    "linkedin",
    "stackoverflow",
    "sourcehut",
    "twitter",
    "email",
    "orcid",
    "googlescholar",
  ]),
});

export const navItemSchema = z.object({
  label: z.string(),
  href: z.string(),
  external: z.boolean().optional(),
});

export const siteSchema = z.object({
  name: z.string(),
  shortBio: z.string(),
  email: z.object({
    name: z.string(),
    domain: z.string(),
    tld: z.string(),
  }),
  resumeUrl: z.string().optional(),
  nav: z.array(navItemSchema),
  socials: z.array(socialSchema),
  analyticsWebsiteId: z.string().optional(),
  analyticsSrc: z.string().optional(),
});

export const affiliationSchema = z.object({
  name: z.string(),
  abbr: z.string().optional(),
  icon: z.string().optional(),
  // Path to a single-color silhouette image, tinted to the accent color.
  mask: z.string().optional(),
});

export const homeSchema = z.object({
  profileImage: z.string(),
  profileAlt: z.string(),
  affiliations: z.array(affiliationSchema).default([]),
});

export const interestGroupSchema = z.object({
  title: z.string(),
  items: z.array(z.string()),
});

export const educationSchema = z.object({
  institution: z.string(),
  timeframe: z.string(),
  gpa: z.string().optional(),
  degrees: z.array(z.string()),
  note: z.string().optional(),
});

export const experienceSchema = z.object({
  role: z.string(),
  organization: z.string(),
  location: z.string().optional(),
  timeframe: z.string(),
  highlights: z.array(z.string()),
});

export const skillsSchema = z.object({
  tools: z.array(z.string()),
  humanLanguages: z.array(z.string()),
  programmingLanguages: z.array(z.string()),
});

export const cvSchema = z.object({
  headline: z.string(),
  website: z.string().optional(),
  resumeUrl: z.string().optional(),
  education: z.array(educationSchema),
  experience: z.array(experienceSchema),
  publications: z.array(z.string()),
  honors: z.array(z.string()),
  skills: skillsSchema,
});

export const postFrontmatterSchema = z.object({
  title: z.string(),
  subtitle: z.string().optional().default(""),
  date: z.string(),
  description: z.string().optional().default(""),
  tags: z.array(z.string()).optional().default([]),
});

export type Social = z.infer<typeof socialSchema>;
export type NavItem = z.infer<typeof navItemSchema>;
export type SiteConfig = z.infer<typeof siteSchema>;
export type Affiliation = z.infer<typeof affiliationSchema>;
export type HomeConfig = z.infer<typeof homeSchema>;
export type InterestGroup = z.infer<typeof interestGroupSchema>;
export type Education = z.infer<typeof educationSchema>;
export type Experience = z.infer<typeof experienceSchema>;
export type Skills = z.infer<typeof skillsSchema>;
export type CV = z.infer<typeof cvSchema>;
export type PostFrontmatter = z.infer<typeof postFrontmatterSchema>;

export type PostMeta = PostFrontmatter & { slug: string };
export type Post = PostMeta & { content: string };
