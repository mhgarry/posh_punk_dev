import { NextRequest } from 'next/server'
import { ReadonlyRequestCookies } from 'next/dist/server/web/spec-extension/adapters/request-cookies'
import { User } from '../payload-types'

export const getServerSideUser = async (
	cookies: NextRequest['cookies'] | ReadonlyRequestCookies,
) => {
	const token = cookies.get('payload-token')?.value

	const selfRes = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/users/me`, {
		headers: {
			Authorization: `JWT ${token}`,
		},
	})

	const { user } = (await selfRes.json()) as { user: User | null }

	return { user }
}
