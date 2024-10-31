import { SkillComponent } from "@/src/components/SkillComponent/SkillComponent";
import { ExperienceSectionFields } from "@/src/types/Contentful";

export const ExperienceSection = (props: { data: ExperienceSectionFields }) => {
  return (
    <section className="flex flex-col md:flex-row justify-between">
      <SkillComponent
        count={`${props.data.yearsOfExperience}+`}
        type="Years of Experience"
      />
      <SkillComponent
        count={`${props.data.completedProjects}+`}
        type="Completed Projects"
      />
      <SkillComponent
        count={`${props.data.totalClients}+`}
        type="HappyClients"
      />
    </section>
  );
};
