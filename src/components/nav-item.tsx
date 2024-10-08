'use client'

import { POSHPUNK_CATEGORIES } from '@/config'
import { Button } from './ui/button'
import { FaChevronDown } from 'react-icons/fa'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react' // Add this line

type Category = (typeof POSHPUNK_CATEGORIES)[number]

interface NavItemProps {
	category: Category
	handleOpen: () => void
	close: () => void
	isOpen: boolean
	isAnyOpen: boolean
}

const NavItem = ({ isAnyOpen, category, handleOpen, close, isOpen }: NavItemProps) => {
	return (
		<div className='flex'>
			<div className='relative flex items-center'>
				<Button
					className={isOpen ? 'gap-1.5 border ' : 'gap-1.5 borer-primary'}
					onClick={handleOpen}
					variant={isOpen ? 'outline' : 'default'}
				>
					{category.label}
					<FaChevronDown
						className={cn('h-4 w-4 transition-all', {
							'-rotate-180': isOpen,
						})}
					/>
				</Button>
			</div>
			{isOpen ? (
				<div
					className={cn('absolute inset-x-0 top-full text-sm ', {
						'animate-in fade-in-10 slide-in-from-top-5': !isAnyOpen,
					})}
				>
					<div className='absolute inset-0 top-1/2 bg-background  shadow'>
						<div className='mx-auto max-w-7xl px-8'>
							<div className='grid grid-cols-4 gap-x-8 gap-y-10 py-16'>
								<div className='col-span-4 start-1 grid grid-cols-3 gap-x-8'>
									{category.featured.map((item) => (
										<div key={item.value} className='relative group'>
											<div className='relative aspect-video overflow-hidden rounded-lg bg-secondary group-hover:opacity-75'>
												<Image src={item.imageSrc} layout='fill' className='cover center' alt={item.label} />
											</div>
											<Link href={item.value} passHref className='mt-6 block  font-medium'>
												{item.label}
											</Link>
											<p className='mt-1'>Shop {item.value}</p>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			) : null}
		</div>
	)
}

export default NavItem
