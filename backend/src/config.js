import { config } from "dotenv";
config();

export const PORT = process.env.PORT || 3001;
export const USER = process.env.USER;
export const PASSWORD = process.env.PASSWORD;
export const DATABASE = process.env.DATABASE;
export const SERVER = process.env.SERVER;
