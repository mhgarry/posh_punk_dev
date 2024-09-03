import { VerifyEmail } from '@/components/verify-email'
import { AuthCredentialsValidator } from '../lib/validators/account-credentials-validator'
import { publicProcedure, router } from './trpc'
import { getPayloadClient } from '../get-payload'
import { TRPCError } from '@trpc/server'
import { z } from 'zod'
import payload from 'payload'

export const authRouter = router({
	createPayloadUser: publicProcedure.input(AuthCredentialsValidator).mutation(async ({ input }) => {
		const { email, password } = input
		const payload = await getPayloadClient()

		// check if user already exists
		const { docs: users } = await payload.find({
			collection: 'users',
			where: {
				email: {
					equals: email,
				},
			},
		})

		if (users.length !== 0) throw new TRPCError({ code: 'CONFLICT' })

		await payload.create({
			collection: 'users',
			data: {
				email,
				password,
				role: 'user',
			},
		})

		return { success: true, sentToEmail: email, message: 'User Created' }
	}),

	// create public procedure to verify registration VerifyEmail
	verifyEmail: publicProcedure.input(z.object({ token: z.string() })).query(async ({ input }) => {
		// the token is the input from the client
		const { token } = input
		// get payload client
		const payload = await getPayloadClient()

		const isVerified = await payload.verifyEmail({
			collection: 'users',
			token,
		}) // verify email token and return boolean

		// if token is not isVerified
		if (!isVerified) throw new TRPCError({ code: 'UNAUTHORIZED' })

		return { success: true, message: 'Email Verified' }
	}),
})
