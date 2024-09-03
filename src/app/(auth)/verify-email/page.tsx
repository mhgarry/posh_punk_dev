/* eslint-disable react/react-in-jsx-scope */
import react from 'react'
import Image from 'next/image'
import { verify } from 'crypto'
interface PageProps {
	searchParams: {
		[key: string]: string | string[] | undefined
	}
}

const VerifyEmailPage = ({ searchParams }: PageProps) => {
	const token = searchParams.token

	return (
		<div className='container relative flex pt-20 flex-col items-center justify-center lg:pt-0'>
			<div className='mx-auto flex w-full flex-col justify-center space-y-6 sm-[400px]'>
				{token && typeof token === 'string' ? (
					<div className='grid gap-6'></div>
				) : (
					<div className='flex h-full flex-col items-center justify-center space-y-1'>
						<div className='relative mb-4 h-60 w-60 text-primary'>
							<Image src='/images/email-sent.png' layout='fill' alt='Verify Email' />
						</div>
					</div>
				)}
			</div>
		</div>
	)
}

export default VerifyEmailPage
