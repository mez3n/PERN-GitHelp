const { Pool } = require("pg");
require("dotenv").config();

const password = process.env.DB_PASSWORD;
// PostgreSQL database configuration
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "Project",
  password: password,
  port: 5432,
});
module.exports = pool;
