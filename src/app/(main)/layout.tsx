import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LoginButton } from "@/components/auth/login-button";

export default function MainLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <nav className="grid grid-cols-3 items-center py-2 px-12 sticky top-0 z-50 backdrop-blur-lg bg-neutral-50/80">
                <Link href="/" className="text-4xl w-fit font-heading font-[900] tracking-tight bg-text-gradient text-transparent bg-clip-text">
                    growvy
                </Link>
                <ul className="flex items-center gap-6 justify-self-center font-medium">
                    <li><Link href="/">About</Link></li>
                    <li><Link href="/">Features</Link></li>
                    <li><Link href="/">Pricing</Link></li>
                </ul>
                <div className="flex gap-4 items-center justify-self-end">
                    <LoginButton>
                        <p className="text-md px-4 font-[500] hover:text-black text-gray-600 cursor-pointer shadow-none border-primary/40">
                            Login
                        </p>
                    </LoginButton>
                    <Button className="text-md px-6 font-[500] bg-clr-primary text-neutral-50 shadow-none">
                        Get Started
                    </Button>
                </div>
            </nav>
            {children}
        </>
    );
} 