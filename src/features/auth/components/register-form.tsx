"use client"

import {zodResolver} from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"
import {z} from "zod"
import Link from "next/link"
import Image from "next/image"
import { toast } from "sonner"
import {useRouter} from "next/navigation"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import{
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { authClient} from "@/lib/auth-client"


const registerFormSchema = z.object({
    email: z.email("Invalid email address"),
    password: z.string().min(1, "Password is required"),
    confirmPassword: z.string()
    
})
.refine((data) => data.password === data.confirmPassword, {
        message: "Passwords do not match",
        path: ["confirmPassword"],
    })

type RegisterFormValues = z.infer<typeof registerFormSchema>

export const RegisterForm = () => {
    const router = useRouter()

    const form = useForm<RegisterFormValues>({
        resolver: zodResolver(registerFormSchema),
        defaultValues: {
            email: "",
            password: "",
            confirmPassword: "",
        },
    })

    const onSubmit = async (values: RegisterFormValues) => {
        await authClient.signUp.email({
            name: values.email,
            email: values.email,
            password: values.password,
            callbackURL: "/"
        },
        {
            onSuccess: () => {
                router.push("/")
            },
            onError: (err) => {
                toast.error(err.error.message)
            }
        }
    )
    }

    const isPending = form.formState.isSubmitting

    return (
        <>
        <div className="flex flex-col gap-6">
            <Card>
                <CardHeader className="text-center">
                    <CardTitle className="text-2xl">
                        Get Started
                    </CardTitle>
                    <CardDescription>
                        CREATE AN ACCOUNT
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form action="" onSubmit={form.handleSubmit(onSubmit)}>
                            <div className="flex flex-col gap-4">
                                <Button
                                    variant="outline"
                                    className="w-full"
                                    type="button"
                                    disabled={isPending}
                                >
                                    Continue with GitHub
                                </Button>

                                 <Button
                                    variant="outline"
                                    className="w-full"
                                    type="button"
                                    disabled={isPending}
                                >
                                    Continue with Google
                                </Button>
                            </div>

                            <div className="grid gap-6">
                                <FormField
                                control={form.control}
                                name="email"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                type="email"
                                                placeholder="you@example.com"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                               />

                                <FormField
                                control={form.control}
                                name="password"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>Password</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                type="password"
                                                placeholder="********"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                                />

                                <FormField
                                control={form.control}
                                name="confirmPassword"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>Confirm Password</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                type="password"
                                                placeholder="********"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                               />


                                <Button
                                type="submit"
                                className="w-full"
                                disabled={isPending}
                                >
                                    Sign Up
                                </Button>
                            </div>
                            <div className="text-center text-sm">
                                Already have an account?{" "}
                                <Link href="/login"
                                className="underline underline-offset-4"
                                >
                                 Login
                                </Link>
                            </div>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
        </>
    )
}