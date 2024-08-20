import { Icons } from "@/components/icons";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { FaArrowRight } from "react-icons/fa6";
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
                            href="/auth/sign-in"
                            className={buttonVariants({
                                variant: "link",
                                className: "gap-1.5",
                            })}
                        >
                            Back again? Sign in here
                            <FaArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Page;
