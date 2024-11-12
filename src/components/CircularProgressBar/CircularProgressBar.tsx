import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
export const CircularProgressBar: any = (props: {
  value: number;
  color: string;
  name: string;
}) => {
  return (
    <div className="flex flex-col items-center gap-1">
      <span>{props.name}</span>
      <div
        style={{
          width: 75,
          height: 75,
        }}
      >
        <CircularProgressbar
          value={props.value}
          maxValue={1}
          text={`${props.value * 100}%`}
          strokeWidth={14}
          styles={buildStyles({
            pathColor: props.color,
            textColor: props.color,
          })}
        />
      </div>
    </div>
  );
};
