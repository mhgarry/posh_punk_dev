import dotenv from 'dotenv';
import path from 'path';
import payload from 'payload';
import type { InitOptions } from 'payload/config';

dotenv.config({
    path: path.resolve(__dirname, '../.env')
})

interface Args {
    initOptions?: Partial<InitOptions>
}

let cached = (global as any).payload // cache the payload client with a global variable

if (!cached) {
    cached = (global as any).payload = {
        client: null, // client is payload client, which is null by default
        promise: null, // promise is a promise that resolves to the payload client
    }
} // if the payload client is not cached, create a new cache object

export const getPayloadClient = async({initOptions}: Args = {}) => {
    if(!process.env.PAYLOAD_SECRET) {
        throw new Error('PAYLOAD_SECRET is not defined')
    }

    if(cached.client) {
        return cached.client
    } // if the payload client is already cached, return the client from the cache

    if (!cached.promise) {
        cached.promise =  payload.init({
            secret: process.env.PAYLOAD_SECRET,
            local: initOptions?.express ? false : true,
            ...(initOptions || {})
    }) // if there is no promise in the cache, create a new promise that initializes the payload client with the secret and initOptions
    } // if the payload client is not cached, create a new cache object
    try {
        cached.client = await cached.promise // wait for the promise to resolve and set the client in the cache
    } catch (error: unknown) {
        cached.promise = null // if there is an error, set the promise to null to clear the cache
        throw error
    }
    return cached.client // return the payload client
}
