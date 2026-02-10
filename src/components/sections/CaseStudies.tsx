import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const studies = [
  {
    slug: "pg-web-design",
    title: "PG Accommodation Website",
    subtitle: "Booking & Listing Platform",
    desc: "Designed a user-friendly PG accommodation website focused on easy room discovery, comparison, and quick booking with clear pricing, amenities, and location insights.",
    tags: ["UX Research", "Web UI Design", "Booking Flow", "Responsive Design"],
    figmaLink:
      "https://www.figma.com/proto/YBz5owWhOvfsN6qxEabTh6/Apna-Thikana-Pg?t=K7RZd1jSszBkeOlF-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&node-id=0-847",
    gradient:
      "from-[hsl(330_81%_60%/0.2)] via-[hsl(262_83%_58%/0.1)] to-transparent",
    accentColor: "text-[hsl(330_81%_60%)]",
    image: "/PG.png",
  },

  {
    slug: "travel-dmc-website",
    title: "Travel DMC Website",
    subtitle: "Tours & Destination Platform",
    desc: "Designed a conversion-focused Travel DMC website that helps users explore destinations, compare tour packages, and request custom itineraries with a smooth inquiry and booking experience.",
    tags: ["UX Research", "Web UI Design", "Package Listing", "Booking Flow"],
    figmaLink:
      "https://www.figma.com/proto/uEzTbhgbsZmC8BRI2JoV7R/Wendera-DMC?t=Eumvx4TRTGsfBUVd-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&node-id=1-613",
    gradient:
      "from-[hsl(198_93%_55%/0.2)] via-[hsl(262_83%_58%/0.1)] to-transparent",
    accentColor: "text-[hsl(198_93%_55%)]",
    image: "/Wendera.png",
  },

  {
    slug: "math4kids",
    title: "Math4Kids",
    subtitle: "Educational Product",
    desc: "Making math learning engaging and fun for children through gamified interactive experiences.",
    tags: ["User Research", "UI Design", "Prototyping"],
    // figmaLink: "https://figma.com/your-math-link",
    gradient:
      "from-[hsl(262_83%_58%/0.2)] via-[hsl(330_81%_60%/0.1)] to-transparent",
    accentColor: "text-[hsl(262_83%_58%)]",
    image: "/Math4kids.png",
  },

  {
    slug: "sticky-notes",
    title: "Sticky Notes",
    subtitle: "Productivity App",
    desc: "A clean, minimal task management tool designed for daily productivity and quick capture.",
    tags: ["Feature Planning", "UX Design", "Clean UI"],
    // figmaLink: "https://figma.com/your-sticky-link",
    gradient:
      "from-[hsl(198_93%_55%/0.2)] via-[hsl(142_71%_45%/0.1)] to-transparent",
    accentColor: "text-[hsl(198_93%_55%)]",
    image: "/Sticky.png",
  },

  {
    slug: "3d-interactive",
    title: "3D Interactive Website",
    subtitle: "Immersive Web Experience",
    desc: "Boosting user engagement through 3D interactions built with Spline and Dora.",
    tags: ["Interaction Design", "Spline", "Dora"],
    // figmaLink: "https://figma.com/your-3d-link",
    gradient:
      "from-[hsl(330_81%_60%/0.2)] via-[hsl(262_83%_58%/0.1)] to-transparent",
    accentColor: "text-[hsl(330_81%_60%)]",
    image: "/3d.png",
  },
];

const CaseStudies = () => {
  return (
    <section id="work" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Selected <span className="text-gradient">Work</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Some of my work in the Designing of the product.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {studies.map((s, i) => (
            <motion.div
              key={s.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="group h-full border-border/50 overflow-hidden gradient-border glow-hover">

                {/* Image */}
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* FIX: overlay does not block clicks */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${s.gradient} opacity-40 pointer-events-none`}
                  />
                </div>

                {/* Content */}
                <CardContent className="p-6">
                  <p className={`text-xs font-medium uppercase mb-1 ${s.accentColor}`}>
                    {s.subtitle}
                  </p>

                  <h3 className="text-xl font-bold mb-2 group-hover:text-gradient transition-colors">
                    {s.title}
                  </h3>

                  <p className="text-sm text-muted-foreground mb-4">
                    {s.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {s.tags.map((t) => (
                      <Badge key={t} variant="secondary" className="text-xs">
                        {t}
                      </Badge>
                    ))}
                  </div>

                  {/* View Design Button */}
                  {s.figmaLink && (
                    <a
                      href={s.figmaLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-gradient font-medium cursor-pointer relative z-10 hover:gap-2 transition-all"
                    >
                      View Design <ArrowRight size={14} />
                    </a>
                  )}
                </CardContent>

              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
