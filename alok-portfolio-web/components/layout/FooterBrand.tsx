import Link from "next/link";

export default function FooterBrand() {
  return (
    <div className="max-w-sm">
      <Link href="/" className="text-2xl font-extrabold tracking-tight">
        <span className="text-white">Alok</span>
        <span className="text-cyan-400">.</span>
      </Link>

      <p className="mt-4 text-sm leading-relaxed text-slate-400">
        Full stack developer building scalable, secure web applications with
        ASP.NET Core, Angular, and Next.js.
      </p>
    </div>
  );
}
