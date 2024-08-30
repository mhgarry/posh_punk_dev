/** @format */

// import {
//     AuthCredentialsValidator,
//     TAuthCredentialsValidator,
// } from "@/lib/validators/account-credentials-validator";
// import { trpc } from "@/trpc/client";

// const Page = () => {
//     const {
//         register,
//         handleSubmit,
//         formState: { errors },
//     } = useForm<TAuthCredentialsValidator>({
//         resolver: zodResolver(AuthCredentialsValidator),
//     });

//     const { mutate, isLoading } = trpc.auth.createPayloadUser.useMutation({});

//     const onSubmit = ({ email, password }: TAuthCredentialsValidator) => {
//         mutate({ email, password });
//     };
//     return (
//         <>
//             <div className="container relative flex pt-20 flex-col items-center justify-center lg:px-0 ">
//                 <div className="mx-auto flex w-full flex-col space-y-6 justify-center sm:w-[350px] ">
//                     <div className="flex flex-col items-center space-y-2 text-center">
//                         <Icons.logo className="w-20 h-20" />
//                         <h1 className="text-2xl font-bold">
//                             Create an account
//                         </h1>
//                         <Link
//                             href="/sign-in"
//                             className={buttonVariants({
//                                 variant: "link",
//                                 className: "gap-1.5",
//                             })}
//                         >
//                             Back again? Sign in here
//                             <FaArrowRight className="h-4 w-4" />
//                         </Link>
//                     </div>
//                     <div className="grid gap-6">
//                         <form onSubmit={handleSubmit(onSubmit)}>
//                             <div className="grid gap-2">
//                                 <div className="grid gap-1 py-2">
//                                     <Label htmlFor="email">Email</Label>
//                                     <Input
//                                         {...register("email")}
//                                         className={cn({
//                                             "focus-visible-ring-2 focus-visible:ring-red-500":
//                                                 true,
//                                         })}
//                                         type="email"
//                                         placeholder="Your Email"
//                                     />
//                                 </div>
//                                 <div className="grid gap-1 py-2">
//                                     <Label htmlFor="password">Password</Label>
//                                     <Input
//                                         {...register("password")}
//                                         className={cn({
//                                             "focus-visible-ring-2 focus-visible:ring-red-500":
//                                                 true,
//                                         })}
//                                         type="password"
//                                         placeholder="Password"
//                                     />
//                                 </div>
//                                 {/* <div className="grid gap-1 py-2">
//                                     <Label htmlFor="password">
//                                         Confirm Password
//                                     </Label>
//                                     <Input
//                                         {...register("password")}
//                                         className={cn({
//                                             "focus-visible-ring-2 focus-visible:ring-red-500":
//                                                 true,
//                                         })}
//                                         type="password"
//                                         placeholder="Confirm Password"
//                                     />
//                                 </div> */}
//                                 <Button
//                                     className={cn({
//                                         "w-full": true,
//                                     })}
//                                 >
//                                     Sign Up
//                                 </Button>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Page;

'use client'

import { Button, buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Icons } from '@/components/icons'
import { FaArrowRight, FaGithub } from 'react-icons/fa'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Link as LinkIcon } from 'lucide-react'
import Link from 'next/link'
import { useForm } from 'react-hook-form'

const Page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  return (
    <>
      <div className="container relative flex pt-10 flex-col items-center justify-center lg:px-0 ">
        <form>
          <Card className="mx-auto max-w-xl flex flex-col items-center">
            <CardHeader className="flex flex-col items-center justify-between ">
              <Icons.logo className="w-40 h-40 mb-4" />
              <CardTitle className="text-xl">Sign Up</CardTitle>
              <CardDescription>
                Enter your information to create an account
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="example@example.com"
                    required
                    className={cn({
                      'focus-visible:ring-red-500': true,
                    })}
                  />
                </div>
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="email">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="password"
                      required
                      className={cn({
                        'focus-visible:ring-red-500': true,
                      })}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Button type="submit" variant="outline" className="w-full">
                    Create an account
                  </Button>
                  <Button variant="outline" className="w-full gap-1.5">
                    <FaGithub className="w-4 h-4" />
                    Sign up with GitHub
                  </Button>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col items-center w-full">
              <div className="flex flex-row items-center justify-between w-full p-4">
                <Link
                  href="/sign-in"
                  className={buttonVariants({
                    variant: 'link',
                    className: 'gap-1.5',
                  })}
                >
                  <LinkIcon className="w-4 h-4" />
                  <span>Already have an account? Sign in here</span>
                </Link>
              </div>
            </CardFooter>
          </Card>
        </form>
      </div>
    </>
  )
}

export default Page
