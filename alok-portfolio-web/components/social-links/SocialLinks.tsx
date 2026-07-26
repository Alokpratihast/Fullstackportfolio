"use client";

import { useEffect, useState } from "react";

import socialLinkService from "@/services/social-link.service";
import { SocialLink } from "@/types/social-link";

import SocialLinkItem from "./Sociallinkitem";

export default function SocialLinks() {
  const [links, setLinks] = useState<SocialLink[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLinks = async () => {
      try {
        const data = await socialLinkService.getSocialLinks();
        console.log("Social Links:", data);
        setLinks([...data].sort((a, b) => a.displayOrder - b.displayOrder));
      } catch (error) {
        console.error("Failed to fetch social links:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLinks();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center gap-5">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="h-5 w-5 animate-pulse rounded-full bg-slate-800"
          />
        ))}
      </div>
    );
  }

  if (links.length === 0) return null;

  return (
    <div className="flex items-center gap-5">
      {links.map((link) => (
        <SocialLinkItem key={link.id} link={link} />
      ))}
    </div>
  );
}
