const express = require ('express')

const app = express()


app,route('/clientes')
    .get(function(req, res) {
        res.send('<h1>Lista de Clientes</h1>')
    })
    .post(function(req, res) {
        res.send('<h1>Novo Cliente</h1>')
    })
    .put(function(req, res) {
        res.send('<h1>Altera Cliente</h1>')
    })
    .delete(function(req, res) {
        res.send('<h1>Remove Cliente</h1>') 
    })

    
app.listen(3000, function() {
    console.log('Server started on port 3000')
})
