export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  githubUrl: string;
  liveUrl: string;
  technologies: string;
  isFeatured: boolean;
}

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}