/* eslint-disable react/react-in-jsx-scope */
'use client'

import { ArrowRight, ShoppingBag } from 'lucide-react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { FaGithub, FaGoogle } from 'react-icons/fa6'
import { toast } from 'sonner'
import { z, ZodError } from 'zod'
import { Icons } from '@/components/icons'
import { Button, buttonVariants } from '@/components/ui/button'
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'
import { trpc } from '@/trpc/client'
import { zodResolver } from '@hookform/resolvers/zod'
import {
	AuthCredentialsValidator,
	TAuthCredentialsValidator,
} from '../../../lib/validators/account-credentials-validator'

const Page = () => {
	const searchParams = useSearchParams()
	const router = useRouter()
	const isSeller = searchParams.get('as') === 'seller'
	const origin = searchParams.get('origin')

	const continueAsSeller = () => {
		router.push('?as=seller')
	}

	const continueAsBuyer = () => {
		router.replace('/login', undefined)
	}

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<TAuthCredentialsValidator>({
		resolver: zodResolver(AuthCredentialsValidator),
	})

	const { mutate: signIn, isLoading } = trpc.auth.signIn.useMutation({
		onSuccess: () => {
			toast.success('Logged in successfully')
			router.refresh()

			if (origin) {
				router.push(`/${origin}`)
				return
			}
			if (isSeller) {
				router.push('/sell')
				return
			}

			router.push('/')
		},
		onError: (err) => {
			if (err.data?.code === 'UNAUTHORIZED') {
				toast.error('Invalid email or password')
			}
		},
	})

	const onSubmit = ({ email, password }: TAuthCredentialsValidator) => {
		signIn({ email, password })
	}

	return (
		<>
			<div className='container relative flex pt-20 flex-col items-center justify-center w-full'>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className='mx-auto flex w-full flex-col justify-center space-y-6 '>
						<Card className='mx-auto w-full flex flex-col items-center'>
							<CardHeader className='flex flex-col items-center'>
								<Icons.logo className='h-24 w-24' />
								<CardTitle className='text-3xl text-center font-antialiased text-primary w-90'>
									Log in to your {isSeller ? 'seller' : 'PoshPunk'} account
								</CardTitle>
								<CardDescription>
									Is today the day you find that 1967 Barbie Dream House?
								</CardDescription>
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
									{errors?.email && (
										<p className='text-red-500'>{errors.email.message}</p>
									)}
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
										{errors?.password && (
											<p className='text-red-500'>{errors.password.message}</p>
										)}
									</div>
									<div className='grid gap-2'>
										<Button
											variant='default'
											type='submit'
											className='w-full flex flex-row gap-1.5 align-center items-center text-lg'
										>
											Log in <ShoppingBag />
										</Button>
									</div>

									<div className='relative'>
										<div
											aria-hidden='true'
											className='absolute inset-0 flex items-center'
										>
											<span className='w-full border-t' />
										</div>
										<div className='relative flex justify-center text-xs uppercase'>
											<span className='bg-card px-2 text-muted-foreground'>
												or
											</span>
										</div>
									</div>

									{isSeller ? (
										<Button
											onClick={continueAsBuyer}
											variant='secondary'
											disabled={isLoading}
										>
											Continue as buyer
										</Button>
									) : (
										<Button
											onClick={continueAsSeller}
											variant='secondary'
											disabled={isLoading}
										>
											Continue as seller
										</Button>
									)}
									<div className='grid grid-cols-2 gap-4'>
										<div className='grid gap-2'>
											<Button
												variant='outline'
												type='submit'
												className='gap-1.5'
											>
												<FaGoogle w-4 h-4 />
												Sign up with Google
											</Button>
										</div>

										<div className='grid gap-2'>
											<Button
												variant='outline'
												type='submit'
												className='gap-1.5'
											>
												<FaGithub className='h-4 w-4' /> Sign up with GitHub
											</Button>
										</div>
									</div>
								</div>
								<div className='mt-4 text-center text-sm'>
									<Link
										href='/register'
										className={buttonVariants({
											variant: 'link',
											className:
												'gap-0.5 align-center items-center justify-center underline',
										})}
									>
										Don&apos;t have an account? register here
										<ArrowRight className=' h-4 w-4' />
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
