import { DashboardData } from './dashboard-data.model';

export interface DashboardResponse {
  success: boolean;
  message: string;
  data: DashboardData;
}