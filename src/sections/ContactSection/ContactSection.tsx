"use client";
import { Inter } from "next/font/google";
import Form from "next/form";
import CustomInput from "@/src/components/CustomInput/CustomInput";
import { CustomButton } from "@/src/components/CustomButton/CustomButton";
import { formHandlerAction } from "@/src/actions/formHandler";

const interRegular = Inter({
  weight: "400",
  subsets: ["latin"],
});

const handleFormSubmittion = async (formData: FormData) => {
  const { errors, successMsg } = await formHandlerAction(formData);
  console.log(errors, successMsg);
};

export const ContactSection = () => {
  return (
    <section className="flex flex-col gap-6  md:gap-20" id="contact">
      <div className="flex flex-col gap-2 md:gap-10">
        <div>
          <span
            className={interRegular.className}
            style={{
              fontSize: "24px",
              lineHeight: "34px",
              color: "#44AAFF",
            }}
          >
            Contact
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
            Let's work together!
          </span>
        </div>
      </div>
      <div className="xl:pr-40">
        <Form action={handleFormSubmittion}>
          <CustomInput
            type="text"
            placeholder="Enter full name"
            label="Full Name"
            name="name"
          ></CustomInput>
          <CustomInput
            type="email"
            placeholder="Email address"
            label="Email"
            name="email"
          ></CustomInput>
          <CustomInput
            type="phone"
            placeholder="+00 000 000 0000"
            label="Phone"
            name="phone"
          ></CustomInput>
          <CustomInput
            type="text"
            placeholder="Write a little brief about your project or scope of work."
            label="Message"
            name="message"
          ></CustomInput>
          <div className="flex flex-row justify-center md:justify-normal">
            <CustomButton text="Send" type="submit" />
          </div>
        </Form>
      </div>
    </section>
  );
};
