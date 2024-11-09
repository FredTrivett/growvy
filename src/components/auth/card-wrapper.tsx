"use client";

import {
    Card,
    CardContent,
    CardFooter,
    CardHeader
} from "@/components/ui/card";
import { Header } from "@/components/auth/header";
import { Social } from "@/components/auth/social";
import { AuthTabs } from "@/components/auth/auth-tabs";

interface CardWrapperProps {
    children: React.ReactNode;
    headerLabel: string;
    description?: string;
    showSocial?: boolean;
}

export const CardWrapper = ({
    children,
    headerLabel,
    showSocial,
    description
}: CardWrapperProps) => {
    return (
        <Card className="border-none shadow-none bg-transparent">
            <CardHeader className="p-0 pb-4">
                <Header label={headerLabel} description={description} />
            </CardHeader>
            <CardContent className="p-0">
                {showSocial && (
                    <Social />
                )}
                <AuthTabs />
                {children}
            </CardContent>
        </Card>
    );
};