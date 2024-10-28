import { Inter } from "next/font/google";
import { ExperienceComponent } from "@/src/components/ExperienceComponent/ExperienceComponent";
const interRegular = Inter({
  weight: "400",
  subsets: ["latin"],
});

export const CareerSection = () => {
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
        <ExperienceComponent
          from="November 2021"
          to="September 2024"
          description="Full Stack Developer @ PCG International"
        />
        <ExperienceComponent
          from="February 2021"
          to="November 2021"
          description="Full Stack Developer @ Digitex Systems"
        />
        <ExperienceComponent
          from="March 2020"
          to="present"
          description="Full Stack Developer @ Freelance"
        />
      </div>
    </section>
  );
};
