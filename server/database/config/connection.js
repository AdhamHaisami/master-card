const { Pool } = require('pg');
const { DATABASE_URL } = process.env;

const dbUrl = DATABASE_URL;

const options = {
  connectionString: dbUrl,
  ssl: false,
};

const pool = new Pool(options);

module.exports = pool;
