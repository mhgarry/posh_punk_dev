import { AuthCredentialsValidator } from "../lib/validators/account-credentials-validator";
import { router, publicProcedure } from "./trpc";
import { getPayloadClient } from "../get-payload";
import { TRPCError } from "@trpc/server";

export const authRouter = router({
    createPayloadUser: publicProcedure
        .input(AuthCredentialsValidator)
        .mutation(async ({ input }) => {
            const { email, password } = input; // destructuring input data from the client
            const payload = await getPayloadClient(); // get the payload client to interact with the database

            const { docs: users } = await payload.find({
                collection: "users",
                where: {
                    email: {
                        equals: email,
                    },
                },
            }); // look through user collection email field to see if the email already exists
            if (users.length !== 0) {
                throw new TRPCError({
                    code: "CONFLICT",
                });
            } // if email is already registered, throw an error

            await payload.create({
                collection: "users",
                data: {
                    email,
                    password,
                    role: "user",
                },
            });

            return { success: true, message: "User created successfully" }; // return success message if user is created successfully
        }),
});
