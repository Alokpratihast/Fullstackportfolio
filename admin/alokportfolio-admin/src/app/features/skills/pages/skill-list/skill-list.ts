import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { SkillService } from '../../services/skill.service';
import { Skill } from '../../models';

@Component({
  selector: 'app-skill-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './skill-list.html',
  styleUrl: './skill-list.scss',
})
export class SkillList implements OnInit {

  private readonly skillService = inject(SkillService);

  skills: Skill[] = [];

  ngOnInit(): void {
    this.loadSkills();
  }

  // loadSkills(): void {
  //   this.skillService.getSkills().subscribe({
  //     next: (response) => {
  //       this.skills = response.data;
  //     },
  //     error: (error) => {
  //       console.error('Failed to load skills', error);
  //     }
  //   });
  // }

  loadSkills(): void {
  this.skillService.getSkills().subscribe({
    next: (response) => {

      console.log('Full Response:', response);
      console.log('Data:', response.data);

      this.skills = response.data;

      console.log('Skills Array:', this.skills);
    },
    error: (error) => {
      console.error(error);
    }
  });
}

  deleteSkill(id: number): void {

    const confirmed = confirm('Are you sure you want to delete this skill?');

    if (!confirmed) return;

    this.skillService.deleteSkill(id).subscribe({
      next: () => {
        alert('Skill deleted successfully.');
        this.loadSkills();
      },
      error: (error) => {
        console.error(error);
        alert('Failed to delete skill.');
      }
    });

  }

}