const { selectAll } = require("../models/posts.model")

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
        
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getAllPosts, getPostsById
}