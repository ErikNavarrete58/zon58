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
 const j1 = await pool.query("SELECT * FROM `jor_ed_mix_a20` ORDER BY `jor_ed_mix_a20`.`Jornada` DESC");
 const equipos = await pool.query("SELECT * FROM `jor_ed_mix_a20` ORDER BY `Equipolc` desc ,`Jornada`  desc");

 res.render('partials/index/edlibre' , { vistas , j1,equipos },)
})
///

// ruta libre ed libre
router.get('/Edlibre', async (req, res) => {

    const vistas = await pool.query("SELECT * FROM `ed_general_libre_a20`");
    const j1 = await pool.query("SELECT * FROM `futbolce_zon58`.`ed_jor_libre_a20` ORDER BY `Jornada` DESC");
    const equipos = await pool.query("SELECT * FROM `futbolce_zon58`.`ed_jor_libre_a20` ORDER BY `Equipo` DESC, `Jornada` DESC");
    const goles = await pool.query("SELECT * FROM `ed_tablagoleo_libre_a20` LIMIT 10");
    console.log(goles);
    res.render('partials/index/edlibre' , { vistas , j1 ,goles, equipos })
   })

   // ruta libre ed femenil
router.get('/Edfemenil', async (req, res) => {

    const vistas = await pool.query("SELECT * FROM `ed_general_fm_a20`");
    const j1 = await pool.query("SELECT * FROM `futbolce_zon58`.`ed_jor_feme_a20` ORDER BY `Jornada` DESC ");
    const equipos = await pool.query("SELECT * FROM `futbolce_zon58`.`ed_jor_feme_a20` ORDER BY `Equipo` DESC, `Jornada` ASC");
    const goles = await pool.query("SELECT * FROM `ed_tablagoleo_fm_a20` LIMIT 10");
    console.log(goles);
    res.render('partials/index/edlibre' , { vistas , j1 ,goles, equipos })
   })

   router.get('/Edsub20', async (req, res) => {

    const vistas = await pool.query("SELECT * FROM `ed_general_sub20_a20`");
    const j1 = await pool.query("SELECT * FROM `futbolce_zon58`.`ed_jor_sub20_a20` ORDER BY `Jornada` DESC");
    const equipos = await pool.query("SELECT * FROM `futbolce_zon58`.`ed_jor_sub20_a20` ORDER BY `Equipo` DESC, `Jornada` DESC");
    const goles = await pool.query("SELECT * FROM `ed_tablagoleo_s20_a20` LIMIT 10");
    console.log(goles);
    res.render('partials/index/edlibre' , { vistas , j1 ,goles, equipos })
   })

   router.get('/Edsub23', async (req, res) => {

    const vistas = await pool.query("SELECT * FROM `ed_general_sub23_a20`");
    const j1 = await pool.query("SELECT * FROM `futbolce_zon58`.`ed_jor_sub23_a20` ORDER BY `Jornada` DESC");
    const equipos = await pool.query("SELECT * FROM `futbolce_zon58`.`ed_jor_sub23_a20` ORDER BY `Equipo` DESC, `Jornada` DESC");
    const goles = await pool.query("SELECT * FROM `ed_tablagoleo_s23_a20` LIMIT 10");
    console.log(goles);
    res.render('partials/index/edlibre' , { vistas , j1 ,goles, equipos })
   })

module.exports = router