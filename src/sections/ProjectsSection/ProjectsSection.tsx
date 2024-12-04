import { Inter } from "next/font/google";
import { ProjectCard } from "@/src/components/ProjectCard/ProjectCard";
import { useEffect } from "react";
import { ProjectSection as ProjectResponse } from "@/src/types/Contentful";
const interRegular = Inter({
  weight: "400",
  subsets: ["latin"],
});
export const ProjectSection = (props: { data: ProjectResponse[] }) => {
  useEffect(() => {}, []);

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
            Projects
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
            Projects/ Clients that i have worked with
          </span>
        </div>
      </div>

      <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
        <div className="flex flex-nowrap lg:ml-40 md:ml-20 ml-10 ">
          {props.data
            .sort((a, b) => a.fields.order - b.fields.order)
            .map((element, index) => {
              return <ProjectCard key={index} data={element.fields} />;
            })}
        </div>
      </div>
    </section>
  );
};
