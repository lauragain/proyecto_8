const pool = require("../config/db")

function selectAll(){
    return pool.query('select * from autores')
}

module.exports = {
    selectAll
}