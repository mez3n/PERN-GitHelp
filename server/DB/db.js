const { Pool } = require("pg");
require("dotenv").config();

const password = process.env.DB_PASSWORD;
// PostgreSQL database configuration
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "GitHelp",
  password: password,
  port: 5432,
});
module.exports = pool;
