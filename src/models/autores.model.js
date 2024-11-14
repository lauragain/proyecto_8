const pool = require("../config/db")

function selectAll(){
    return pool.query('select * from autores')
}

function selectById(id){
    return pool.query('select * FROM autores where idautores = ?', [id])
}

function selectPostByAutor(autorId){
    return pool.query('select * from posts where autores_idautores = ?', [autorId])
}

function insertAutor({nombre, email, imagen}){
    return pool.query(
        'insert into autores (nombre, email, imagen) values (?, ?, ?)', [nombre, email, imagen]
    )
}

module.exports = {
    selectAll, selectById, selectPostByAutor, insertAutor
}