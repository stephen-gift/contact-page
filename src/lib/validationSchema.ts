// lib/validationSchema.ts
import * as z from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters.")
    .max(50, "Name must be at most 50 characters.")
    .nonempty("Name is required."),
  email: z
    .string()
    .email("Please enter a valid email address.")
    .nonempty("Email is required."),
  subject: z
    .string()
    .min(5, "Subject must be at least 5 characters.")
    .max(100, "Subject must be at most 100 characters.")
    .nonempty("Subject is required."),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters.")
    .max(1000, "Message must be at most 1000 characters.")
    .nonempty("Message is required.")
});

export type ContactFormData = z.infer<typeof contactSchema>;
