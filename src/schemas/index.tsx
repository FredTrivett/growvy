import * as z from "zod";

export const LoginSchema = z.object({
    email: z.string().email({
        message: "Please enter a valid email address"
    }),
    password: z.string().min(8, {
        message: "Password must be at least 8 characters long"
    }),
});

export const SignUpSchema = z.object({
    email: z.string().email({
        message: "Please enter a valid email address"
    }),
    password: z.string().min(8, {
        message: "Password must be at least 8 characters long"
    }),
    terms: z.boolean().refine((value) => value === true, {
        message: ""
    })
});

export type SignUpValues = z.infer<typeof SignUpSchema>;
export type LoginValues = z.infer<typeof LoginSchema>; 