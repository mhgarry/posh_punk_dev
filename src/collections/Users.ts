// import { CollectionConfig } from 'payload/types'

import { CollectionConfig } from 'payload/types'

export const Users: CollectionConfig = {
	slug: 'users',
	auth: {
		verify: {
			generateEmailHTML: ({ token }) => {
				return `
				<div>
					<h1>Verify your email</h1>
					<p>Click the link below to verify your email address</p>
					<a href="${process.env.NEXT_PUBLIC_DOMAIN}?token=${token}">Verify your email</a>
				</div>`
			},
		},
	},
	access: {
		read: () => true,
		create: () => true,
	},
	fields: [
		{
			name: 'role',
			type: 'select',
			admin: {
				condition: () => false,
			},
			label: 'Role',
			defaultValue: 'user',
			options: [
				{ label: 'Admin', value: 'admin' },
				{ label: 'User', value: 'user' },
			],
		},
	],
}
