export interface RecentProject {
  id: number;
  title: string;
  description: string;
  technologies: string;
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  createdAt: string;
}