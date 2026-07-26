import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { SkillService } from '../../services/skill.service';
import { UpdateSkill } from '../../models';

@Component({
  selector: 'app-edit-skill',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit-skill.html',
  styleUrl: './edit-skill.scss',
})
export class EditSkill implements OnInit {

  private readonly fb = inject(FormBuilder);
  private readonly skillService = inject(SkillService);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

  skillId = 0;

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

  ngOnInit(): void {

    this.skillId = Number(this.route.snapshot.paramMap.get('id'));

    this.loadSkill();

  }

  loadSkill(): void {

    this.skillService.getSkill(this.skillId).subscribe({

      next: (response) => {

        this.skillForm.patchValue({

          name: response.data.name,
          category: response.data.category,
          percentage: response.data.percentage,
          displayOrder: response.data.displayOrder

        });

      },

      error: (error) => {

        console.error(error);

        alert('Failed to load skill.');

      }

    });

  }

  onSubmit(): void {

    if (this.skillForm.invalid) {

      this.skillForm.markAllAsTouched();

      return;

    }

    this.isSubmitting = true;

    const skill: UpdateSkill = {

      id: this.skillId,

      ...this.skillForm.value as Omit<UpdateSkill, 'id'>

    };

    this.skillService.updateSkill(this.skillId, skill).subscribe({

      next: () => {

        alert('Skill updated successfully.');

        this.router.navigate(['/skills']);

      },

      error: (error) => {

        console.error(error);

        alert('Failed to update skill.');

        this.isSubmitting = false;

      }

    });

  }

}