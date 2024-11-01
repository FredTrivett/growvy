"use client";

import { Button } from "../ui/button";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

export const Social = () => {
    return (
        <>
            <div className="flex gap-4">
                <Button
                    className="w-full hover:bg-neutral-200"
                    variant="outline"
                    onClick={() => {
                        console.log("clicked");
                    }}
                ><FcGoogle /> Use Google </Button>
                {/* <Button 
                className="w-fit px-4 hover:bg-neutral-200" 
                variant="outline"
                onClick={() => {
                        console.log("clicked");
                    }}
                ><FaApple /></Button> */}
            </div>
            <div className="flex items-center gap-2 py-4">
                <div className="h-[1px] w-full bg-neutral-500"></div>
                <span className="text-neutral-500">Or</span>
                <div className="h-[1px] w-full bg-neutral-500"></div>
            </div>
        </>
    );
};