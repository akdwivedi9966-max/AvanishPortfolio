import CaseStudyLayout from "@/components/CaseStudyLayout";

const CaseStudy3D = () => (
  <CaseStudyLayout
    title="3D Interactive Website"
    subtitle="Immersive Web Experience"
    tags={["Interaction Design", "Spline", "Dora", "Web3D"]}
    sections={[
      {
        title: "Goal",
        content: "Create a visually striking website that uses 3D elements to boost user engagement, reduce bounce rates, and make the brand experience memorable.",
      },
      {
        title: "Tools Used",
        content: "Leveraged Spline for 3D scene creation and Dora for no-code web deployment. Combined with custom CSS animations for seamless page transitions.",
        image: false,
      },
      {
        title: "Interaction Design",
        content: "Designed scroll-triggered 3D animations, hover-responsive objects, and parallax depth effects. Every interaction was purposeful — enhancing storytelling without overwhelming the user.",
      },
      {
        title: "Implementation",
        content: "Embedded Spline scenes directly into the website, optimized for performance with lazy loading and compressed assets. Ensured graceful fallbacks for older browsers.",
      },
      {
        title: "Impact",
        content: "The 3D interactive version showed a 35% increase in average session duration and a 20% reduction in bounce rate compared to the static version during A/B testing.",
      },
    ]}
  />
);

export default CaseStudy3D;
