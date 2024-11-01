import { Inter } from "next/font/google";
import { CustomToolTip } from "@/src/components/Tooltip/Tooltip";
import { FaReact, FaNodeJs, FaAngular, FaDocker, FaAws } from "react-icons/fa";
import { SiKubernetes, SiSanity, SiServerless } from "react-icons/si";
import { Skill as SkillResponse } from "@/src/types/Contentful";
const interRegular = Inter({
  weight: "400",
  subsets: ["latin"],
});

export const SkillsSection = (props: { data: SkillResponse[] }) => {
  console.log("Props: ", props);
  return (
    <section className="flex flex-col gap-6 md:gap-20">
      <div className="flex flex-col gap-2 md:gap-5">
        <div>
          <span
            className={interRegular.className}
            style={{
              fontSize: "24px",
              lineHeight: "34px",
              color: "#44AAFF",
            }}
          >
            Skills
          </span>
        </div>
        <div>
          <span
            className={interRegular.className}
            style={{
              fontSize: "40px",
              lineHeight: "48px",
            }}
          >
            My Skills & Knowledge
          </span>
        </div>
      </div>
      <div className="flex flex-row flex-wrap justify-around md:justify-between">
        {props.data.map((skill, index) => {
          switch (skill.fields.name) {
            case "Nodejs":
              return (
                <CustomToolTip skill={skill.fields} key={index}>
                  <FaNodeJs color={skill.fields.color} size={60} />
                </CustomToolTip>
              );
            case "React":
              return (
                <CustomToolTip skill={skill.fields} key={index}>
                  <FaReact color={skill.fields.color} size={60} />
                </CustomToolTip>
              );
            case "Angular":
              return (
                <CustomToolTip skill={skill.fields} key={index}>
                  <FaAngular color={skill.fields.color} size={60} />
                </CustomToolTip>
              );
            case "Docker":
              return (
                <CustomToolTip skill={skill.fields} key={index}>
                  <FaDocker color={skill.fields.color} size={60} />
                </CustomToolTip>
              );
            case "AWS":
              return (
                <CustomToolTip skill={skill.fields} key={index}>
                  <FaAws color={skill.fields.color} size={60} />
                </CustomToolTip>
              );
            case "Serverless":
              return (
                <CustomToolTip skill={skill.fields} key={index}>
                  <SiServerless color={skill.fields.color} size={60} />
                </CustomToolTip>
              );
            case "Sanity":
              return (
                <CustomToolTip skill={skill.fields} key={index}>
                  <SiSanity color={skill.fields.color} size={60} />
                </CustomToolTip>
              );
            case "Kubernetes":
              return (
                <CustomToolTip skill={skill.fields} key={index}>
                  <SiKubernetes color={skill.fields.color} size={60} />
                </CustomToolTip>
              );
          }
        })}
      </div>
    </section>
  );
};
