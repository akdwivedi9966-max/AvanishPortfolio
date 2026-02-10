import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
      onMouseMove={handleMouseMove}
    >
      {/* Dynamic mouse-following gradient */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full blur-[150px] opacity-20 transition-all duration-700 ease-out pointer-events-none"
        style={{
          left: `${mousePos.x}%`,
          top: `${mousePos.y}%`,
          transform: 'translate(-50%, -50%)',
          background: `radial-gradient(circle, hsl(262 83% 58% / 0.6), hsl(198 93% 55% / 0.3), transparent)`,
        }}
      />

      {/* Animated gradient orbs - multi-color */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[hsl(262_83%_58%/0.15)] rounded-full blur-[120px] animate-float-slow" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-[hsl(198_93%_55%/0.1)] rounded-full blur-[150px] animate-float-slow-reverse" />
      <div className="absolute top-[20%] left-[60%] w-[400px] h-[400px] bg-[hsl(330_81%_60%/0.08)] rounded-full blur-[130px] animate-float-slow" style={{ animationDelay: '5s' }} />
      <div className="absolute bottom-[20%] right-[10%] w-[300px] h-[300px] bg-[hsl(142_71%_45%/0.06)] rounded-full blur-[100px] animate-float-slow-reverse" style={{ animationDelay: '3s' }} />

      {/* Mesh gradient background */}
      <div className="absolute inset-0 bg-mesh-gradient" />

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid opacity-30" />

      {/* Radial fade */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,hsl(var(--background))_70%)]" />

      {/* Floating colored particles */}
      {[
        { top: '20%', left: '15%', size: 'w-2 h-2', color: 'bg-[hsl(262_83%_58%/0.6)]', delay: '0s' },
        { top: '30%', left: '75%', size: 'w-1.5 h-1.5', color: 'bg-[hsl(198_93%_55%/0.5)]', delay: '1s' },
        { top: '60%', left: '25%', size: 'w-1 h-1', color: 'bg-[hsl(330_81%_60%/0.5)]', delay: '2s' },
        { top: '70%', left: '80%', size: 'w-2.5 h-2.5', color: 'bg-[hsl(142_71%_45%/0.4)]', delay: '3s' },
        { top: '45%', left: '50%', size: 'w-1.5 h-1.5', color: 'bg-[hsl(262_83%_58%/0.4)]', delay: '1.5s' },
        { top: '15%', left: '55%', size: 'w-1 h-1', color: 'bg-[hsl(198_93%_55%/0.6)]', delay: '2.5s' },
      ].map((p, i) => (
        <div
          key={i}
          className={`absolute ${p.size} rounded-full ${p.color} animate-pulse-glow`}
          style={{ top: p.top, left: p.left, animationDelay: p.delay }}
        />
      ))}

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-6 border border-border gradient-border">
            <Sparkles size={14} className="text-[hsl(330_81%_60%)]" />
            Product Designer · Noida, India
          </span>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Hi, I'm{" "}
          <span className="text-gradient">Avanish</span>
          <br />
          <span className="text-muted-foreground text-3xl md:text-4xl font-medium">
            Product Designer with a Technical Edge
          </span>
        </motion.h1>

        <motion.p
          className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          I blend Computer Science thinking with user-centered design to craft
          intuitive, scalable digital products that developers love to build.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-[hsl(262_83%_58%)] to-[hsl(198_93%_55%)] hover:from-[hsl(262_83%_50%)] hover:to-[hsl(198_93%_45%)] text-primary-foreground glow-hover"
            onClick={() => document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" })}
          >
            View Work <ArrowRight className="ml-2" size={18} />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="gradient-border glow-hover"
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Contact Me
          </Button>
        </motion.div>

        <motion.div
          className="mt-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <ArrowDown className="mx-auto text-muted-foreground animate-bounce" size={24} />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
