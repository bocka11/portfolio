import { Inter } from "next/font/google";
import { FaReact, FaNodeJs, FaAngular, FaDocker, FaAws } from "react-icons/fa";
import { SiKubernetes, SiSanity, SiServerless } from "react-icons/si";
const interRegular = Inter({
  weight: "400",
  subsets: ["latin"],
});

export const SkillsSection = () => {
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
            Skills
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
            My Skills & Knowledge
          </span>
        </div>
      </div>
      <div className="flex flex-row flex-wrap justify-around md:justify-between">
        <FaReact color="#999999" size={60} />
        <FaNodeJs color="#999999" size={60} />
        <FaAngular color="#999999" size={60} />
        <FaDocker color="#999999" size={60} />
        <FaAws color="#999999" size={60} />
        <SiServerless color="#999999" size={60} />
        <SiSanity color="#999999" size={60} />
        <SiKubernetes color="#999999" size={60} />
      </div>
    </section>
  );
};
