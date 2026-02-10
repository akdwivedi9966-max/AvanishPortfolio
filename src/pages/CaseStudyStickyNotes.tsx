import CaseStudyLayout from "@/components/CaseStudyLayout";

const CaseStudyStickyNotes = () => (
  <CaseStudyLayout
    title="Sticky Notes"
    subtitle="Productivity App"
    tags={["Feature Planning", "UX Design", "Clean UI", "Prototype"]}
    sections={[
      {
        title: "Problem",
        content: "Daily task management apps are often overcomplicated. Users need a simple, fast way to capture thoughts and tasks without friction — like digital sticky notes.",
      },
      {
        title: "Feature Planning",
        content: "Defined core features: quick note creation, color coding, drag-to-reorder, and archive. Intentionally excluded complex features like calendars and reminders to keep it minimal.",
        image: false,
      },
      {
        title: "User Journey",
        content: "Mapped the flow from app open → quick capture → organize → review. The goal was zero-tap note creation — open the app and start typing immediately.",
      },
      {
        title: "Low-Fi to High-Fi",
        content: "Started with paper sketches, moved to grayscale wireframes, and iterated to high-fidelity mockups. Each stage was tested with 5 users for usability feedback.",
      },
      {
        title: "Clean UI",
        content: "The final UI features a card-based layout with soft shadows, generous whitespace, and a warm neutral palette. Typography is clear and scannable.",
      },
      {
        title: "Prototype",
        content: "Built an interactive Figma prototype with micro-interactions: swipe to delete, long-press to change color, and smooth transition animations between views.",
      },
    ]}
  />
);

export default CaseStudyStickyNotes;
