import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ApiResponse } from '../../../core/models/api-response.model';

import {
  Skill,
  CreateSkill,
  UpdateSkill
} from '../models';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  private readonly http = inject(HttpClient);

  private readonly apiUrl = 'https://fullstackportfolio-0yl8.onrender.com/api/skills';

  // ============================
  // Get All Skills
  // ============================

  getSkills(): Observable<ApiResponse<Skill[]>> {

    return this.http.get<ApiResponse<Skill[]>>(this.apiUrl);

  }

  // ============================
  // Get Skill By Id
  // ============================

  getSkill(id: number): Observable<ApiResponse<Skill>> {

    return this.http.get<ApiResponse<Skill>>(
      `${this.apiUrl}/${id}`
    );

  }

  // ============================
  // Create Skill
  // ============================

  createSkill(
    skill: CreateSkill
  ): Observable<ApiResponse<Skill>> {

    return this.http.post<ApiResponse<Skill>>(
      this.apiUrl,
      skill
    );

  }

  // ============================
  // Update Skill
  // ============================

  updateSkill(
    id: number,
    skill: UpdateSkill
  ): Observable<ApiResponse<null>> {

    return this.http.put<ApiResponse<null>>(
      `${this.apiUrl}/${id}`,
      skill
    );

  }

  // ============================
  // Delete Skill
  // ============================

  deleteSkill(id: number): Observable<ApiResponse<null>> {

    return this.http.delete<ApiResponse<null>>(
      `${this.apiUrl}/${id}`
    );

  }

}