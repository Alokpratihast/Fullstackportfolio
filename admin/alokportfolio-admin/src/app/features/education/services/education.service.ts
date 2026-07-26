import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ApiResponse } from '../../../core/models/api-response.model';

import {
  Education,
  CreateEducation,
  UpdateEducation
} from '../models';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  private readonly http = inject(HttpClient);

  private readonly apiUrl = 'https://localhost:7107/api/educations';

  getEducations(): Observable<ApiResponse<Education[]>> {

    return this.http.get<ApiResponse<Education[]>>(this.apiUrl);

  }

  getEducation(id: number): Observable<ApiResponse<Education>> {

    return this.http.get<ApiResponse<Education>>(`${this.apiUrl}/${id}`);

  }

  createEducation(data: CreateEducation): Observable<ApiResponse<Education>> {

    return this.http.post<ApiResponse<Education>>(this.apiUrl, data);

  }

  updateEducation(
    id: number,
    data: UpdateEducation
  ): Observable<ApiResponse<null>> {

    return this.http.put<ApiResponse<null>>(
      `${this.apiUrl}/${id}`,
      data
    );

  }

  deleteEducation(id: number): Observable<ApiResponse<null>> {

    return this.http.delete<ApiResponse<null>>(
      `${this.apiUrl}/${id}`
    );

  }

}