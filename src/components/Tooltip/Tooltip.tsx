import { SkillFields } from "@/src/types/Contentful";
import { CircularProgressBar } from "../CircularProgressBar/CircularProgressBar";
import { Tooltip } from "@nextui-org/tooltip";

export const CustomToolTip = (props: {
  children: React.ReactNode;
  skill: SkillFields;
}) => {
  return (
    <Tooltip
      placement="bottom"
      content={
        <CircularProgressBar
          value={props.skill.percentage}
          color={props.skill.color}
          name={props.skill.name}
        />
      }
    >
      {props.children}
      {/* <FaNodeJs color={skill.fields.color} size={60} /> */}
    </Tooltip>
  );
};
