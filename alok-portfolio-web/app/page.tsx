import Hero from "@/components/hero/Hero";
import Navbar from "@/components/layout/Navbar";
import Projects from "@/components/projects/Projects";
import Skills from "@/components/skills/Skills";
import Experience from "@/components/experience/Experience";
import Contact from "@/components/contact/Contact";
import Education from "@/components/education/Education";
import Certificates from "@/components/certificates/Certificates";
import SocialLinks from "@/components/social-links/SocialLinks";
import Footer from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main className="bg-[#080C17]">
        <Hero />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
        <Education />
        <Certificates />
        <Footer />
      </main>
    </>
  );
}