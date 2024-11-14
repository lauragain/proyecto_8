const { getAllPosts, getPostsById, createPost } = require('../../controllers/posts.controller');

const router = require('express').Router();

router.get('/', getAllPosts)
router.get('/:id', getPostsById)
router.post('/', createPost)

module.exports = router;