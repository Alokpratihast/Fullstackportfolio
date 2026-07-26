import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { ProjectService } from '../../services/project';
import { Project } from '../../models';

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './project-list.html',
  styleUrl: './project-list.scss'
})
export class ProjectListComponent implements OnInit {

  private readonly projectService = inject(ProjectService);

  projects: Project[] = [];
  isLoading = false;
  errorMessage = '';

  ngOnInit(): void {
    this.loadProjects();
  }

  loadProjects(): void {
    this.isLoading = true;
    this.errorMessage = '';

    this.projectService.getProjects().subscribe({

      next: (response) => {
        this.projects = response.data;
        this.isLoading = false;
      },

      error: (error) => {
        console.error('Error loading projects:', error);
        this.errorMessage = 'Unable to load projects.';
        this.isLoading = false;
      }

    });
  }

  deleteProject(id: number): void {

  const confirmed = confirm(
    'Are you sure you want to delete this project?'
  );

  if (!confirmed) {
    return;
  }

  this.projectService.deleteProject(id).subscribe({

    next: () => {

      alert('Project deleted successfully.');

      this.loadProjects();

    },

    error: (error) => {

      console.error(error);

      alert('Unable to delete project.');

    }

  });

}

}