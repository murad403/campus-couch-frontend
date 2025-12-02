import z from "zod";
import passwordRules from "./password-rules.validation";



export const resetPasswordValidation = z
  .object({
    newPassword: passwordRules,
    confirmNewPassword: z.string(),
  })
  .refine((data) => data.newPassword === data.confirmNewPassword, {
    message: "Passwords do not match!",
    path: ["confirmNewPassword"],
  });