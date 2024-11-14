const pool = require("../config/db")

function selectAll(){
    return pool.query('select posts.*, autores.nombre, autores.email, autores.imagen from posts join autores on posts.autores_idautores = autores.idautores')
}

function selectById(id){
    return pool.query('select posts.*, autores.nombre, autores.email, autores.imagen from posts join autores on posts.autores_idautores = autores.idautores where posts.idposts = ?', [id])
}

function insertPost({ titulo, descripcion, categoria, autores_idautores}){
    return pool.query(
        'insert into posts (titulo, descripcion, categoria, autores_idautores) values (?, ?, ?, ?)', [titulo, descripcion, categoria, autores_idautores]
    )
}

module.exports = {
    selectAll, selectById, insertPost
}