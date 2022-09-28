const express = require ('express')

const app = express()


app.get('/', function(req, res) {
    res.send('<h1>Hello World</h1>')
})


app.listen(3000, function() {
    console.log('Server started on port 3000')
})


app.all('/teste', function(req, res) {
    res.send('<h1>Teste</h1>')
})

app.get(/api/, function(req, res) { 
    res.send('<h1>API</h1>')
    })