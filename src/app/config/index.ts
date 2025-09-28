import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.join(process.cwd(), ".env") });

const {

  NODE_ENV,
  DB_URL,
  PORT,
  
} = process.env;
export default {
  database_url: DB_URL,
  port: PORT,
  NODE_ENV: NODE_ENV,

};
