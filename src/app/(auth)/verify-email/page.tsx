/* eslint-disable react/react-in-jsx-scope */
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
		<div className='container relative flex pt-20 flex-col items-center justify-center w-full lg:px-0'>
			<div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px] '>
				{token && typeof token === 'string' ? (
					<div className='grid gap-6'>{/* Client Side Componet */}</div>
				) : (
					<div className='flex h-full flex-col items-center justify-center space-y-1'>
						<div className='relative mb-4 h-60 w-60 text-secondary'>
							<Image src='/email-sent.png ' layout='fill' alt='Email Sent' />
						</div>
						<h3 className='font-semibold text-lg text-center'>Check your email</h3>
						{toEmail ? (
							<p className='text-gray-500 text-center'>
								We&apos;ve sent a verification link to <span className='font-semibold text-primary'>{toEmail}</span>
							</p>
						) : (
							<p className='text-gray-500 text-center'>We&apos;ve sent a verification link to your email.</p>
						)}
					</div>
				)}
			</div>
		</div>
	)
}

export default VerifyEmailPage
