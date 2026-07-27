"use client";

import { useEffect, useState } from "react";
import { Mail } from "lucide-react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaXTwitter,
} from "react-icons/fa6";
import socialLinkService from "@/services/social-link.service";
import { SocialLink } from "@/types/social-link";

const iconMap: Record<string, React.ElementType> = {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaXTwitter,
  Mail,
};

export default function HeroSocial() {
  const [links, setLinks] = useState<SocialLink[]>([]);

  useEffect(() => {
    const fetchLinks = async () => {
      try {
        const data = await socialLinkService.getSocialLinks();
        setLinks(data.sort((a, b) => a.displayOrder - b.displayOrder));
      } catch (error) {
        console.error("Failed to load social links", error);
      }
    };

    fetchLinks();
  }, []);

  return (
    <div className="flex items-center gap-5">
      <span className="font-mono text-xs uppercase tracking-widest text-slate-600">
        Connect
      </span>

      <span className="h-px w-8 bg-slate-800" />

      {links.map((link) => {
        const Icon = iconMap[link.icon];

        if (!Icon) return null;

        return (
          <a
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.platform}
            className="text-slate-500 transition-colors duration-300 hover:text-cyan-400"
          >
            <Icon size={20} />
          </a>
        );
      })}
    </div>
  );
}