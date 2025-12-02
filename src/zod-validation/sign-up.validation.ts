import z from "zod";

const signUpValidation = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters long.")
        .refine((val) => /[A-Z]/.test(val), {
            message: "At least one uppercase letter (A-Z) is required.",
        })
        .refine((val) => /[a-z]/.test(val), {
            message: "At least one lowercase letter (a-z) is required",
        })
        .refine((val) => /[0-9]/.test(val), {
            message: "At least one number (0-9) is required",
        })
        .refine((val) => /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(val), {
            message: "At least one special character (!@#$%^&*) is required",
        }),
    termsAndContion: z.boolean().refine(value => value === true, {
        message: "You must agree to the terms and conditions",
    }),
})

export default signUpValidation;