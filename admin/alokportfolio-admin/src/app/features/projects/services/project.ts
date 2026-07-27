import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ApiResponse } from '../../../core/models/api-response.model';

import {
  Project,
  CreateProject,
  UpdateProject
} from '../models';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private readonly http = inject(HttpClient);

  private readonly apiUrl = "https://fullstackportfolio-0yl8.onrender.com/api/projects";

  // ============================
  // Get All Projects
  // ============================

  getProjects(): Observable<ApiResponse<Project[]>> {
    return this.http.get<ApiResponse<Project[]>>(this.apiUrl);
  }

  // ============================
  // Get Project By Id
  // ============================

  getProject(id: number): Observable<ApiResponse<Project>> {
    return this.http.get<ApiResponse<Project>>(
      `${this.apiUrl}/${id}`
    );
  }

  // ============================
  // Create Project
  // ============================

  createProject(
    project: CreateProject
  ): Observable<ApiResponse<null>> {

    return this.http.post<ApiResponse<null>>(
      this.apiUrl,
      project
    );

  }

  // ============================
  // Update Project
  // ============================

  updateProject(
    id: number,
    project: UpdateProject
  ): Observable<ApiResponse<null>> {

    return this.http.put<ApiResponse<null>>(
      `${this.apiUrl}/${id}`,
      project
    );

  }

  // ============================
  // Delete Project
  // ============================

  deleteProject(id: number): Observable<ApiResponse<null>> {

    return this.http.delete<ApiResponse<null>>(
      `${this.apiUrl}/${id}`
    );

  }

}