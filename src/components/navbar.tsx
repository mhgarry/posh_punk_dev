'use client'

import React from 'react' // Import the React module

import Link from 'next/link'
import MaxWidthWrapper from './maxWidthWrapper'
import { Icons } from './icons'
import NavItems from './nav-items'
import { buttonVariants } from './ui/button'
import Cart from './cart'
import ThemeToggle from './theme-toggle'

const Navbar = async () => {
	const user = null

	return (
		<div className='bg-background sticky z-50 top-0 inset-x-0 h-16'>
			<header className='relative bg-background'>
				<MaxWidthWrapper>
					<div className='border-b border-gray-200'>
						<div className='flex h-16 items-center'>
							{/* <MobileNav /> */}

							<div className='ml-4 flex lg:ml-0 lg:mr-8'>
								<Link href='/'>
									<Icons.logo className='h-10 w-10' />
								</Link>
								<div></div>
							</div>
							<div className='hidden lg:flex lg:flex-1  lg:items-center lg:justify-between lg:space-x-6'>
								<NavItems />
							</div>

							<div className='ml-auto flex items-center'>
								<div className='hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6'>
									{user ? null : (
										<Link
											href='/log-in'
											className={buttonVariants({
												variant: 'dark',
											})}
										>
											Login
										</Link>
									)}
									{user ? null : <span className='h-6 w-px bg-gray-200' />}
									{user ? (
										<p></p>
									) : (
										<Link
											href='/register'
											className={buttonVariants({
												variant: 'dark',
											})}
										>
											Register
										</Link>
									)}

									{user ? <span className='h-6 w-px bg-gray-200' /> : null}
									{user ? null : (
										<div className='flex lg:ml-6'>
											<span className='h-6 w-px bg-gray-200' />
										</div>
									)}

									<div className='ml-4 flow-root lg:ml-6'>
										<Cart />
									</div>
									<div className='ml-4 flow-root lg:ml-6'>
										<ThemeToggle />
									</div>
								</div>
							</div>
						</div>
					</div>
				</MaxWidthWrapper>
			</header>
		</div>
	)
}

export default Navbar
