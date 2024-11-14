const { getAllAutores, getAutoresById, createAutor, getPostsByAutor } = require('../../controllers/autores.controller')

const router = require('express').Router();

router.get('/', getAllAutores)
router.get('/:id', getAutoresById)
router.get('/:autorId/posts', getPostsByAutor)
router.post('/', createAutor)

module.exports = router;