import { SkillComponent } from "@/src/components/SkillComponent/SkillComponent";

export const ExperienceSection = () => {
  return (
    <section className="flex flex-col md:flex-row justify-between">
      <SkillComponent count="4+" type="Years of Experience" />
      <SkillComponent count="10+" type="Completed Projects" />
      <SkillComponent count="5+" type="HappyClients" />
    </section>
  );
};
