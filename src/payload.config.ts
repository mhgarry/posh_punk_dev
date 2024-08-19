import { buildConfig } from "payload/config";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { slateEditor } from "@payloadcms/richtext-slate";
import { webpackBundler } from "@payloadcms/bundler-webpack";
import path from "path";

export default buildConfig({
    serverURL: process.env.NEXT_PUBLIC_SERVER_URL || "",
    collections: [], // products and user files collection,
    routes: {
        admin: "/sell",
    },
    admin: {
        bundler: webpackBundler(),
        meta: {
            titleSuffix: "- PoshPunk Dashboard",
            favicon: "/favicon.ico",
            ogImage: "/",
        },

        typescript: {
            outputFile: path.resolve(__dirname, "payload-types.ts"),
        },
    },
    rateLimit: {
        max: 2000,
    },
    editor: slateEditor({}),
    db: mongooseAdapter({
        url: process.env.MONGO_URL!,
    }),
});
