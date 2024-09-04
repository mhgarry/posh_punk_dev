/* eslint-disable react/react-in-jsx-scope */
'use client'

import { trpc } from '@/trpc/client'
import { XCircleIcon, Loader } from 'lucide-react'
import Image from 'next/image'
import { buttonVariants } from './ui/button'
import Link from 'next/link'
interface VerifyEmailProps {
	token: string
}

const VerifyEmail = ({ token }: VerifyEmailProps) => {
	const { data, isLoading, isError } = trpc.auth.verifyEmail.useQuery({
		token,
	})

	if (isError) {
		return (
			<div className='flex flex-col items-center gap-2'>
				<XCircleIcon className='h-16 w-16 text-red-500' />
				<h3 className='text-xl font-semibold text-red-500'>
					Verification failed
				</h3>
				<p className='text-gray-500 text-center'>
					The verification link is invalid or has expired Please try again
				</p>
			</div>
		)
	}
	if (data?.success) {
		return (
			<div className='flex flex-col items-center gap-2'>
				<div className='relative mb-4 h-60 w-60 text-gray-500'>
					<Image
						src='/user-accepted.png'
						layout='fill'
						alt='User Accepted Image'
					/>
				</div>
				<h3 className='font-semibold text-2xl text-primary'>
					{' '}
					You&apos;re all set!
				</h3>
				<p className='text-gray-500 text-center'>
					Your email has been verified. You can now login to your account.
				</p>
				<Link href='/login' className={buttonVariants({ className: 'mt-4' })}>
					Login
				</Link>
			</div>
		)
	}
	if (isLoading) {
		return (
			<div className='flex flex-col items-center gap-2'>
				<Loader className='animate-spin h-16 w-16 text-primary' />
				<h3 className='text-xl font-semibold text-primary'>Verifying...</h3>
			</div>
		)
	}
}

export default VerifyEmail
