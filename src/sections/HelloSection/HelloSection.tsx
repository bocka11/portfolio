import { HelloSectionFields } from "@/src/types/Contentful";
import { Inter } from "next/font/google";

const interRegular = Inter({
  weight: "400",
  subsets: ["latin"],
});
export const HelloSection = (props: { data: HelloSectionFields }) => {
  return (
    <section className="flex flex-col gap-10">
      <div>
        <span
          className={`${interRegular.className} text-2xl`}
          style={{
            color: "#44AAFF",
          }}
        >
          Hello
        </span>
      </div>
      <div>
        <span
          className={`${interRegular.className} text-5xl md:text-6xl leading-tight `}
          style={{
            wordWrap: "break-word",
          }}
        >
          {props.data.title}
        </span>
      </div>
      <div>
        <span
          className={`${interRegular.className} text-xl`}
          style={{
            color: "#999999",
            wordWrap: "break-word",
          }}
        >
          {props.data.description}
        </span>
      </div>
    </section>
  );
};
