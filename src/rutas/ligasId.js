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
const registro = await pool.query("Select * From `registro global heroes` WHERE ID_FB = ?" , [id])
const premiacion = await pool.query("Select * From `premiacion_individuales_futbol` WHERE ID_FB = ?" , [id])
const toractual = await pool.query("Select * From `golsim_ed_fem_20` WHERE ID_FB = ?" , [id])

res.render('ligasld/idlogros',{registro,premiacion, toractual},)
})

router.post('/idbuscar', async (req, res) => {
    const {id} = req.body;
const idp = "%"+ id + "%";
    console.log(idp)
const idbuscar = await pool.query("SELECT * FROM `registro global heroes` WHERE `Nombres` LIKE ?",[idp])
console.log(idbuscar)
res.render('ligasld/idbuscar',{idbuscar})
})



module.exports = router