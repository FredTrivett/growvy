"use client";

import {
    Card,
    CardContent,
    CardFooter,
    CardHeader
} from "@/components/ui/card";
import { Header } from "@/components/auth/header";
import { Social } from "@/components/auth/social";
// import { BackButton } from "@/components/auth/back-button";

interface CardWrapperProps {
    children: React.ReactNode;
    headerLabel: string;
    // backButtonLabel: string;
    // backButtonHref: string;
    description?: string;
    showSocial?: boolean;
}

export const CardWrapper = ({
    children,
    headerLabel,
    // backButtonLabel,
    // backButtonHref,
    showSocial,
    description
}: CardWrapperProps) => {
    return (
        <Card className="border-none shadow-none bg-transparent">
            <CardHeader className="p-0 pb-4">
                <Header label={headerLabel} description={description} />
            </CardHeader>
            {showSocial && (
                <Social />
            )}
            <CardContent className="p-0">
                {children}
            </CardContent>
            {/* <CardFooter className="p-0">
                <BackButton
                    label={backButtonLabel}
                    href={backButtonHref}
                />
            </CardFooter> */}
        </Card>
    );
};