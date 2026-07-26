import { Project } from './project.model';

export interface ProjectResponse {

  success: boolean;

  message: string;

  data: Project[];

}