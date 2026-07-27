import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ApiResponse } from '../../../../core/models/api-response.model';

import {
  Experience,
  CreateExperience,
  UpdateExperience
} from '../../models';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  private readonly http = inject(HttpClient);

  private readonly apiUrl = 'https://fullstackportfolio-0yl8.onrender.com/api/experiences';

  // ============================
  // Get All Experiences
  // ============================

  getExperiences(): Observable<ApiResponse<Experience[]>> {

    return this.http.get<ApiResponse<Experience[]>>(this.apiUrl);

  }

  // ============================
  // Get Experience By Id
  // ============================

  getExperience(id: number): Observable<ApiResponse<Experience>> {

    return this.http.get<ApiResponse<Experience>>(
      `${this.apiUrl}/${id}`
    );

  }

  // ============================
  // Create Experience
  // ============================

  createExperience(
    experience: CreateExperience
  ): Observable<ApiResponse<Experience>> {

    return this.http.post<ApiResponse<Experience>>(
      this.apiUrl,
      experience
    );

  }

  // ============================
  // Update Experience
  // ============================

  updateExperience(
    id: number,
    experience: UpdateExperience
  ): Observable<ApiResponse<null>> {

    return this.http.put<ApiResponse<null>>(
      `${this.apiUrl}/${id}`,
      experience
    );

  }

  // ============================
  // Delete Experience
  // ============================

  deleteExperience(id: number): Observable<ApiResponse<null>> {

    return this.http.delete<ApiResponse<null>>(
      `${this.apiUrl}/${id}`
    );

  }

}