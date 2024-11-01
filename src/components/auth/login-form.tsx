'use client';

import Input from "@/components/ui/input";
import { CardWrapper } from "@/components/auth/card-wrapper";
import { Button } from "@/components/ui/button";

export default function LoginForm() {
    return (
        <CardWrapper
            headerLabel="Stop dreaming, Start doing"
            // backButtonLabel="Already have an account?"
            // backButtonHref="/signup"
            description="Unlock your full potential with growvy and learn the skills to build a business out of what you love."
            showSocial
        >
            <form className="flex flex-col gap-4">
                <Input label="Email" type="email" required />
                <Input label="Password" type="password" required />

                <Button className="text-lg px-6 font-[500] bg-text-gradient text-neutral-50 shadow-none">
                    Login
                </Button>
            </form>
        </CardWrapper>
    );
}
