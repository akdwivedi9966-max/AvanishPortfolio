import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const skills = [
  "User Research", "Wireframing", "Prototyping", "Interaction Design",
  "Design Systems", "Responsive Design", "Frontend Feasibility",
  "Usability Testing", "Information Architecture", "Visual Design",
];

const tools = [
  { name: "Figma", icon: "🎨", gradient: "from-[hsl(262_83%_58%/0.15)] to-[hsl(330_81%_60%/0.1)]" },
  { name: "Webflow", icon: "🌐", gradient: "from-[hsl(198_93%_55%/0.15)] to-[hsl(262_83%_58%/0.1)]" },
  { name: "Spline", icon: "🧊", gradient: "from-[hsl(142_71%_45%/0.15)] to-[hsl(198_93%_55%/0.1)]" },
  { name: "Dora", icon: "✨", gradient: "from-[hsl(330_81%_60%/0.15)] to-[hsl(262_83%_58%/0.1)]" },
  { name: "Canva", icon: "🖼", gradient: "from-[hsl(262_83%_58%/0.15)] to-[hsl(198_93%_55%/0.1)]" },
  { name: "HTML/CSS", icon: "💻", gradient: "from-[hsl(198_93%_55%/0.15)] to-[hsl(142_71%_45%/0.1)]" },
  { name: "JavaScript", icon: "⚡", gradient: "from-[hsl(330_81%_60%/0.15)] to-[hsl(142_71%_45%/0.1)]" },
  { name: "React", icon: "⚛️", gradient: "from-[hsl(198_93%_55%/0.15)] to-[hsl(330_81%_60%/0.1)]" },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-mesh-gradient opacity-30" />
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Skills & <span className="text-gradient">Tools</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A blend of design expertise and technical know-how.
          </p>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {skills.map((s, i) => (
            <motion.div
              key={s}
              whileHover={{ scale: 1.08, y: -2 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Badge
                variant="outline"
                className="px-5 py-2.5 text-sm hover:bg-gradient-to-r hover:from-[hsl(262_83%_58%/0.15)] hover:to-[hsl(198_93%_55%/0.15)] hover:border-[hsl(262_83%_58%/0.3)] transition-all cursor-default"
              >
                {s}
              </Badge>
            </motion.div>
          ))}
        </motion.div>

        {/* Tools */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto"
        >
          {tools.map((t) => (
            <motion.div
              key={t.name}
              whileHover={{ scale: 1.05, y: -4 }}
              transition={{ type: "spring", stiffness: 300 }}
              className={`flex flex-col items-center gap-2 p-6 rounded-xl bg-gradient-to-br ${t.gradient} border border-border/50 gradient-border glow-hover cursor-default`}
            >
              <span className="text-3xl">{t.icon}</span>
              <span className="text-sm font-medium">{t.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
