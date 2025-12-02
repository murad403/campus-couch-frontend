import z from "zod";
import passwordRules from "./password-rules.validation";


const signInValidation = z.object({
  email: z.string().email("Invalid email address"),
  password: passwordRules
})

export default signInValidation;