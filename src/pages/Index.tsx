import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import CaseStudies from "@/components/sections/CaseStudies";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";

const Index = () => {
  return (
    <div className="bg-noise">
      <Navbar />
      <main>
        <Hero />
        <About />
        <CaseStudies />
        <Skills />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
