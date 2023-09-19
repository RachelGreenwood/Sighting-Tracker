const { Pool } = require('pg');
const db = new Pool({
    connectionString: process.env.DB_URI
  });

  db.connect()
    .then(() => console.log('Connected to the database'))
    .catch(error => console.error('Error connecting to the database:', error));

  module.exports = db;