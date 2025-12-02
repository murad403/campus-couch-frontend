import z from "zod";
import passwordRules from "./password-rules.validation";

const signUpValidation = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address"),
    password: passwordRules,
    termsAndContion: z.boolean().refine(value => value === true, {
        message: "You must agree to the terms and conditions",
    }),
})

export default signUpValidation;
