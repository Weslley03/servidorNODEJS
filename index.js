const express = require('express') //importa o express
const server = express() //cria o metodo de invocação do servidor
const rotaUsuarios = require('./rotas/rotaUsuarios')

server.get('/', (request, response) => {
    return response.send('tela inicial da aplicação')
})

server.use('/users', rotaUsuarios)

server.listen(3000)