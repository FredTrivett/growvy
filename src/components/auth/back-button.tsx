"use client"

import Link from "next/link";
import { Button } from "@/components/ui/button"

interface BackButtonProps {
    href: string;
    label: string;
}

export const BackButton = ({
    href,
    label,
}: BackButtonProps) => {
    return (
        <Button
            variant="link"
            size="sm"
            asChild
            className="text-sm text-neutral-700 px-0 py-2 underline font-[300] hover:text-neutral-900"
        >
            <Link href={href}>
                {label}
            </Link>
        </Button>
    );
};