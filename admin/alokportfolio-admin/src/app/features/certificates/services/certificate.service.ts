import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ApiResponse } from '../../../core/models/api-response.model';

import {
  Certificate,
  CreateCertificate,
  UpdateCertificate
} from '../models';

@Injectable({
  providedIn: 'root'
})
export class CertificateService {

  private readonly http = inject(HttpClient);

  private readonly apiUrl = 'https://fullstackportfolio-0yl8.onrender.com/api/certificates'

  getCertificates(): Observable<ApiResponse<Certificate[]>> {

    return this.http.get<ApiResponse<Certificate[]>>(this.apiUrl);

  }

  getCertificate(id:number):Observable<ApiResponse<Certificate>>{

    return this.http.get<ApiResponse<Certificate>>(`${this.apiUrl}/${id}`);

  }

  createCertificate(data:CreateCertificate):Observable<ApiResponse<Certificate>>{

    return this.http.post<ApiResponse<Certificate>>(this.apiUrl,data);

  }

  updateCertificate(id:number,data:UpdateCertificate):Observable<ApiResponse<null>>{

    return this.http.put<ApiResponse<null>>(`${this.apiUrl}/${id}`,data);

  }

  deleteCertificate(id:number):Observable<ApiResponse<null>>{

    return this.http.delete<ApiResponse<null>>(`${this.apiUrl}/${id}`);

  }

}