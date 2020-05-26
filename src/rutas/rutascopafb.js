var express = require('express')
var router = express.Router()
const pool = require('../database');


router.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now())
    next()
})


////
///// ruta principal
///

router.get('/copafb', async (req, res) => {

    
    res.render('copafb/inicio')
   })

/////
/////
/////
/////Rutas categorias principales
////
////
////


   router.get('/Copafb18', async (req, res) => {

    const vistas = await pool.query("SELECT * FROM `FB_tablageneral_sub18_a20`");
    
    res.render('partials/index/edlibre' , { vistas  })
   })

   router.get('/Copafb20', async (req, res) => {

    const vistas = await pool.query("SELECT * FROM `FB_tablageneral_sub20_a20`");
    
    res.render('partials/index/edlibre' , { vistas  })
   })

/////
/////
/////
///// FIN Rutas categorias principales
////
////
////


/////
/////
/////
/////  Rutas BUSCAR
////
////
////

   router.get('/fbidequipo', async (req, res) => {
    res.render('copafb/idequipo')

})

router.get('/fbhistorica', async (req, res) => {
    const vistas = await pool.query("SELECT * FROM `FB_historica_global_20`");

    res.render('partials/index/edlibre' , { vistas  })

})

router.post('/fbidequipo', async (req, res) => {
    const {id} = req.body;

    console.log(id)
    const Globales = await pool.query("Select * From `FB_historica_global_20` WHERE ID = ?" , [id])
  
    const Globales20 = await pool.query("Select * From `FB_tablageneral_sub20_a20` WHERE ID = ?" , [id])
    const Globales17 = await pool.query("Select * From `FB_tablageneral_sub18_a20` WHERE ID = ?" , [id])



const registro = await pool.query("Select * From `Registros Global Equipo Heroes` WHERE Id_plantel = ?" , [id])

res.render('copafb/idlogrosequipo',{registro,Globales,Globales20,Globales17},)
})

router.get('/fbid', function (req, res) {
    res.render('copafb/id')
})

router.post('/fbid', async (req, res) => {
    const {id} = req.body;

    console.log(id)
const registro = await pool.query("Select * From `Registro Global Heroes` WHERE ID_FB = ?" , [id])

res.render('copafb/idlogros',{registro},)
})
/////
/////
/////
///// FIN Rutas BUSCAR
////
////
////


module.exports = router