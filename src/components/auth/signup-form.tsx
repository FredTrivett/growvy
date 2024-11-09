'use client';

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignUpSchema, SignUpValues } from "@/schemas";
import * as z from "zod";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form"
import FormError from "@/components/form-error"
import FormSuccess from "@/components/form-success"
import { signup } from "@/actions/signup"
import { useTransition, useState } from "react"
import { AuthLayout } from "@/components/auth/auth-layout";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { TermsCheckbox } from "@/components/auth/terms-checkbox";

export default function SignUpForm() {
    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>("");
    const [isPending, startTransition] = useTransition();

    const form = useForm<SignUpValues>({
        resolver: zodResolver(SignUpSchema),
        defaultValues: {
            email: "",
            password: "",
            terms: false
        }
    })

    const onSubmit = (values: SignUpValues) => {
        setError("");
        setSuccess("");

        startTransition(() => {
            signup(values)
                .then((data) => {
                    setError(data.error);
                    setSuccess(data.success);
                })
        });
    }

    return (
        <AuthLayout showSocial>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="flex flex-col gap-4"
                >
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field, fieldState }) => (
                            <FormItem>
                                <FormLabel required>Enter your email</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="steve@woz.com"
                                        type="email"
                                        error={!!fieldState.error}
                                        disabled={isPending}
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field, fieldState }) => (
                            <FormItem>
                                <FormLabel required>New Password (+8 characters)</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="••••••••"
                                        type="password"
                                        error={!!fieldState.error}
                                        disabled={isPending}
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="terms"
                        render={({ field, fieldState }) => (
                            <TermsCheckbox
                                field={field}
                                fieldState={fieldState}
                            />
                        )}
                    />

                    <FormError message={error} />
                    <FormSuccess message={success} />

                    <Button
                        type="submit"
                        className="text-lg px-6 font-[500] bg-text-gradient text-neutral-50 shadow-none"
                        disabled={isPending}
                    >
                        Create my account
                    </Button>
                </form>
            </Form>
        </AuthLayout>
    );
}
