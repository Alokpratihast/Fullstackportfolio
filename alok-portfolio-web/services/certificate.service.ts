import api from "./api";
import { Apiresponse } from "@/types/api";
import { Certificate } from "@/types/certificate";

class CertificateService {
  async getCertificates(): Promise<Certificate[]> {
    const response = await api.get<Apiresponse<Certificate[]>>(
      "/api/certificates"
    );

    return response.data.data;
  }
}

export default new CertificateService();