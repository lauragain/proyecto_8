const pool = require("../config/db")

function selectAll(){
    return pool.query('select * from autores')
}

function selectById(id){
    return pool.query('select * FROM autores WHERE idautores = ?', [id])
}

module.exports = {
    selectAll, selectById
}