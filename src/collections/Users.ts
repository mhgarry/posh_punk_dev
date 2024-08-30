import { CollectionConfig } from 'payload/types'

export const Users: CollectionConfig = {
	slug: 'users',
	auth: true,
	access: {
		read: () => true,
		create: () => true,
	},

	fields: [
		{
			name: 'role',
			label: 'Role',
			admin: {
				condition: ({ req }) => req.user.role === 'admin',
			},
			type: 'select',
			options: [
				{
					label: 'Admin',
					value: 'admin',
				},
				{
					label: 'User',
					value: 'user',
				},
			],
		},
	],
}
