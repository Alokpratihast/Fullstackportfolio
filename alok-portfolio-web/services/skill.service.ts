import api from "./api";
import { Apiresponse } from "@/types/api";
import { Skill } from "@/types/skill";

class SkillService {
  async getSkills(): Promise<Skill[]> {
    const response = await api.get<Apiresponse<Skill[]>>("/skills");

    return response.data.data;
  }
}

export default new SkillService();