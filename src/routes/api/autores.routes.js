const { getAllAutores, getAutoresById, createAutor } = require('../../controllers/autores.controller')

const router = require('express').Router();

router.get('/', getAllAutores)
router.get('/:id', getAutoresById)
router.post('/', createAutor)

module.exports = router;