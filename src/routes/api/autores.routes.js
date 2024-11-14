const { getAllAutores, getAutoresById } = require('../../controllers/autores.controller')

const router = require('express').Router();

router.get('/', getAllAutores)
router.get('/:id', getAutoresById)

module.exports = router;