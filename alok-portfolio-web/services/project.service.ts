import api from "./api";
import { Apiresponse } from "@/types/api";
import { Project } from "@/types/project";

class ProjectService {
  async getProjects(): Promise<Project[]> {
    const response = await api.get<Apiresponse<Project[]>>("/api/projects");

    return response.data.data;
  }
}

export default new ProjectService();