import { SkillFields } from "@/src/types/Contentful";
import { CircularProgressBar } from "../CircularProgressBar/CircularProgressBar";
import { Tooltip } from "@nextui-org/tooltip";
import { useEffect, useState } from "react";
import { Tooltip as ReactToolTip } from "react-tooltip";

export const CustomToolTip = (props: {
  children: React.ReactNode;
  skill: SkillFields;
}) => {
  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return screenWidth > 767 ? (
    <Tooltip
      placement="bottom"
      showArrow={true}
      content={
        <CircularProgressBar
          value={props.skill.percentage}
          color={props.skill.color}
          name={props.skill.name}
        />
      }
    >
      {props.children}
    </Tooltip>
  ) : (
    <div>
      <a data-tooltip-id={props.skill.name}>{props.children} </a>
      <ReactToolTip id={props.skill.name} events={["click"]} place="bottom">
        <CircularProgressBar
          value={props.skill.percentage}
          color={props.skill.color}
          name={props.skill.name}
        />
      </ReactToolTip>
    </div>
  );
};
