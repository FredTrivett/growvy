import { db } from "@/lib/db";

export async function getUserByEmail(email: string) {
    return await db.user.findUnique({ where: { email } });
}

export async function getUserById(id: string) {
    return await db.user.findUnique({ where: { id } });
}

// if wrong look at 2:03:40 for the correct code