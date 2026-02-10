import CaseStudyLayout from "@/components/CaseStudyLayout";

const CaseStudyMath4Kids = () => (
  <CaseStudyLayout
    title="Math4Kids"
    subtitle="Educational Product"
    tags={["User Research", "UI Design", "Prototyping", "Figma"]}
    sections={[
      {
        title: "Problem",
        content: "Children often struggle with math because traditional learning methods lack engagement. The challenge was to create a product that makes math fun, interactive, and rewarding for young learners aged 5–10.",
      },
      {
        title: "Research",
        content: "I conducted competitor analysis of existing educational apps and interviewed parents and teachers to understand pain points. Key findings: kids need instant feedback, gamification boosts retention, and short sessions work best.",
      },
      {
        title: "User Flow",
        content: "Mapped out the end-to-end user journey — from onboarding (age selection, skill level) through lesson modules, practice exercises, to progress tracking and rewards.",
      },
      {
        title: "Wireframes",
        content: "Created low-fidelity wireframes to explore layout options, navigation patterns, and content hierarchy. Iterated based on feedback from stakeholders.",
      },
      {
        title: "High-Fidelity UI",
        content: "Designed pixel-perfect screens in Figma with a playful color palette, custom illustrations, and intuitive touch interactions optimized for tablets.",
      },
      {
        title: "Key Decisions",
        content: "Chose a modular lesson structure to allow easy content updates. Opted for gamified progress (stars, streaks) over traditional scoring. Used large touch targets for young users.",
        image: true,
      },
      {
        title: "Outcome",
        content: "The final prototype demonstrated improved engagement in user testing, with children completing 40% more practice sessions compared to the baseline app concept.",
      },
    ]}
  />
);

export default CaseStudyMath4Kids;
