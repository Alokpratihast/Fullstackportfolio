import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardService } from '../../services/dashboard';
import { DashboardData, DashboardResponse } from '../../models';
import { StatsCardsComponent } from '../../components/stats-cards/stats-cards';
import { RecentMessagesComponent } from '../../components/recent-messages/recent-messages';
import { RecentProjectsComponent } from '../../components/recent-projects/recent-projects';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, StatsCardsComponent, RecentMessagesComponent, RecentProjectsComponent],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})


export class DashboardComponent implements OnInit {

  private readonly dashboardService = inject(DashboardService);

  dashboard: DashboardData | null = null;

  isLoading = false;

  errorMessage = '';

  ngOnInit(): void {
    this.loadDashboard();
  }

  loadDashboard(): void {

    this.isLoading = true;

    this.dashboardService.getDashboard().subscribe({

      next: (response: DashboardResponse) => {

        this.dashboard = response.data;

        this.isLoading = false;

      },

      error: (error) => {

        console.error(error);

        this.errorMessage = 'Unable to load dashboard data.';

        this.isLoading = false;

      }

    });

  }

}