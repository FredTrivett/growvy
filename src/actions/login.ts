"use server";
import * as z from "zod";
import { LoginSchema } from "@/schemas";

export async function login(values: z.infer<typeof LoginSchema>) {
    const validatedFields = LoginSchema.safeParse(values);

    if (!validatedFields.success) {
        return { error: "Wrong email or password" };
    }

    return { success: "Logged in!" };
}
