import api from "./api";
import { Apiresponse } from "@/types/api";
import { experience } from "@/types/experience";

class ExperienceService {
  async getExperiences(): Promise<experience[]> {
    const response = await api.get<Apiresponse<experience[]>>(
      "/api/experiences"
    );

    return response.data.data;
  }
}

export default new ExperienceService();