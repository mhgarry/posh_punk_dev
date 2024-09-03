/* eslint-disable react/react-in-jsx-scope */
import VerifyEmail from '@/components/verify-email'
import Image from 'next/image'

interface PageProps {
	searchParams: {
		[key: string]: string | string[] | undefined
	}
}

const VerifyEmailPage = ({ searchParams }: PageProps) => {
	const token = searchParams.token
	const toEmail = searchParams.to

	return (
		<div className='container relative flex pt-20 flex-col items-center justify-center lg:px-0'>
			<div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]'>
				{token && typeof token === 'string' ? (
					<div className='grid gap-6'>
						<VerifyEmail token={token} />
					</div>
				) : (
					<div className='flex h-full flex-col items-center justify-center space-y-1'>
						<div className='relative mb-4 h-60 w-60 text-gray-500'>
							<Image src='/email-sent.png' layout='fill' alt='Verification Email Sent Image' />
						</div>
						<h3 className='text-lg text-center'>Verification Email Sent</h3>
						{toEmail && (
							<p className='text-primary text-center'>
								Please check your email <span className='font-semibold'>{toEmail}</span> to verify your email address.
							</p>
						)}
					</div>
				)}
			</div>
		</div>
	)
}

export default VerifyEmailPage
