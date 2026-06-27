import {
  Github,
  Linkedin,
  Mail,
  Briefcase,
  type LucideIcon,
} from "lucide-react";
import type { SocialLink } from "@/lib/site";

/**
 * Maps each social platform to an icon. Lucide covers email, LinkedIn and
 * GitHub directly; the freelance marketplaces reuse a neutral work icon so
 * the set stays visually consistent and dependency-free.
 */
export const platformIcons: Record<SocialLink["platform"], LucideIcon> = {
  email: Mail,
  linkedin: Linkedin,
  github: Github,
  upwork: Briefcase,
  freelancer: Briefcase,
  fiverr: Briefcase,
};
