import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { Router } from '@angular/router';

import { ExperienceService } from '../../../experience/pages/services/experience.service';

@Component({
  selector: 'app-add-experience',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './add-experience.html',
  styleUrl: './add-experience.scss',
})
export class AddExperience {

  private readonly fb = inject(FormBuilder);
  private readonly router = inject(Router);
  private readonly experienceService = inject(ExperienceService);

  isSubmitting = false;

  experienceForm = this.fb.group({

    companyName: ['', Validators.required],

    jobTitle: ['', Validators.required],

    employmentType: ['', Validators.required],

    location: ['', Validators.required],

    startDate: ['', Validators.required],

    endDate: [''],

    isCurrentJob: [false],

    description: ['', Validators.required],

    displayOrder: [1, Validators.required]

  });

  onSubmit(): void {

    if (this.experienceForm.invalid) {

      this.experienceForm.markAllAsTouched();
      return;

    }

    this.isSubmitting = true;

    this.experienceService.createExperience(
      this.experienceForm.value as any
    ).subscribe({

      next: () => {

        alert('Experience added successfully.');

        this.router.navigate(['/experience']);

      },

      error: (error) => {

        console.error(error);

        alert('Failed to add experience.');

        this.isSubmitting = false;

      }

    });

  }

}