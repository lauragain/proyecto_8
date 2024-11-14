const pool = require("../config/db")

function selectAll(){
    return pool.query('select * from autores')
}

function selectById(id){
    return pool.query('select * FROM autores WHERE idautores = ?', [id])
}

function insertAutor({nombre, email, imagen}){
    return pool.query(
        'insert into autores (nombre, email, imagen) values (?, ?, ?)', [nombre, email, imagen]
    )
}

module.exports = {
    selectAll, selectById, insertAutor
}