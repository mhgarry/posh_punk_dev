import { CollectionConfig } from "payload/types";

export const Users: CollectionConfig = {
    slug: "users",
    auth: {
        verify: {
            generateEmailHTML: ({ token }) => {
                return `<a href="${process.env.NEXT_PUBLIC_SERVER_URL}/verify-email?token=${token}>Verify Account</a>`;
            },
        },
    }, // generate email verification link for users
    access: {
        read: () => true,
        create: () => true,
    },
    fields: [
        {
            name: "role",
            type: "select",
            admin: {
                // condition: () => false, // dropdown field admin/user condition
            },
            required: true,
            defaultValue: "user",
            options: [
                {
                    label: "Admin",
                    value: "admin",
                },
                {
                    label: "User",
                    value: "user",
                },
            ],
        },
    ],
};
