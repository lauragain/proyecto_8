const pool = require("../config/db")

function selectAll(){
    return pool.query('select * from posts')
}

function selectById(id){
    return pool.query('select * from posts where idposts = ?', [id])
}

module.exports = {
    selectAll, selectById
}