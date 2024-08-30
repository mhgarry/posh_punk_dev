import dotenv from 'dotenv';
import next from 'next';
import path from 'path';

dotenv.config({
    path: path.resolve(__dirname, '../.env')
})

const PORT = Number(process.env.PORT) || 3000;

export const nextApp = next({
    dev: process.env.NODE_ENV !== 'production',
    PORT
}) // nextApp creates a new instance of a Next.js app

export const nextHandler = nextApp.getRequestHandler(); // next handler is a function that returns a request handler for the Next.js app to use in Express
