import Image from "next/image";
import { Inter } from "next/font/google";
import { ProjectFields } from "@/src/types/Contentful";
const interRegular = Inter({
  weight: "400",
  subsets: ["latin"],
});
export const ProjectCard = (props: { data: ProjectFields }) => {
  return (
    <div className="inline-block px-3">
      <div className="w-60 h-64  rounded-3xl bg-slate-800 border-white border-2">
        <div className="flex flex-col gap-3 h-full justify-center items-center p-5">
          <Image
            src={`https:${props.data.logo.fields.file.url}`}
            alt={"logo"}
            height={120}
            width={120}
          />
          <span className={`${interRegular.className} text-2xl`}>
            {props.data.name}
          </span>
          <div></div>
          <span
            className={`${interRegular.className} text-base underline break-all justify-self-end `}
          >
            Learn more
          </span>
        </div>
      </div>
    </div>
  );
};
