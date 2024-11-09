"use client";

import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { FormControl, FormItem, FormMessage } from "@/components/ui/form";

interface TermsCheckboxProps {
    field: any;
    fieldState: any;
}

export function TermsCheckbox({ field, fieldState }: TermsCheckboxProps) {
    return (
        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md p-0">
            <FormControl>
                <label className="flex items-center gap-2 cursor-pointer">
                    <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        className={cn(
                            "mt-0.2",
                            fieldState.error && "border-red-500"
                        )}
                    />
                    <div className="space-y-1">
                        <div className={cn(
                            "text-sm font-normal",
                            fieldState.error ? "text-red-500" : "text-neutral-700"
                        )}>
                            I agree to the{" "}
                            <Link
                                href="/terms"
                                className={cn(
                                    "hover:underline",
                                    fieldState.error ? "text-red-500" : "text-primary"
                                )}
                                onClick={(e) => e.stopPropagation()}
                            >
                                Terms of Service
                            </Link>{" "}
                            and{" "}
                            <Link
                                href="/privacy"
                                className={cn(
                                    "hover:underline",
                                    fieldState.error ? "text-red-500" : "text-primary"
                                )}
                                onClick={(e) => e.stopPropagation()}
                            >
                                Privacy Policy
                            </Link>
                            <span className="text-primary">*</span>
                        </div>
                        <FormMessage />
                    </div>
                </label>
            </FormControl>
        </FormItem>
    );
} 