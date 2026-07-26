import { Award, ExternalLink } from "lucide-react";
import { Certificate } from "@/types/certificate";

interface CertificateCardProps {
  item: Certificate;
}

function formatDate(dateStr: string) {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

export default function CertificateCard({ item }: CertificateCardProps) {
  return (
    <div className="flex flex-col rounded-xl border border-slate-800 bg-slate-900/40 p-6 transition-colors duration-300 hover:border-cyan-400/30">
      <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-800 bg-slate-950/60 text-cyan-400">
        <Award size={18} />
      </span>

      <h3 className="mt-4 text-base font-bold text-white">{item.title}</h3>
      <p className="mt-1 text-sm text-cyan-400">{item.issuer}</p>

      <p className="mt-3 font-mono text-xs text-slate-500">
        Issued {formatDate(item.issueDate)}
      </p>

      {item.credentialId && (
        <p className="mt-1 truncate font-mono text-[11px] text-slate-600">
          ID: {item.credentialId}
        </p>
      )}

      {item.credentialUrl && (
        <a
          href={item.credentialUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-slate-300 transition-colors duration-300 hover:text-cyan-400"
        >
          Verify credential
          <ExternalLink size={14} />
        </a>
      )}
    </div>
  );
}
