import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { Router } from '@angular/router';

import { ProjectService } from '../../services/project';
import { CreateProject } from '../../models';

@Component({
  selector: 'app-add-project',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './add-project.html',
  styleUrl: './add-project.scss'
})
export class AddProjectComponent {

  private readonly fb = inject(FormBuilder);
  private readonly projectService = inject(ProjectService);
  private readonly router = inject(Router);

  isSubmitting = false;

  projectForm = this.fb.group({

    title: ['', Validators.required],

    description: ['', Validators.required],

    imageUrl: [''],

    githubUrl: [''],

    liveUrl: [''],

    technologies: ['', Validators.required],

    isFeatured: [false]

  });

  onSubmit(): void {

    if (this.projectForm.invalid) {

      this.projectForm.markAllAsTouched();

      return;

    }

    this.isSubmitting = true;

    const project = this.projectForm.value as CreateProject;

    this.projectService.createProject(project).subscribe({

      next: () => {

        alert('Project added successfully.');

        this.router.navigate(['/projects']);

      },

      error: (error) => {

        console.error(error);

        this.isSubmitting = false;

      }

    });

  }

}