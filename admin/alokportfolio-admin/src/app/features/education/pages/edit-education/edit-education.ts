import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { EducationService } from '../../services/education.service';

@Component({
  selector: 'app-edit-education',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './edit-education.html',
  styleUrl: './edit-education.scss',
})
export class EditEducation {

  private readonly fb = inject(FormBuilder);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly educationService = inject(EducationService);

  educationId = 0;
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

  ngOnInit(): void {

    this.educationId = Number(
      this.route.snapshot.paramMap.get('id')
    );

    this.loadEducation();

  }

  loadEducation(): void {

    this.educationService
      .getEducation(this.educationId)
      .subscribe({

        next: (response) => {

          this.educationForm.patchValue({

            degree: response.data.degree,

            institution: response.data.institution,

            fieldOfStudy: response.data.fieldOfStudy,

            startDate: response.data.startDate.substring(0, 10),

            endDate: response.data.endDate.substring(0, 10),

            grade: response.data.grade,

            description: response.data.description,

            displayOrder: response.data.displayOrder

          });

        },

        error: (error) => {

          console.error(error);

          alert('Failed to load education.');

        }

      });

  }

  onSubmit(): void {

    if (this.educationForm.invalid) {

      this.educationForm.markAllAsTouched();

      return;

    }

    this.isSubmitting = true;

    this.educationService.updateEducation(

      this.educationId,

      {
        id: this.educationId,
        ...this.educationForm.value
      } as any

    ).subscribe({

      next: () => {

        alert('Education updated successfully.');

        this.router.navigate(['/education']);

      },

      error: (error) => {

        console.error(error);

        alert('Failed to update education.');

        this.isSubmitting = false;

      }

    });

  }

}