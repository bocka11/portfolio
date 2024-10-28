"use client";
import { Inter } from "next/font/google";

const interRegular = Inter({
  weight: "400",
  subsets: ["latin"],
});

export const CustomButton = (props: {
  text: string;
  type: "submit" | "reset" | "button" | undefined;
  clickHandler?: any;
}) => {
  return (
    <button
      type={props.type}
      style={{
        width: "300px",
        height: "80px",
        borderRadius: "20px",
        border: "1px solid #999999",
        color: "white",
        fontSize: "24px",
      }}
      className={`${interRegular.className}`}
      onClick={props.clickHandler}
    >
      {props.text}
    </button>
  );
};
