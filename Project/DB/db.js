const { Pool } = require("pg");

const password = "";
// PostgreSQL database configuration
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "Project",
  password: password,
  port: 5432,
});
module.exports = pool;
