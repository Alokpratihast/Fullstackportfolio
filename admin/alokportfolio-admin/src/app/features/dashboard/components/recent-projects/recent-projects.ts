import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { RecentProject } from '../../models';

@Component({
  selector: 'app-recent-projects',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './recent-projects.html',
  styleUrl: './recent-projects.scss'
})
export class RecentProjectsComponent {

  @Input({ required: true })
  projects: RecentProject[] = [];

}