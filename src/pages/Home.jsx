import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills.jsx";
import Projects from "../components/Projects";
import ResumeSection from "../components/ResumeSection";
import ContactForm from "../components/ContactForm";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills compact />
      <Projects compact />
      <ResumeSection />
      <ContactForm />
    </>
  );
}
