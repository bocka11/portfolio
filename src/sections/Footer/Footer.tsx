import { FaRegCopyright } from "react-icons/fa";
import { Inter } from "next/font/google";
const interRegular = Inter({
  weight: "400",
  subsets: ["latin"],
});

const Footer = () => {
  return (
    <footer className="flex flex-row justify-center items-center pt-5 pb-5 md:pt-16 md:pb-10 gap-2">
      <FaRegCopyright size={20} />
      <span className={interRegular.className}>
        2024 Boban Todosov. All Rights Reserved
      </span>
    </footer>
  );
};

export default Footer;
