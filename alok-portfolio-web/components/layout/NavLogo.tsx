import Link from "next/link";

export default function NavLogo() {
  return (
    <Link href="/" className="group flex items-center">
      <span className="text-2xl font-extrabold tracking-tight">
        <span className="text-white transition-colors duration-300 group-hover:text-cyan-400">
          Alok
        </span>
        <span className="text-cyan-400">.</span>
      </span>
    </Link>
  );
}
