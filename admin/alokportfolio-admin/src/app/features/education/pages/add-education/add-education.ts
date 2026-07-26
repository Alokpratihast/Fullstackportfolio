import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { Router } from '@angular/router';

import { EducationService } from '../../services/education.service';

@Component({
  selector: 'app-add-education',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './add-education.html',
  styleUrl: './add-education.scss',
})
export class AddEducation {

  private readonly fb = inject(FormBuilder);
  private readonly router = inject(Router);
  private readonly educationService = inject(EducationService);

  isSubmitting = false;

  educationForm = this.fb.group({

    degree: ['', Validators.required],

    institution: ['', Validators.required],

    fieldOfStudy: ['', Validators.required],

    startDate: ['', Validators.required],

    endDate: ['', Validators.required],

    grade: ['', Validators.required],

    description: ['', Validators.required],

    displayOrder: [1, Validators.required]

  });

  onSubmit(): void {

    if (this.educationForm.invalid) {

      this.educationForm.markAllAsTouched();

      return;

    }

    this.isSubmitting = true;

    this.educationService.createEducation(
      this.educationForm.value as any
    ).subscribe({

      next: () => {

        alert('Education added successfully.');

        this.router.navigate(['/education']);

      },

      error: (error) => {

        console.error(error);

        alert('Failed to add education.');

        this.isSubmitting = false;

      }

    });

  }

}