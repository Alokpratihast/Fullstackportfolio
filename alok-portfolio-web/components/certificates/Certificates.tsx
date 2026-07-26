"use client";

import { useEffect, useState } from "react";

import certificateService from "@/services/certificate.service";
import { Certificate } from "@/types/certificate";

import CertificateCard from "./Certificatecard ";
import CertificatesSkeleton from "./Certificatesskeleton";
import CertificatesEmpty from "./Certificatesempty";

export default function Certificates() {
  const [certificates, setCertificates] = useState<Certificate[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCertificates = async () => {
      try {
        const data = await certificateService.getCertificates();
        setCertificates(
          [...data].sort((a, b) => a.displayOrder - b.displayOrder)
        );
      } catch (error) {
        console.error("Failed to fetch certificates:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCertificates();
  }, []);

  return (
    <section id="certificates" className="bg-[#0A0F1D] py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section header */}
        <div className="mb-14 text-center">
          <span className="font-mono text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Verified credentials
          </span>

          <h2 className="mt-3 text-4xl font-bold text-white">
            Certifications
          </h2>
        </div>

        {/* Content */}
        {loading ? (
          <CertificatesSkeleton />
        ) : certificates.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {certificates.map((item) => (
              <CertificateCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <CertificatesEmpty />
        )}
      </div>
    </section>
  );
}
