"use client";

import { Header } from "@/components/auth/header";
import { Social } from "@/components/auth/social";
import { AuthTabs } from "@/components/auth/auth-tabs";

interface AuthLayoutProps {
    children: React.ReactNode;
    showSocial?: boolean;
}

export function AuthLayout({
    children,
    showSocial
}: AuthLayoutProps) {
    return (
        <div className="flex flex-col gap-4">
            <Header
                label="Stop dreaming, Start doing"
                description="Unlock your full potential with growvy and learn the skills to build a business out of what you love."
            />
            {showSocial && (
                <Social />
            )}
            <AuthTabs />
            {children}
        </div>
    );
} 