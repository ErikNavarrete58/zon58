var express = require('express')
var router = express.Router()
const pool = require('../database');


router.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now())
    next()
})
// define la ruta de la página principal
router.get('/', function (req, res) {
    res.render('partials/index/index')
})
// define la ruta de la página principal




/// rutas Liga ed
router.get('/ligaed', function (req, res) {
    res.render('partials/index/ligaed')
})

// ruta Liga ed
router.get('/Edlibre', async (req, res) => {

 const vistas = await pool.query("SELECT * FROM `tablageneral_mix_ed_20a`");
 res.render('partials/index/edlibre' , { vistas},)
})
///

module.exports = router