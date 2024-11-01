import { Button } from "@/components/ui/button";
import { Zain, Afacad } from "next/font/google";

const zain = Zain({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Home() {
  return (
    <>
      <header className="flex flex-col items-center justify-center h-[70svh] p-4 gap-4">
        <h1 className="text-8xl font-bold text-center leading-[0.9] tracking-tight max-w-3xl text-gradient">
          Redefining the way business is learnt
        </h1>
        <Button size="lg" className="text-xl font-[500] bg-text-gradient hover:border-primary/40 text-neutral-50 hover:bg-text-gradient/80 rounded-full">
          Join Waitlist
        </Button>
        {/* <div className="bg-back-gradient absolute top-[-40%] -z-50 w-[130%] h-[30svh] blur-[50em]"></div> */}
      </header>
      <section className="flex flex-col items-center justify-center h-[300svh] p-4 gap-4">
        <h2 className="text-4xl font-bold text-center leading-[0.9] tracking-tight max-w-3xl text-gradient">
          What is Growvy?
        </h2>
      </section>
    </>
  );
}
