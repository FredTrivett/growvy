"use server";
import * as z from "zod";
import bcrypt from "bcrypt";
import { db } from "@/lib/db";
import { getUserByEmail } from "@/data/user";
import { SignUpSchema } from "@/schemas";

export async function signup(values: z.infer<typeof SignUpSchema>) {
    const validatedFields = SignUpSchema.safeParse(values);

    if (!validatedFields.success) {
        return { error: "Wrong email or password" };
    }

    const { email, password } = validatedFields.data;
    const hashedPassword = await bcrypt.hash(password, 10);

    const existingUser = await getUserByEmail(email);

    if (existingUser) {
        return { error: "Email already in use" };
    }

    await db.user.create({
        data: { email, password: hashedPassword },
    });

    // TODO: send verification token to email

    return { success: "Logged in!" };
}
