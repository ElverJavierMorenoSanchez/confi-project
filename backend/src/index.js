import express from "express";
import sql from "mssql";
const app = express();

const sqlConfig = {
  user: "admin",
  password: "230300Ej",
  database: "prueba",
  server: "localhost",
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

app.listen(3000, async () => {
  console.log("server running...");
  const pool = await sql.connect(sqlConfig);

  const result = await pool.query("Select * from Academicos ");

  console.log(result);
});
