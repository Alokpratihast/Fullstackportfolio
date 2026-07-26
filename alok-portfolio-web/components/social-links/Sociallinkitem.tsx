import { SocialLink } from "@/types/social-link";
import { getSocialIcon } from "./socialIconMap";

interface SocialLinkItemProps {
  link: SocialLink;
}

export default function SocialLinkItem({ link }: SocialLinkItemProps) {
  const Icon = getSocialIcon(link.icon || link.platform);

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={link.platform}
      className="text-slate-500 transition-colors duration-300 hover:text-cyan-400"
    >
      <Icon size={20} />
    </a>
  );
}
