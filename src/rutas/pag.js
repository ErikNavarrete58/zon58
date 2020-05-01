var express = require('express')
var router = express.Router()
const pool = require('../database');

router.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now())
    next()
})
// define la ruta de la página principal
router.get('/', function (req, res) {
    res.send('Pagina principal')
})
// ruta de ligaed
router.get('/ligaed', function (req, res) {
    res.send('Pagina ed')
})


module.exports = router