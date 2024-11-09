"use server";
import * as z from "zod";
import { SignUpSchema } from "@/schemas";

export async function signup(values: z.infer<typeof SignUpSchema>) {
    const validatedFields = SignUpSchema.safeParse(values);

    if (!validatedFields.success) {
        return { error: "Wrong email or password" };
    }

    return { success: "Logged in!" };
}
