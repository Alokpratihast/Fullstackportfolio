import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { CertificateService } from '../../services/certificate.service';
import { Certificate } from '../../models';

@Component({
  selector: 'app-certificate-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './certificate-list.html',
  styleUrl: './certificate-list.scss',
})
export class CertificateList implements OnInit {

  private readonly certificateService = inject(CertificateService);

  certificates: Certificate[] = [];

  ngOnInit(): void {
    this.loadCertificates();
  }

  loadCertificates(): void {

    this.certificateService.getCertificates().subscribe({

      next: (response) => {

        this.certificates = response.data;

      },

      error: (error) => {

        console.error(error);

      }

    });

  }

  deleteCertificate(id: number): void {

    const confirmed = confirm(
      'Are you sure you want to delete this certificate?'
    );

    if (!confirmed) return;

    this.certificateService.deleteCertificate(id).subscribe({

      next: () => {

        alert('Certificate deleted successfully.');

        this.loadCertificates();

      },

      error: (error) => {

        console.error(error);

        alert('Failed to delete certificate.');

      }

    });

  }

}