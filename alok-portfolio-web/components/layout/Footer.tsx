import FooterBrand from "./FooterBrand";
import FooterNav from "./FooterNav";
import FooterConnect from "./FooterConnect";
import FooterBottom from "./FooterBottom";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-[#080C17] py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr]">
          <FooterBrand />
          <FooterNav />
          <FooterConnect />
        </div>

        <FooterBottom />
      </div>
    </footer>
  );
}
