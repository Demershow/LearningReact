const express = require ('express')

const router = express.Router()

router.use(function(req, res, next) {
   const init = Date.now()
    next()
    console.log(`Tempo = ${Date.now() - init} ms.`)
})

router.get('/produtos/:id', function(req, res) {
    res.json({id: req.params.id, name: 'Caneta'})
})

router.get('/clientes/:id', function(req, res) {
    res.json({id: req.params.id, name: 'João'})
})

module.exports = router