import { motion } from "framer-motion";
import { Mail, Linkedin, FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-mesh-gradient opacity-40" />
      <div className="max-w-2xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-muted-foreground mb-10">
            I'm open to Product Designer roles and freelance collaborations.
            Feel free to reach out!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-[hsl(262_83%_58%)] to-[hsl(198_93%_55%)] hover:from-[hsl(262_83%_50%)] hover:to-[hsl(198_93%_45%)] text-primary-foreground glow-hover"
            >
              <a href="mailto:akdwivedi9966@gmail.com">
                <Mail size={18} className="mr-2" /> Email Me
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild className="gradient-border glow-hover">
              <a href="https://www.linkedin.com/in/avanish-dwivedi-9670a1323/" target="_blank" rel="noopener noreferrer">
                <Linkedin size={18} className="mr-2" /> LinkedIn
              </a>
            </Button>
           <a href="/Avanish_Resume.pdf" download>
  <Button variant="outline" size="lg" className="gradient-border glow-hover">
    <FileDown size={18} className="mr-2" />
    Download Resume
  </Button>
</a>

          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="mt-24 pt-8 border-t border-border text-center relative z-10">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Avanish Kumar Dwivedi. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Contact;
