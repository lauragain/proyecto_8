
const { selectAll } = require("../models/autores.model")

const getAllAutores = async (req, res, next) => {
    try {
        const [result] = await selectAll()
        res.json(result)
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getAllAutores
}