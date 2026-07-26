import { DashboardSummary } from './dashboard-summary.model';
import { RecentProject } from './recent-project.model';
import { RecentMessage } from './recent-message.model';

export interface DashboardData {
  summary: DashboardSummary;
  recentProjects: RecentProject[];
  recentMessages: RecentMessage[];
}