"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

import projectService from "@/services/project.service";
import skillService from "@/services/skill.service";
import experienceService from "@/services/experience.service";
import educationService from "@/services/education.service";
import certificateService from "@/services/certificate.service";
import socialLinkService from "@/services/social-link.service";

import { Project } from "@/types/project";
import { Skill } from "@/types/skill";
import { experience } from "@/types/experience";
import { education } from "@/types/education";
import { Certificate } from "@/types/certificate";
import { SocialLink } from "@/types/social-link";

interface PortfolioContextType {
  projects: Project[];
  skills: Skill[];
  experiences: experience[];
  educations: education[];
  certificates: Certificate[];
  socialLinks: SocialLink[];
  loading: boolean;
  error: string | null;
  refresh: () => Promise<void>;
}

const PortfolioContext = createContext<PortfolioContextType | undefined>(
  undefined
);

export function PortfolioProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [projects, setProjects] = useState<Project[]>([]);
  const [skills, setSkills] = useState<Skill[]>([]);
  const [experiences, setExperiences] = useState<experience[]>([]);
  const [educations, setEducations] = useState<education[]>([]);
  const [certificates, setCertificates] = useState<Certificate[]>([]);
  const [socialLinks, setSocialLinks] = useState<SocialLink[]>([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadPortfolio = async () => {
    try {
      setLoading(true);
      setError(null);

      const [
        projectsData,
        skillsData,
        experiencesData,
        educationsData,
        certificatesData,
        socialLinksData,
      ] = await Promise.all([
        projectService.getProjects(),
        skillService.getSkills(),
        experienceService.getExperiences(),
        educationService.getEducations(),
        certificateService.getCertificates(),
        socialLinkService.getSocialLinks(),
      ]);

      setProjects(projectsData);
      setSkills(skillsData);
      setExperiences(experiencesData);
      setEducations(educationsData);
      setCertificates(certificatesData);
      setSocialLinks(socialLinksData);
    } catch (err) {
      console.error(err);
      setError("Failed to load portfolio data.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPortfolio();
  }, []);

  return (
    <PortfolioContext.Provider
      value={{
        projects,
        skills,
        experiences,
        educations,
        certificates,
        socialLinks,
        loading,
        error,
        refresh: loadPortfolio,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
}

export function usePortfolio() {
  const context = useContext(PortfolioContext);

  if (!context) {
    throw new Error(
      "usePortfolio must be used within PortfolioProvider"
    );
  }

  return context;
}