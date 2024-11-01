import Link from "next/link";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="overflow-hidden relative h-[100svh]">
            <nav className="flex items-center py-2 px-12">
                <Link href="/" className="text-4xl font-heading font-[900] tracking-tight bg-text-gradient text-transparent bg-clip-text">
                    growvy
                </Link>
            </nav>
            <div className="grid grid-cols-5 grid-rows-1 items-center justify-center h-[100%] gap-16 max-w-5xl mx-auto mt-12">
                <div className="col-span-3 col-start-1 h-full flex flex-col justify-end">
                    <div className="bg-slate-500 h-full w-full rounded-t-3xl p-8">
                        <h2 className="text-4xl font-bold">replace with image</h2>
                    </div>
                </div>
                <div className="max-w-md col-span-2 col-start-4 h-full">
                    {children}
                </div>
            </div>

            <div className="bg-back-gradient absolute top-[-60%] -z-50 w-[130%] h-[30svh] blur-[50em]"></div>
        </div>


    );
};

export default AuthLayout;