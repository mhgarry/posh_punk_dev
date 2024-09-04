import { ReadonlyRequestCookies } from 'next/dist/server/web/spec-extension/adapters/request-cookies'
import { NextRequest } from 'next/server'
import { User } from '../payload-types'

export const getServerSideUser = async (
	cookies: NextRequest['cookies'] | ReadonlyRequestCookies,
) => {
	const token = cookies.get('token')?.value

	const meRes = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/users/me`, {
		headers: {
			Authorization: `JWT ${token}`,
		},
	})

	const { user } = (await meRes.json()) as { user: User | null }

	return { user }
}
