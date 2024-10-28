import { z } from "zod";

export const hireMeSchema = z.object({
  name: z.string({ message: "Name is required" }).min(5),
  email: z
    .string({ message: "Email is required" })
    .email({ message: "Input must be in email format" }),
  phone: z.string({ message: "Phone is required" }),
  message: z.string().optional(),
});
