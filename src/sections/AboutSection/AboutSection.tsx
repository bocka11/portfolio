import { AboutSectionFields } from "@/src/types/Contentful";
import { Inter } from "next/font/google";

const interRegular = Inter({
  weight: "400",
  subsets: ["latin"],
});

export const AboutSection = (props: { data: AboutSectionFields }) => {
  return (
    <section className="flex flex-col gap-5">
      <div>
        <span
          className={`${interRegular.className} text-2xl`}
          style={{
            color: "#44AAFF",
          }}
        >
          About
        </span>
      </div>
      <div>
        <span
          className={`${interRegular.className} text-5xl md:text-6xl leading-tight `}
        >
          {props.data.title}
        </span>
      </div>
      <div>
        <span
          className={`${interRegular.className} text-xl`}
          style={{
            color: "#999999",
          }}
        >
          {props.data.description}
        </span>
      </div>
    </section>
  );
};
