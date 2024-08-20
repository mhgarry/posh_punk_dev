"use client";

import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { FaArrowRight } from "react-icons/fa6";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Page = () => {
    return (
        <>
            <div className="container relative flex pt-20 flex-col items-center justify-center lg:px-0 ">
                <div className="mx-auto flex w-full flex-col space-y-6 justify-center sm:w-[350px] ">
                    <div className="flex flex-col items-center space-y-2 text-center">
                        <Icons.logo className="w-20 h-20" />
                        <h1 className="text-2xl font-bold">
                            Create an account
                        </h1>
                        <Link
                            href="/sign-in"
                            className={buttonVariants({
                                variant: "link",
                                className: "gap-1.5",
                            })}
                        >
                            Back again? Sign in here
                            <FaArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                    <div className="grid gap-6">
                        <form>
                            <div className="grid gap-2">
                                <div className="grid gap-1 py-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input
                                        className={cn({
                                            "focus-visible-ring-2 focus-visible:ring-red-500":
                                                true,
                                        })}
                                        type="email"
                                        placeholder="Your Email"
                                    />
                                </div>
                                <div className="grid gap-1 py-2">
                                    <Label htmlFor="password">Password</Label>
                                    <Input
                                        className={cn({
                                            "focus-visible-ring-2 focus-visible:ring-red-500":
                                                true,
                                        })}
                                        type="password"
                                        placeholder="Password"
                                    />
                                </div>
                                <div className="grid gap-1 py-2">
                                    <Label htmlFor="password">
                                        Confirm Password
                                    </Label>
                                    <Input
                                        className={cn({
                                            "focus-visible-ring-2 focus-visible:ring-red-500":
                                                true,
                                        })}
                                        type="password"
                                        placeholder="Confirm Password"
                                    />
                                </div>
                                <Button
                                    className={cn({
                                        "w-full": true,
                                    })}
                                >
                                    Sign Up
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Page;
