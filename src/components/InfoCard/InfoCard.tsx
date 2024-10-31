"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { CustomButton } from "../CustomButton/CustomButton";
import { FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";
import { ProfileSectionFields } from "@/src/types/Contentful";

export const InfoCard = (props: { data: ProfileSectionFields }) => {
  const [imageUrl, setImageUrl] = useState<string>("");
  useEffect(() => {
    if (props.data.profilePicture.fields.file.url) {
      setImageUrl(`https:${props.data.profilePicture.fields.file.url}`);
    }
  }, [props]);
  function scrollToHireMe() {
    // Select the element you want to scroll to
    const element = document.getElementById("contact") as HTMLElement;

    // Scroll to the element
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  return (
    <div className="flex flex-col gap-10">
      {imageUrl ? (
        <Image
          src={imageUrl}
          alt="image"
          width={360}
          height={360}
          style={{
            borderRadius: 40,
          }}
        ></Image>
      ) : null}
      <div className="flex flex-row gap-10 justify-center">
        {props.data.socialMedia.map((social, index) => {
          switch (social.fields.name) {
            case "LinkedIn":
              return (
                <a href={social.fields.url} target="_blank" key={index}>
                  <FaLinkedinIn size={32} color="#999999" />
                </a>
              );
            case "Email":
              return (
                <a key={index} href={`mailto:${social.fields.url}`}>
                  <TfiEmail size={32} color="#999999" />
                </a>
              );
            default:
              return null;
          }
        })}
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
