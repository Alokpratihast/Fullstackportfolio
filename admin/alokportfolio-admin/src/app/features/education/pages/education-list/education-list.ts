import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { EducationService } from '../../services/education.service';
import { Education } from '../../models';

@Component({
  selector: 'app-education-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './education-list.html',
  styleUrl: './education-list.scss',
})
export class EducationList implements OnInit {

  private readonly educationService = inject(EducationService);

  educations: Education[] = [];

  ngOnInit(): void {
    this.loadEducations();
  }

  loadEducations(): void {

    this.educationService.getEducations().subscribe({

      next: (response) => {

        this.educations = response.data;

      },

      error: (error) => {

        console.error(error);

      }

    });

  }

  deleteEducation(id: number): void {

    const confirmed = confirm(
      'Are you sure you want to delete this education record?'
    );

    if (!confirmed) return;

    this.educationService.deleteEducation(id).subscribe({

      next: () => {

        alert('Education deleted successfully.');

        this.loadEducations();

      },

      error: (error) => {

        console.error(error);

        alert('Failed to delete education.');

      }

    });

  }

}