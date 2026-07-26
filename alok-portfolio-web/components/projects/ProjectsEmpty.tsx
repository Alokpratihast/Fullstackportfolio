import { FolderGit2 } from "lucide-react";

export default function ProjectsEmpty() {
  return (
    <div className="rounded-xl border border-dashed border-slate-800 bg-slate-900/20 py-16 text-center">
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-slate-800 bg-slate-950/60">
        <FolderGit2 className="h-5 w-5 text-slate-500" />
      </div>

      <h3 className="mt-4 text-lg font-semibold text-white">
        No projects yet
      </h3>

      <p className="mx-auto mt-2 max-w-sm text-sm text-slate-500">
        Add your first project from the admin dashboard and it will show up
        here.
      </p>
    </div>
  );
}
