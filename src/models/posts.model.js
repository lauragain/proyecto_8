const pool = require("../config/db")

function selectAll(){
    return pool.query('select * from posts')
}

function selectById(id){
    return pool.query('select * from posts where idposts = ?', [id])
}

function insertPost({ titulo, descripcion, categoria, autores_idautores}){
    return pool.query(
        'insert into posts (titulo, descripcion, categoria, autores_idautores) values (?, ?, ?, ?)', [titulo, descripcion, categoria, autores_idautores]
    )
}

module.exports = {
    selectAll, selectById, insertPost
}