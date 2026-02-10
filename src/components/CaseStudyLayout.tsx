import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { ReactNode } from "react";

interface Section {
  title: string;
  content: ReactNode;
  image?: boolean;
}

interface Props {
  title: string;
  subtitle: string;
  tags: string[];
  sections: Section[];
}

const CaseStudyLayout = ({ title, subtitle, tags, sections }: Props) => {
  return (
    <div className="min-h-screen pt-20 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        <Link to="/#work" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
          <ArrowLeft size={16} /> Back to Work
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-medium text-sm uppercase tracking-wider mb-2">{subtitle}</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
          <div className="flex flex-wrap gap-2 mb-8">
            {tags.map((t) => (
              <Badge key={t} variant="secondary">{t}</Badge>
            ))}
          </div>
        </motion.div>

        {/* Progress */}
        <div className="mb-12">
          <div className="flex justify-between text-xs text-muted-foreground mb-2">
            {sections.map((s, i) => (
              <span key={i} className="hidden sm:inline">{s.title}</span>
            ))}
          </div>
          <Progress value={100} className="h-1" />
        </div>

        {/* Sections */}
        <div className="space-y-16">
          {sections.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 }}
            >
              <h2 className="text-2xl font-bold mb-4">{s.title}</h2>
              <div className="text-muted-foreground leading-relaxed mb-6">{s.content}</div>
              {s.image !== false && (
                <div className="aspect-video bg-muted rounded-xl border border-border flex items-center justify-center">
                  <span className="text-sm text-muted-foreground">Image Placeholder — {s.title}</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudyLayout;
