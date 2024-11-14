
const { selectAll, selectById } = require("../models/autores.model")

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

module.exports = {
    getAllAutores, getAutoresById
}