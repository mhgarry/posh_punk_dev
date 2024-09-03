/* eslint-disable react/react-in-jsx-scope */
'use client'

import { trpc } from '@/trpc/client'
import { XCircle } from 'lucide-react'

interface VerifyEmailProps {
	token: string
}

const VerifyEmail = ({ token }: VerifyEmailProps) => {
	const { data, isLoading, isError } = trpc.auth.verifyEmail.useQuery({
		token,
	})

	if (isError) {
		return (
			<div className='text-red-600 flex flex-col items-center gap-2'>
				<XCircle className='h-8 w-8' />
				<h3 className='font-semibold text-lg'>There was an error verifying your email</h3>
				<p className='text-gray-500 text-center text-sm'>
					This token is invalid or expired. Please try again or contact support.
				</p>
			</div>
		)
	}
} // use trpc query to verify email token

export default VerifyEmail
