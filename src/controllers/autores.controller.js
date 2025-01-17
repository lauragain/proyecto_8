
const { selectAll, selectById, insertAutor, selectPostByAutor } = require("../models/autores.model")

const getAllAutores = async (req, res, next) => {
    try {
        const [result] = await selectAll()
        res.json(result)
    } catch (error) {
        next(error)
    }
}

const getAutoresById = async (req, res, next) => {
    try {
        const { id } = req.params
        const [result]= await selectById(id)
        if (result.length === 0) return res.status(404).json({ error: 'No se ha encontrado el autor'})
        res.json(result[0]) 
    } catch (error) {
        next(error)
    }
}

const getPostsByAutor = async (req, res, next) => {
    try {
        const { autorId } = req.params
        const [result] = await selectPostByAutor(autorId)
        if (result.length === 0){
            return res.status(404).json({ message: 'No se han encontrado posts de este autor'})
        }
        res.json(result)
    } catch (error) {
        next(error)
    }
}

const createAutor = async (req, res, next) => {
    try {
        const [result] = await insertAutor(req.body)
        const [autor] = await selectById(result.insertId)
        res.status(201).json(autor[0])
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getAllAutores, getAutoresById, getPostsByAutor, createAutor
}