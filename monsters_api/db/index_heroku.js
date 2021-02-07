const { Pool } = require('pg');
const { connectionString, ssl } = require('../secrets/db_configuration_heroku')

const pool = new Pool({ connectionString, ssl });

module.exports = pool;