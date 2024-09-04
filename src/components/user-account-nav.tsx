'use client'

import { User } from '@/payload-types'
import { Button } from './ui/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuTrigger,
} from './ui/dropdown-menu'
import { UserCircle } from 'lucide-react'
import {
	DropdownMenuItem,
	DropdownMenuSeparator,
} from '@radix-ui/react-dropdown-menu'
import Link from 'next/link'
import { useAuth } from '@/hooks/use-auth'
import { sign } from 'crypto'

const UserAccountNav = ({ user }: { user: User }) => {
	const { signOut } = useAuth()
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

				<DropdownMenuSeparator />
				<DropdownMenuItem>
					<Link href='/sell' onClick={signOut}>
						Dashboard
					</Link>
				</DropdownMenuItem>
				<DropdownMenuItem className='cursor-pointer' onClick={signOut}>
					Log Out
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}

export default UserAccountNav
