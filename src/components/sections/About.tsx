import { motion } from "framer-motion";
import { Users, Lightbulb, Code, Box } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const strengths = [
  { icon: Users, title: "User-Centered Thinking", desc: "Empathy-driven design rooted in real user needs and behaviors.", gradient: "from-[hsl(262_83%_58%)] to-[hsl(198_93%_55%)]" },
  { icon: Lightbulb, title: "Product Problem Solving", desc: "Breaking complex problems into elegant, simple solutions.", gradient: "from-[hsl(198_93%_55%)] to-[hsl(142_71%_45%)]" },
  { icon: Code, title: "Developer-Friendly Design", desc: "Designing feasible interfaces that respect engineering constraints.", gradient: "from-[hsl(330_81%_60%)] to-[hsl(262_83%_58%)]" },
  { icon: Box, title: "Interaction & 3D Design", desc: "Crafting immersive experiences with motion and spatial design.", gradient: "from-[hsl(142_71%_45%)] to-[hsl(198_93%_55%)]" },
];

const About = () => {
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-mesh-gradient opacity-50" />
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-16 items-center mb-20"
        >
          {/* Photo placeholder with gradient border */}
          <div className="aspect-[5/5] rounded-2xl border border-border gradient-border glow-hover overflow-hidden">
  <img
    src="/AvanishProfile.jpeg"
    alt="Profile"
    className="w-full h-full object-cover"
  />
</div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I'm a Product Design enthusiast with a Computer Science background specializing in AI & Machine Learning.
              My technical foundation gives me a unique perspective — I understand what's feasible, how systems work,
              and where design meets implementation.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I transitioned into Product Design because I believe great products are born at the intersection of
              user empathy and technical understanding. I bring experience in user research, wireframing,
              prototyping, and frontend development to every project.
            </p>
          </div>
        </motion.div>

        {/* Strengths */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {strengths.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="h-full border-border/50 gradient-border glow-hover group cursor-default">
                <CardContent className="p-6">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${s.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <s.icon className="text-primary-foreground" size={22} />
                  </div>
                  <h3 className="font-semibold mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
