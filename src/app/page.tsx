import FadeSection from "@/components/animation/FadeSection";
import HeroSection from "@/components/hero/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import ProjectsSection from "@/components/sections/ProjectsSection";

export default function Home() {
  return (
    <main>
      <FadeSection 
        withBorderTop={false}
        withScrollMarginTop={false}
        useContainer={false}
        center={false}
        fullHeight={false}
      >
        <HeroSection />
      </FadeSection>

      <FadeSection id="about">
        <AboutSection />
      </FadeSection>
      
      <FadeSection id="projects">
        <ProjectsSection />
      </FadeSection>
      
      <FadeSection id="contact">
        <ContactSection />
      </FadeSection>
      
    </main>
  )
}
