import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'mgwc797phg',
  apiKey: process.env.API_KEY,
});