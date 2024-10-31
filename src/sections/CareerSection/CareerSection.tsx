import { Inter } from "next/font/google";
import moment from "moment";
import { ExperienceComponent } from "@/src/components/ExperienceComponent/ExperienceComponent";
import { CareerSection as CareerSectionResponse } from "@/src/types/Contentful";
const interRegular = Inter({
  weight: "400",
  subsets: ["latin"],
});

export const CareerSection = (props: { data: CareerSectionResponse[] }) => {
  return (
    <section className="flex flex-col gap-10">
      <div className="flex flex-col gap-5">
        <div>
          <span
            className={interRegular.className}
            style={{
              fontSize: "24px",
              lineHeight: "34px",
              color: "#44AAFF",
            }}
          >
            Career
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
            Education & Experience
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-10">
        {props.data.map((entry, index) => {
          const data = entry.fields;
          return (
            <ExperienceComponent
              key={index}
              from={moment(data.startDate).format("MMMM YYYY")}
              to={moment(data.endDate).format("MMMM YYYY")}
              description={data.description}
              currentlyWorking={data.currentlyWorking}
            />
          );
        })}
      </div>
    </section>
  );
};
