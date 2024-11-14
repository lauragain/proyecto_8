const { getAllPosts, getPostsById } = require('../../controllers/posts.controller');

const router = require('express').Router();

router.get('/', getAllPosts)
router.get('/', getPostsById)

module.exports = router;