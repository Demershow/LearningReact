const express = require ('express')

const app = express()


app.use('/api', function(req, res, next) {
        console.log('Inicio...')
        next()
        console.log('Fim...')
    }, function(req, res) {
        console.log('Resposta...')
        res.send('<h1>Hello World</h1>')
    })

app.listen(3000, function() {
    console.log('Server started on port 3000')
})
