const { Pool } = require("pg");
require("dotenv").config();

const password = process.env.DB_PASSWORD;
// PostgreSQL database configuration
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "Project_omar_before_modification",
  password: password,
  port: 5432,
});
module.exports = pool;
