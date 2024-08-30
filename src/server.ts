import express from 'express';
import { getPayloadClient } from './get-payload-client';
import { nextHandler } from './next-utils';

const app = express();
const PORT = Number(process.env.PORT) || 3000;

const start = async () => {
    const payload = await getPayloadClient({
        initOptions: {
            express: app, // telling payload to use express as app
            onInit: async (cms) => {
                cms.logger.info(`Payload is ready! 🚀 Admin Url: ${cms.getAdminURL()}`);  // log the admin url
            }
        },
    });
    app.use((req, res) => nextHandler(req, res)) // use the next handler to handle all requests directed to the app
}
start();
