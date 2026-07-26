import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { CertificateService } from '../../services/certificate.service';

@Component({
  selector: 'app-edit-certificate',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './edit-certificate.html',
  styleUrl: './edit-certificate.scss',
})
export class EditCertificate {

  private readonly fb = inject(FormBuilder);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly certificateService = inject(CertificateService);

  certificateId = 0;
  isSubmitting = false;

  certificateForm = this.fb.group({

    title: ['', Validators.required],

    issuer: ['', Validators.required],

    issueDate: ['', Validators.required],

    credentialId: ['', Validators.required],

    credentialUrl: ['', Validators.required],

    displayOrder: [1, Validators.required]

  });

  ngOnInit(): void {

    this.certificateId = Number(
      this.route.snapshot.paramMap.get('id')
    );

    this.loadCertificate();

  }

  loadCertificate(): void {

    this.certificateService
      .getCertificate(this.certificateId)
      .subscribe({

        next: (response) => {

          this.certificateForm.patchValue({

            title: response.data.title,

            issuer: response.data.issuer,

            issueDate: response.data.issueDate.substring(0, 10),

            credentialId: response.data.credentialId,

            credentialUrl: response.data.credentialUrl,

            displayOrder: response.data.displayOrder

          });

        },

        error: (error) => {

          console.error(error);

          alert('Failed to load certificate.');

        }

      });

  }

  onSubmit(): void {

    if (this.certificateForm.invalid) {

      this.certificateForm.markAllAsTouched();

      return;

    }

    this.isSubmitting = true;

    this.certificateService.updateCertificate(

      this.certificateId,

      {
        id: this.certificateId,
        ...this.certificateForm.value
      } as any

    ).subscribe({

      next: () => {

        alert('Certificate updated successfully.');

        this.router.navigate(['/certificates']);

      },

      error: (error) => {

        console.error(error);

        alert('Failed to update certificate.');

        this.isSubmitting = false;

      }

    });

  }

}