"use client";
import Image from "next/image";
import profilePicture from "../../../public/boban.jpg";
import { CustomButton } from "../CustomButton/CustomButton";
import { FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const InfoCard = () => {
  function scrollToHireMe() {
    // Select the element you want to scroll to
    const element = document.getElementById("contact") as HTMLElement;

    // Scroll to the element
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  return (
    <div className="flex flex-col gap-10">
      <Image
        src={profilePicture}
        alt="image"
        width={360}
        height={360}
        style={{
          borderRadius: 40,
        }}
      ></Image>
      <div className="flex flex-row gap-10 pl-14 pr-14">
        <FaLinkedinIn size={32} color="#999999" />
        <FaXTwitter size={32} color="#999999" />
        <FaInstagram size={32} color="#999999" />
        <FaFacebookF size={32} color="#999999" />
      </div>
      <div className="pl-7">
        <CustomButton
          text="Hire Me"
          type="button"
          clickHandler={scrollToHireMe}
        />
      </div>
    </div>
  );
};
