const { Pool } = require('pg');

module.exports = {
    connection: new Pool({
        user: 'suppliera',
        host: 'db',
        database: 'suppliera',
        password: 'suppliera',
        port: 5432
    })
}