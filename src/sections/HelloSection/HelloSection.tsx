import { Inter } from "next/font/google";

const interRegular = Inter({
  weight: "400",
  subsets: ["latin"],
});
export const HelloSection = () => {
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
          I'm Boban, Full Stack Software Developer
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
          I craft elegant solutions to complex problems, and it gives me
          pleasure. I'm living in Skopje and looking for new challenges.
        </span>
      </div>
    </section>
  );
};
