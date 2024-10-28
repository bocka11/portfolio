import { Inter } from "next/font/google";

const interRegular = Inter({
  weight: "400",
  subsets: ["latin"],
});

export const AboutSection = () => {
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
          Every great product begin with an even better story
        </span>
      </div>
      <div>
        <span
          className={`${interRegular.className} text-xl`}
          style={{
            color: "#999999",
          }}
        >
          Since beginning my journey as a software developer four years ago,
          I've worked remotely with agencies, consulted for startups, and
          collaborated with talented teams to build digital solutions for both
          business and consumer use. I'm quietly confident, naturally curious,
          and continually focused on honing my skills, one coding challenge at a
          time.
        </span>
      </div>
    </section>
  );
};
