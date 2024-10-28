"use server";

import { hireMeSchema } from "../schemas/formHireMeSchema";
import { HireMeFormState } from "../types/HireMe";
import { convertZodErrors } from "../utils/errors";
export const formHandlerAction = async (
  formData: FormData
): Promise<HireMeFormState<undefined>> => {
  const data = {
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    message: formData.get("message"),
  };
  console.log({ data });

  const validated = hireMeSchema.safeParse(data);

  if (validated.success) {
    return { successMsg: "Form Submited Succesfully" };
  } else {
    console.log(validated.error);
    const errors = convertZodErrors(validated.error);
    console.log("Errors: ", errors);
    return { errors };
  }

  console.log("Validated: ", validated);
};
