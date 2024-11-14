const pool = require("../config/db")

function selectAll(){
    return pool.query('select * from posts')
}

module.exports = {
    selectAll
}