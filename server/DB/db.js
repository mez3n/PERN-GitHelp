const { Pool } = require("pg");
require("dotenv").config();

const password = process.env.DB_PASSWORD||'1234';
// PostgreSQL database configuration
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "GitHelp_1.4",
  password: password,
  port: 5432,
});
module.exports = pool;
