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

    this.loadProject();

  }

  loadProject(): void {

    this.projectService.getProject(this.projectId).subscribe({

      next: (response) => {

        this.projectForm.patchValue({

          title: response.data.title,
          description: response.data.description,
          imageUrl: response.data.imageUrl,
          githubUrl: response.data.githubUrl,
          liveUrl: response.data.liveUrl,
          technologies: response.data.technologies,
          isFeatured: response.data.isFeatured

        });

      },

      error: (error: HttpErrorResponse) => {

        console.error(error);

        alert('Failed to load project.');

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

      ...this.projectForm.value as Omit<UpdateProject, 'id'>

    };

    this.projectService.updateProject(this.projectId, project).subscribe({

      next: () => {

        alert('Project updated successfully.');

        this.router.navigate(['/projects']);

      },

      error: (error: HttpErrorResponse) => {

        console.error(error);

        alert('Failed to update project.');

        this.isSubmitting = false;

      }

    });

  }

}