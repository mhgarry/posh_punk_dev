/* eslint-disable react/react-in-jsx-scope */
'use client'

import { Icons } from '@/components/icons'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'
import { UserPenIcon } from 'lucide-react'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { FaGithub, FaGoogle } from 'react-icons/fa6'
import { zodResolver } from '@hookform/resolvers/zod'

import { z } from 'zod'
import { trpc } from '@/trpc/client'

const Page = () => {
	const AuthCredentialsValidator = z.object({
		email: z.string().email(),
		password: z.string().min(8, 'Password must be at least 8 characters'),
		// confirmPassword: z.string().min(8, 'Password must be at least 8 characters').refine(data => data === data.password, {
		//   message: 'Passwords do not match',
		// }),
	})

	type TAuthCredentialsValidator = z.infer<typeof AuthCredentialsValidator>

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<TAuthCredentialsValidator>({
		resolver: zodResolver(AuthCredentialsValidator),
	})

	const { mutate, isLoading } = trpc.auth.createPayloadUser.useMutation({})

	const onSubmit = ({ email, password }: TAuthCredentialsValidator) => {
		mutate({ email, password })
	}

	return (
		<>
			<div className='container relative flex pt-20 flex-col items-center justify-center w-full'>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className='mx-auto flex w-full flex-col justify-center space-y-6 '>
						<Card className='mx-auto w-full flex flex-col items-center'>
							<CardHeader className='flex flex-col items-center'>
								<Icons.logo className='h-24 w-24' />
								<CardTitle className='text-4xl text-center font-antialiased text-primary'>Create Account</CardTitle>
								<CardDescription>Join PoshPunk today and start shopping for your treasure.</CardDescription>
							</CardHeader>
							<CardContent>
								<div className='grid gap-4'>
									<div className='grid gap-2'>
										<Label htmlFor='email'>Email</Label>
										<Input
											{...register('email')}
											className={cn({
												'focus-visible:ring-red-500': errors.email,
											})}
											id='email'
											type='email'
											placeholder='example@example.com'
											required
											aria-required
											aria-label='email input'
										/>
									</div>
									<div className='grid gap-2'>
										<Label htmlFor='password'>Password</Label>
										<Input
											{...register('password', { required: true })}
											id='password'
											type='password'
											required
											aria-required
											aria-label='password input'
											className={cn({
												'focus-visible:ring-red-500': errors.password,
											})}
										/>
									</div>
									<div className='grid gap-2'>
										<Button
											variant='default'
											type='submit'
											className='w-full flex flex-row gap-4 align-center items-center'
										>
											Create an account <UserPenIcon />
										</Button>
									</div>
									<div className='grid grid-cols-2 gap-4'>
										<div className='grid gap-2'>
											<Button variant='outline' type='submit' className='gap-1.5'>
												<FaGoogle w-4 h-4 />
												Sign up with Google
											</Button>
										</div>

										<div className='grid gap-2'>
											<Button variant='outline' type='submit' className='gap-1.5'>
												<FaGithub className='h-4 w-4' /> Sign up with GithHub
											</Button>
										</div>
									</div>
								</div>
								<div className='mt-4 text-center text-sm'>
									Already have an account?{' '}
									<Link href='#' className='underline'>
										Sign in
									</Link>
								</div>
							</CardContent>
						</Card>
					</div>
				</form>
			</div>
		</>
	)
}
export default Page
