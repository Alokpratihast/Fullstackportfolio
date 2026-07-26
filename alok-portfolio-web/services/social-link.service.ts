import api from "./api";
import { Apiresponse } from "@/types/api";
import { SocialLink } from "@/types/social-link";

class SocialLinkService {
  async getSocialLinks(): Promise<SocialLink[]> {
    const response = await api.get<Apiresponse<SocialLink[]>>(
      "/api/sociallinks"
    );

    return response.data.data;
  }
}

export default new SocialLinkService();