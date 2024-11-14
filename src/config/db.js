const mysql = require('mysql2')

const pool = mysql.createPool({
    host: 'prueba',
    user: 'root',
    password: 'Pufy_iyami8',
    port: 3306,
    database: 'blog'
})

module.exports = pool.promise()