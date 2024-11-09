"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export const AuthTabs = () => {
    const pathname = usePathname();

    const isLoginPage = pathname === "/login";
    const isSignUpPage = pathname === "/sign-up";

    return (
        <div className="flex gap-2 w-full bg-neutral-200 rounded-xl p-[6px]">
            <Link
                href="/login"
                className={cn(
                    "w-full text-center py-[8px] text-sm font-medium rounded-xl transition-all duration-200",
                    isLoginPage
                        ? "bg-neutral-50 text-neutral-900"
                        : "text-neutral-700 hover:text-neutral-900"
                )}
            >
                Login
            </Link>
            <Link
                href="/sign-up"
                className={cn(
                    "w-full text-center py-[8px] text-sm font-medium rounded-xl transition-all duration-200",
                    isSignUpPage
                        ? "bg-neutral-50 text-neutral-900"
                        : "text-neutral-700 hover:text-neutral-900"
                )}
            >
                Create your account
            </Link>
        </div>
    );
}; 