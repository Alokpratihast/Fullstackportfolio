import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { DashboardResponse } from '../models';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private readonly http = inject(HttpClient);

  private readonly apiUrl = 'https://fullstackportfolio-0yl8.onrender.com/api/dashboard';

  getDashboard(): Observable<DashboardResponse> {
    return this.http.get<DashboardResponse>(this.apiUrl);
  }
}