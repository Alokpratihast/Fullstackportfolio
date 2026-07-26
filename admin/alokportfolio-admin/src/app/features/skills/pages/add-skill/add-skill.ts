import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { SkillService } from '../../services/skill.service';
import { CreateSkill } from '../../models';

@Component({
  selector: 'app-add-skill',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-skill.html',
  styleUrl: './add-skill.scss',
})
export class AddSkill {

  private readonly fb = inject(FormBuilder);
  private readonly skillService = inject(SkillService);
  private readonly router = inject(Router);

  isSubmitting = false;

  skillForm = this.fb.group({

    name: ['', Validators.required],

    category: ['', Validators.required],

    percentage: [
      0,
      [Validators.required, Validators.min(0), Validators.max(100)]
    ],

    displayOrder: [
      1,
      [Validators.required, Validators.min(1)]
    ]

  });

  onSubmit(): void {

    if (this.skillForm.invalid) {
      this.skillForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;

    const skill = this.skillForm.value as CreateSkill;

    this.skillService.createSkill(skill).subscribe({

      next: () => {

        alert('Skill added successfully.');

        this.router.navigate(['/skills']);

      },

      error: (error) => {

        console.error(error);

        alert('Failed to add skill.');

        this.isSubmitting = false;

      }

    });

  }

}