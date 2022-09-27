const http = require('http')

const server = http.createServer((req, res) => {
    res.writeHead(200, {'content-type': 'text/html'})
    res.end('<h1>Teste</h1>')
})


const porta = 3000

server.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}`)
})  