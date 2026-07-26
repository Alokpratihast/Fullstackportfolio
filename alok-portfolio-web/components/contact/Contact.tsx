import ContactInfo from "./Contactinfo";
import ContactForm from "./Contactform";

export default function Contact() {
  return (
    <section id="contact" className="bg-[#0A0F1D] py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section header */}
        <div className="mb-14 text-center">
          <span className="font-mono text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Contact
          </span>

          <h2 className="mt-3 text-4xl font-bold text-white">
            Get in touch
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
