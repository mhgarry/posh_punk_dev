import { buildConfig } from 'payload/config'
import { webpackBundler } from '@payloadcms/bundler-webpack'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { slateEditor } from '@payloadcms/richtext-slate'
import dotenv from 'dotenv'
import path from 'path'
import { Users } from './collections/Users'


dotenv.config({
  path: path.resolve(__dirname, '../.env'),
})

export default buildConfig({
  serverURL: process.env.NEXT_API_URL || '',
  collections: [Users],
  routes: {
    admin: '/sell',
  },

  admin: {
    user: "users",
    bundler: webpackBundler(),
    meta: {
      titleSuffix: '- PoshPunk Admin',
      favicon: '/favicon.ico',
      ogImage: '/thumbnail.jpg',
    },
  },
  rateLimit: {
    max: 2000,
  },
  editor: slateEditor({}),
  db: mongooseAdapter({
    url: process.env.MONGODB_URI!,
  }),
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
})
