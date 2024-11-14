const { getAllAutores } = require('../../controllers/autores.controller')

const router = require('express').Router();

router.get('/', getAllAutores)

module.exports = router;