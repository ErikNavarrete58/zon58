var express = require('express')
var router = express.Router()
const pool = require('../database');


router.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now())
    next()
})



// define la ruta de la página principal de futbol
router.get('/', function (req, res) {
    res.render('partials/index/principal')
})
// define la ruta de la página principal



// define la ruta de la página principal de futbol
router.get('/Futbol', function (req, res) {
    res.render('partials/index/index')
})
// define la ruta de la página principal




/// rutas Liga ed
router.get('/ligaed', function (req, res) {
    res.render('partials/index/ligaed')
})

// ruta Liga ed mixto
router.get('/Edmixto', async (req, res) => {

 const vistas = await pool.query("SELECT * FROM `tablageneral_mix_ed_20a`");
 const j1 = await pool.query("SELECT * FROM `jor_mx_ed_20` ORDER BY `jor_mx_ed_20`.`Jornada` DESC");

 res.render('partials/index/edlibre' , { vistas , j1 },)
})
///

// ruta libre ed libre
router.get('/Edlibre', async (req, res) => {

    const vistas = await pool.query("SELECT * FROM `tablageneral_mix_ed_20a`");
    const j1 = await pool.query("SELECT * FROM `jor_mx_ed_20` ORDER BY `jor_mx_ed_20`.`Jornada` DESC");
   
    res.render('partials/index/edlibre' , { vistas , j1 },)
   })

   // ruta libre ed femenil
router.get('/Edfemenil', async (req, res) => {

    const vistas = await pool.query("SELECT * FROM `tablageneral_mix_ed_20a`");
    const j1 = await pool.query("SELECT * FROM `jor_mx_ed_20` ORDER BY `jor_mx_ed_20`.`Jornada` DESC");
    const goles = await pool.query("SELECT * FROM `golsim_ed_fem_20` LIMIT 10");
    const equipos = await pool.query("SELECT * FROM `jor_mx_ed_20` ORDER BY `jor_mx_ed_20`.`Equilocal` ASC , `jor_mx_ed_20`.`Jornada` DESC");
    res.render('partials/index/edlibre' , { vistas , j1 , goles , equipos })
   })



module.exports = router