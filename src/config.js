import {config} from 'dotenv'


export const configu = config();

export const PORT = 4000;
export const HOST = `http://localhost:${PORT}`;

export const MERCADOPAGO_API_KEY = process.env.MERCADOPAGO_API_KEY