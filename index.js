const http = require('node:http')

require('dotenv').config()

const app = require('./src/app')

const server = http.createServer()


const PORT = process.env.PORT || 3000
server.listen(PORT)

server.on('listening', () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`)
})