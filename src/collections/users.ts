import { CollectionConfig } from "payload/types";

export const Users: CollectionConfig = {
    slug: "users",
    auth: true,
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
