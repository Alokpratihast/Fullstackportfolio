import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

import { ProjectService } from '../../services/project';
import { UpdateProject } from '../../models';

@Component({
  selector: 'app-edit-project',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './edit-project.html',
  styleUrl: './edit-project.scss'
})
export class EditProjectComponent implements OnInit {

  private readonly fb = inject(FormBuilder);
  private readonly projectService = inject(ProjectService);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

  projectId = 0;

  isLoading = false;
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

  ngOnInit(): void {

    this.projectId = Number(this.route.snapshot.paramMap.get('id'));

    console.log('Project Id:', this.projectId);

    this.loadProject();

  }

  loadProject(): void {

    this.isLoading = true;

    console.log('Loading project...');

    this.projectService.getProject(this.projectId).subscribe({

      next: (response) => {

        console.log('API Response:', response);

        this.projectForm.patchValue({
          title: response.data.title,
          description: response.data.description,
          imageUrl: response.data.imageUrl,
          githubUrl: response.data.githubUrl,
          liveUrl: response.data.liveUrl,
          technologies: response.data.technologies,
          isFeatured: response.data.isFeatured
        });

        console.log('Form Value:', this.projectForm.value);

        this.isLoading = false;

        console.log('Loading Finished');

      },

      error: (error: HttpErrorResponse) => {

        console.error('API Error:', error);

        this.isLoading = false;

      }

    });

  }

  onSubmit(): void {

    if (this.projectForm.invalid) {

      this.projectForm.markAllAsTouched();

      return;

    }

    this.isSubmitting = true;

    const project: UpdateProject = {
      id: this.projectId,
      ...this.projectForm.getRawValue()
    } as UpdateProject;

    console.log('Updating Project:', project);

    this.projectService.updateProject(this.projectId, project).subscribe({

      next: () => {

        this.isSubmitting = false;

        alert('Project updated successfully.');

        this.router.navigate(['/projects']);

      },

      error: (error: HttpErrorResponse) => {

        console.error('Update Error:', error);

        this.isSubmitting = false;

      }

    });

  }

}