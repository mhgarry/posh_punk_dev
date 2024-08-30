import express from 'express';
import { getPayloadClient } from './get-payload-client';
import { nextApp, nextHandler } from './next-utils';

const app = express();
const PORT = Number(process.env.PORT) || 3000;

const start = async () => {
    const payload = await getPayloadClient({
        initOptions: {
            express: app, // telling payload to use express as app
            onInit: async (cms ) => {
                cms.logger.info(`Payload is ready! 🚀 Admin Url: ${cms.getAdminURL()}`);
            }
        },
    });
    app.use((req, res) => nextHandler(req, res)) // use the next handler to handle all requests directed to the app
    nextApp.prepare().then(() => {
        payload.logger.info(`Next.js app is ready! 🚀`);

        app.listen(PORT, () => {
            payload.logger.info(`PoshPunk Digital Flea Market is running on http://localhost:${PORT}`);
        }) // start the express app on the specified port
    }) // prepare the Next.js app to be served by the express app
}

start();
