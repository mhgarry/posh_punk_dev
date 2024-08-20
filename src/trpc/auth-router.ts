import { AuthCredentialsValidator } from "@/lib/validators/account-credentials-validator";
import { router, publicProcedure } from "./trpc";
import { getPayloadClient } from "@/get-payload";

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
                    message: "Email already exists",
                });
            }
        }),
});
