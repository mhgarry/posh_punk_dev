import { AuthCredentialsValidator } from '../lib/validators/account-credentials-validator'
import { publicProcedure, router } from './trpc'
import { getPayloadClient } from '../get-payload'
import { TRPCError } from '@trpc/server'
import { z } from 'zod'

export const authRouter = router({
	createPayloadUser: publicProcedure
		.input(AuthCredentialsValidator)
		.mutation(async ({ input }) => {
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
	verifyEmail: publicProcedure
		.input(z.object({ token: z.string() }))
		.query(async ({ input }) => {
			const { token } = input

			const payload = await getPayloadClient()

			const isVerified = await payload.verifyEmail({
				collection: 'users',
				token,
			})
			if (!isVerified) throw new TRPCError({ code: 'UNAUTHORIZED' })

			return { success: true, message: 'Email Verified' }
		}),

	// sign in user
	signIn: publicProcedure
		.input(AuthCredentialsValidator)
		.mutation(async ({ input, ctx }) => {
			const { email, password } = input
			const payload = await getPayloadClient()
			const { res } = ctx
			try {
				await payload.login({
					collection: 'users',
					data: {
						email,
						password,
					},
					res,
				})
			} catch (error) {
				throw new TRPCError({ code: 'UNAUTHORIZED' })
			}
		}),
})
