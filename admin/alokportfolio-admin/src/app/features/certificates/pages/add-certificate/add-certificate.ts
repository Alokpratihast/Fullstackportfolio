import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { Router } from '@angular/router';

import { CertificateService } from '../../services/certificate.service';

@Component({
  selector: 'app-add-certificate',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './add-certificate.html',
  styleUrl: './add-certificate.scss',
})
export class AddCertificate {

  private readonly fb = inject(FormBuilder);
  private readonly router = inject(Router);
  private readonly certificateService = inject(CertificateService);

  isSubmitting = false;

  certificateForm = this.fb.group({

    title: ['', Validators.required],

    issuer: ['', Validators.required],

    issueDate: ['', Validators.required],

    credentialId: ['', Validators.required],

    credentialUrl: ['', Validators.required],

    displayOrder: [1, Validators.required]

  });

  onSubmit(): void {

    if (this.certificateForm.invalid) {

      this.certificateForm.markAllAsTouched();
      return;

    }

    this.isSubmitting = true;

    this.certificateService.createCertificate(
      this.certificateForm.value as any
    ).subscribe({

      next: () => {

        alert('Certificate added successfully.');

        this.router.navigate(['/certificates']);

      },

      error: (error) => {

        console.error(error);

        alert('Failed to add certificate.');

        this.isSubmitting = false;

      }

    });

  }

}