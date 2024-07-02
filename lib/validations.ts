import * as z from "zod";

export const contactSchema = z.object({
  Firstname: z.string().min(2, {
    message: "First name must be at least 2 characters.",
  }),
  Lastname: z.string().min(0),

  Email: z.string().email({
    message: "Invalid email address",
  }),
  Message: z.string().min(2, {
    message: "Message should be at least 2 characters",
  }),
});
