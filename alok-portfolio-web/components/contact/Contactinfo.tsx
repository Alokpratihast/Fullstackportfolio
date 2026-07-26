import { Mail, MapPin, Clock } from "lucide-react";

export default function ContactInfo() {
  return (
    <div className="space-y-6">
      <div>
        <p className="font-mono text-sm text-slate-500">
          <span className="text-cyan-500">{"// "}</span>
          get in touch
        </p>
        <h3 className="mt-2 text-2xl font-bold text-white">
          Let&apos;s build something together
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-slate-400">
          Have a project in mind or an opening on your team? My inbox is
          open — I usually reply within a day or two.
        </p>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-800 bg-slate-900/40 text-cyan-400">
            <Mail size={16} />
          </span>
          <div>
            <p className="text-xs text-slate-500">Email</p>
            <a
              href="mailto:your@email.com"
              className="text-sm text-slate-200 transition-colors hover:text-cyan-400"
            >
              your@email.com
            </a>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-800 bg-slate-900/40 text-cyan-400">
            <MapPin size={16} />
          </span>
          <div>
            <p className="text-xs text-slate-500">Location</p>
            <p className="text-sm text-slate-200">Open to remote &amp; on-site</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-800 bg-slate-900/40 text-cyan-400">
            <Clock size={16} />
          </span>
          <div>
            <p className="text-xs text-slate-500">Response time</p>
            <p className="text-sm text-slate-200">Within 24–48 hours</p>
          </div>
        </div>
      </div>
    </div>
  );
}
