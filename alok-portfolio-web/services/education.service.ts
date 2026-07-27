import api from "./api";
import { Apiresponse } from "@/types/api";
import { education } from "@/types/education";

class EducationService {
  async getEducations(): Promise<education[]> {
    const response = await api.get<Apiresponse<education[]>>(
      "/educations"
    );

    return response.data.data;
  }
}

export default new EducationService();