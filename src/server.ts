/** @format */

import express from 'express'
import { getPayloadClient } from './get-payload'
import { nextApp, nextHandler } from './next-utils'

const app = express()
const PORT = Number(process.env.PORT) || 3000

const startServer = async () => {
  const payload = await getPayloadClient({
    initOptions: {
      express: app,
      onInit: async (cms) => {
        cms.logger.info(`Admin URL: ${cms.getAdminURL()}`)
      },
    },
  })

  app.use((req, res) => nextHandler(req, res))

  nextApp.prepare().then(() => {
    payload.logger.info(`Next.js is ready `)

    app.listen(PORT, async () => {
      payload.logger.info(
        `Payload server is listening on ${process.env.NEXT_DASHBOARD_URL}`,
      )
    })
  })
}

startServer()
