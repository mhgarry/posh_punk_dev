import { CollectionConfig } from "payload/types";

export const Users: CollectionConfig = {
  slug: 'users',
    auth: true,
    access: {
      read: () => true,
      create: () => true,
    },



    fields: [
      {
        "name": "role",
        "label": "Role",
        "type": "select",
        "options": [
          {
            "label": "Admin",
            "value": "admin"
          },
          {
            "label": "User",
            "value": "user"
          }
        ],
      }
    ]

}

