var express = require('express')
var router = express.Router()
const pool = require('../database');


router.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now())
    next()
})

router.get('/id', function (req, res) {
    res.render('ligasld/id')
})

router.post('/id', async (req, res) => {
    const {id} = req.body;

    console.log(id)
const registro = await pool.query("Select * From `Registro Global Heroes` WHERE ID_FB = ?" , [id])
const premiacion = await pool.query("Select * From `Premiaciones_Individuales` WHERE ID_FB = ?" , [id])
const toractual = await pool.query("Select * From `ed_tablagoleo_fm_a20` WHERE ID_FB = ?" , [id])

res.render('ligasld/idlogros',{registro,premiacion, toractual},)
})

router.post('/idbuscar', async (req, res) => {
    const {id} = req.body;
const idp = "%"+ id + "%";
    console.log(idp)
const idbuscar = await pool.query("SELECT * FROM `Registro Global Heroes` WHERE `Nombres` LIKE ?",[idp])
console.log(idbuscar)
res.render('ligasld/idbuscar',{idbuscar})
})


router.get('/idequipo', function (req, res) {
    res.render('ligasld/idequipo')
})

router.post('/idequipo', async (req, res) => {
    const {id} = req.body;

    console.log(id)
const registro = await pool.query("Select * From `Registros Global Equipo Heroes` WHERE Id_plantel = ?" , [id])
const logrosequipos = await pool.query("Select * From `Historial_Campeones` WHERE Id_plantel = ?" , [id])

res.render('ligasld/idlogrosequipo',{registro,logrosequipos},)
})

router.post('/idbuscarequipos', async (req, res) => {
    const {id} = req.body;
const idp = "%"+ id + "%";
    console.log(idp)
const idbuscar = await pool.query("SELECT * FROM `Registros Global Equipo Heroes` WHERE `Nombre_Equipo` LIKE ?" , [idp])
console.log(idbuscar)
res.render('ligasld/idbuscarequipos',{idbuscar})
})



module.exports = router