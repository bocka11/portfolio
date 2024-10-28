import { InfoSection } from "@/src/sections/InfoSection/InfoSection";
import { HelloSection } from "@/src/sections/HelloSection/HelloSection";
import { ExperienceSection } from "@/src/sections/ExperienceSection/ExpreienceSection";
import { AboutSection } from "@/src/sections/AboutSection/AboutSection";
import { CareerSection } from "@/src/sections/CareerSection/CareerSection";
import { SkillsSection } from "@/src/sections/SkillsSection/SkillsSection";
import { ContactSection } from "@/src/sections/ContactSection/ContactSection";
export default function Home() {
  return (
    <div className="flex flex-col items-center md:items-start md:flex-row md:gap-10 gap-20">
      <div className="left-section">
        <InfoSection />
      </div>
      <div className="right-section flex flex-col gap-5 md:gap-10 w-full">
        <HelloSection />
        <ExperienceSection />
        <AboutSection />
        <CareerSection />
        <SkillsSection />
        <ContactSection />
      </div>
    </div>
  );
}
