"use server";

import { hireMeSchema } from "../schemas/formHireMeSchema";
import { HireMeFormState } from "../types/HireMe";
import { convertZodErrors } from "../utils/errors";
import axios from "axios";
export const formHandlerAction = async (
  formData: FormData
): Promise<HireMeFormState<undefined>> => {
  const data = {
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    message: formData.get("message"),
  };
  console.log({ data });

  const validated = hireMeSchema.safeParse(data);
  console.log("Validated: ", validated);
  if (validated.success) {
    const payload = {
      fields: [
        {
          name: "firstname",
          value: validated.data.firstName,
        },
        {
          name: "lastname",
          value: validated.data.lastName,
        },
        {
          name: "email",
          value: validated.data.email,
        },
        {
          name: "mobilephone",
          value: validated.data.phone,
        },
        {
          name: "message",
          value: validated.data.message,
        },
      ],
    };
    const response = await axios.post(
      "https://api.hsforms.com/submissions/v3/integration/submit/48406348/09cae902-0e3d-489c-b592-fe6b2fb56a5c",
      payload
    );
    console.log(response.data);
    return { successMsg: "Form Submited Succesfully" };
  } else {
    console.log(validated.error);
    const errors = convertZodErrors(validated.error);
    console.log("Errors: ", errors);
    return { errors };
  }
};
