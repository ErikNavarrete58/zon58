var express = require('express')
var router = express.Router()
const pool = require('../database');


router.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now())
    next()
})

router.get('/Kids', async (req, res) => {

    
    res.render('kids/inicio')
   })

   router.get('/kidslibre', async (req, res) => {

    const vistas = await pool.query("SELECT * FROM `tablageneral_mix_ed_20a`");
    const j1 = await pool.query("SELECT * FROM `jor_mx_ed_20` ORDER BY `jor_mx_ed_20`.`Jornada` DESC");
    const goles = await pool.query("SELECT * FROM `golsim_ed_fem_20` LIMIT 10");
    const equipos = await pool.query("SELECT * FROM `jor_mx_ed_20` ORDER BY `jor_mx_ed_20`.`Equilocal` ASC , `jor_mx_ed_20`.`Jornada` DESC");
    res.render('partials/index/edlibre' , { vistas , j1 , goles , equipos })
   })

   router.get('/kids18', async (req, res) => {

    const vistas = await pool.query("SELECT * FROM `tablageneral_mix_ed_20a`");
    const j1 = await pool.query("SELECT * FROM `jor_mx_ed_20` ORDER BY `jor_mx_ed_20`.`Jornada` DESC");
    const goles = await pool.query("SELECT * FROM `golsim_ed_fem_20` LIMIT 10");
    const equipos = await pool.query("SELECT * FROM `jor_mx_ed_20` ORDER BY `jor_mx_ed_20`.`Equilocal` ASC , `jor_mx_ed_20`.`Jornada` DESC");
    res.render('partials/index/edlibre' , { vistas , j1 , goles , equipos })
   })

module.exports = router