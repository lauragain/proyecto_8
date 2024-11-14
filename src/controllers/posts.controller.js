const { selectAll, selectById } = require("../models/posts.model")

const getAllPosts = async (req, res, next) => {
    try {
        const [result] = await selectAll()
        res.json(result)
    } catch (error) {
        next(error)
    }
}

const getPostsById = async (req, res, next) => {
    try {
        const { id } = req.params
        const [result] = await selectById(id)
        if (result.length === 0) return res.status(404).json({ error: 'No se ha encontrado el post'})
        res.json(result[0]) 
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getAllPosts, getPostsById
}