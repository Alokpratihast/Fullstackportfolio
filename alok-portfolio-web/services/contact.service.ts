import api from "./api";
import { Apiresponse } from "@/types/api";
import {
  ContactMessageCreate,
  ContactMessageResponse,
} from "@/types/contact";

class ContactService {
  async sendMessage(
    message: ContactMessageCreate
  ): Promise<ContactMessageResponse> {
    const response = await api.post<Apiresponse<ContactMessageResponse>>(
      "/contactmessages",
      message
    );

    return response.data.data;
  }
}

export default new ContactService();