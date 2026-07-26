import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaFacebook,
  FaDiscord,
  FaDribbble,
  FaBehance,
  FaMedium,
  FaStackOverflow,
  FaCodepen,
} from "react-icons/fa";
import { Mail, Globe, Link2 } from "lucide-react";
import { IconType } from "react-icons";

// keys are matched case-insensitively against either `icon` or `platform`
const iconMap: Record<string, IconType> = {
  github: FaGithub,
  linkedin: FaLinkedin,
  twitter: FaTwitter,
  x: FaTwitter,
  instagram: FaInstagram,
  youtube: FaYoutube,
  facebook: FaFacebook,
  discord: FaDiscord,
  dribbble: FaDribbble,
  behance: FaBehance,
  medium: FaMedium,
  stackoverflow: FaStackOverflow,
  codepen: FaCodepen,
};

export function getSocialIcon(key: string): IconType {
  const normalized = key.trim().toLowerCase();

  if (iconMap[normalized]) return iconMap[normalized];
  if (normalized.includes("mail") || normalized.includes("email")) return Mail;
  if (normalized.includes("website") || normalized.includes("web")) return Globe;

  return Link2;
}