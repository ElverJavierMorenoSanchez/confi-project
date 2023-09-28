import sql from "mssql";
import { DATABASE, PASSWORD, SERVER, USER } from "../config";

const sqlConfig = {
  user: USER,
  password: PASSWORD,
  database: DATABASE,
  server: SERVER,
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000,
  },
  options: {
    encrypt: true, // for azure
    trustServerCertificate: true, // change to true for local dev / self-signed certs
  },
};

const getConnection = async () => {
  try {
    const pool = await sql.connect(sqlConfig);
    return pool;
  } catch (error) {
    console.log(error);
  }
};

export { getConnection, sql };
