require('dotenv').config();
const { Pool } = require('pg');

const db = new Pool();

module.exports = db;
