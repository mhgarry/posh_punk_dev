'use client'

import { User } from '@/payload-types'
import { Button } from './ui/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuTrigger,
} from './ui/dropdown-menu'
import { UserCircle } from 'lucide-react'

const UserAccountNav = ({ user }: { user: User }) => {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild className='overflow-visible'>
				<Button variant='ghost' size='sm' className='relative'>
					<UserCircle className='h-6 w-6 text-primary' />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className='bg-background w-60' align='center'>
				<div className='flex items-center justify-start gap-2 p-2'>
					<div className='flex flex-col space-y-0.5 leading-none'>
						<p className='font-medium text-sm text-foreground'>{user.email}</p>
					</div>
				</div>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}

export default UserAccountNav
