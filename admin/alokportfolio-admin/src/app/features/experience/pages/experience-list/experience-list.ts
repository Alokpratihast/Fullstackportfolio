import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { ExperienceService } from '../services/experience.service';
import { Experience } from '../../../experience/models';

@Component({
  selector: 'app-experience-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './experience-list.html',
  styleUrl: './experience-list.scss',
})
export class ExperienceList implements OnInit {

  private readonly experienceService = inject(ExperienceService);

  experiences: Experience[] = [];

  ngOnInit(): void {
    this.loadExperiences();
  }

  loadExperiences(): void {

    this.experienceService.getExperiences().subscribe({

      next: (response) => {

        this.experiences = response.data;

      },

      error: (error) => {

        console.error(error);

      }

    });

  }

  deleteExperience(id: number): void {

    const confirmed = confirm(
      'Are you sure you want to delete this experience?'
    );

    if (!confirmed) return;

    this.experienceService.deleteExperience(id).subscribe({

      next: () => {

        alert('Experience deleted successfully.');

        this.loadExperiences();

      },

      error: (error) => {

        console.error(error);

        alert('Failed to delete experience.');

      }

    });

  }

}