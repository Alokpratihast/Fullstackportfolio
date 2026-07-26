import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { ExperienceService } from '../services/experience.service';

@Component({
  selector: 'app-edit-experience',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './edit-experience.html',
  styleUrl: './edit-experience.scss',
})
export class EditExperience {

  private readonly fb = inject(FormBuilder);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly experienceService = inject(ExperienceService);

  experienceId = 0;
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

  ngOnInit(): void {

    this.experienceId = Number(this.route.snapshot.paramMap.get('id'));

    this.loadExperience();

  }

  loadExperience(): void {

    this.experienceService.getExperience(this.experienceId).subscribe({

      next: (response) => {

        this.experienceForm.patchValue({

          companyName: response.data.companyName,
          jobTitle: response.data.jobTitle,
          employmentType: response.data.employmentType,
          location: response.data.location,
          startDate: response.data.startDate?.substring(0, 10),
          endDate: response.data.endDate
            ? response.data.endDate.substring(0, 10)
            : '',
          isCurrentJob: response.data.isCurrentJob,
          description: response.data.description,
          displayOrder: response.data.displayOrder

        });

      },

      error: (error) => {

        console.error(error);

        alert('Failed to load experience.');

      }

    });

  }

  onSubmit(): void {

    if (this.experienceForm.invalid) {

      this.experienceForm.markAllAsTouched();

      return;

    }

    this.isSubmitting = true;

    this.experienceService.updateExperience(

      this.experienceId,

      {
        id: this.experienceId,
        ...this.experienceForm.value
      } as any

    ).subscribe({

      next: () => {

        alert('Experience updated successfully.');

        this.router.navigate(['/experience']);

      },

      error: (error) => {

        console.error(error);

        alert('Failed to update experience.');

        this.isSubmitting = false;

      }

    });

  }

}