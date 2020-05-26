var express = require('express')
var router = express.Router()
const pool = require('../database');

router.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now())
    next()
})


router.get('/edpasado', function (req, res) {
    res.render('admined/pasadas')
})


///// 
/////
/////
/////
/////
/////
/////Inicia ed libre historicos
/////
/////
/////
/////
/////
/////
router.get('/edlibrea2019', async (req, res) => {
    const vistas = await pool.query("SELECT * FROM `ed_general_libre_c19`");
    const j1 = await pool.query("SELECT * FROM `futbolce_zon58`.`ed_jor_libre_c19` ORDER BY `Jornada` DESC");
    const equipos = await pool.query("SELECT * FROM `futbolce_zon58`.`ed_jor_libre_c19` ORDER BY `Equipo` DESC, `Jornada` DESC");
    const goles = await pool.query("SELECT * FROM `ed_tablagoleo_libre_a20` LIMIT 10");
    console.log(goles);
    res.render('partials/index/edlibre' , { vistas , j1 ,goles, equipos })

})

router.get('/edlibrec2018', async (req, res) => {
    const vistas = await pool.query("SELECT * FROM `ed_general_libre_c18`");
    const goles = await pool.query("SELECT * FROM `ed_tablagoleo_c18` LIMIT 10");

    res.render('partials/index/edlibre' , { vistas,goles})

})

router.get('/edlibrea2018', async (req, res) => {
    const vistas = await pool.query("SELECT * FROM `ed_general_libre_a18`");
    const j1 = await pool.query("SELECT * FROM `futbolce_zon58`.`ed_jor_libre_a18` ORDER BY `Jornada` DESC");
    const equipos = await pool.query("SELECT * FROM `futbolce_zon58`.`ed_jor_libre_a18` ORDER BY `Equipo` DESC, `Jornada` DESC");
    res.render('partials/index/edlibre' , { vistas ,j1 , equipos})

})

router.get('/edlibrec2017', async (req, res) => {
    const vistas = await pool.query("SELECT * FROM `ed_general_libre_c17`");
    const j1 = await pool.query("SELECT * FROM `futbolce_zon58`.`ed_jor_libre_c17` ORDER BY `Jornada` DESC");
    const equipos = await pool.query("SELECT * FROM `futbolce_zon58`.`ed_jor_libre_c17` ORDER BY `Equipo` DESC, `Jornada` DESC");
    res.render('partials/index/edlibre' , { vistas ,j1 , equipos})

})
router.get('/edlibrea2017', async (req, res) => {
    const vistas = await pool.query("SELECT * FROM `ed_general_libre_a17`");
    const j1 = await pool.query("SELECT * FROM `futbolce_zon58`.`ed_jor_libre_a17` ORDER BY `Jornada` DESC");
    const equipos = await pool.query("SELECT * FROM `futbolce_zon58`.`ed_jor_libre_a17` ORDER BY `Equipo` DESC, `Jornada` DESC");
    res.render('partials/index/edlibre' , { vistas ,j1 , equipos})

})

router.get('/edlibrec2016', async (req, res) => {
    const vistas = await pool.query("SELECT * FROM `ed_general_libre_c16`");
    const j1 = await pool.query("SELECT * FROM `futbolce_zon58`.`ed_jor_libre_c16` ORDER BY `Jornada` DESC");
    const equipos = await pool.query("SELECT * FROM `futbolce_zon58`.`ed_jor_libre_c16` ORDER BY `Equipo` DESC, `Jornada` DESC");
    const goles = await pool.query("SELECT * FROM `ed_tablagoleo_libre_a16` LIMIT 10");

    res.render('partials/index/edlibre' , { vistas ,j1 , equipos,goles})

})

router.get('/edlibrec2015', async (req, res) => {
    const vistas = await pool.query("SELECT * FROM `ed_general_libre_c15`");
    const j1 = await pool.query("SELECT * FROM `futbolce_zon58`.`ed_jor_libre_c15` ORDER BY `Jornada` DESC");
    const equipos = await pool.query("SELECT * FROM `futbolce_zon58`.`ed_jor_libre_c15` ORDER BY `Equipo` DESC, `Jornada` DESC");
    const goles = await pool.query("SELECT * FROM `ed_tablagoleo_librec15` LIMIT 10");

    res.render('partials/index/edlibre' , { vistas ,j1 , equipos,goles})

})


router.get('/edlibrea2015', async (req, res) => {
    const vistas = await pool.query("SELECT * FROM `ed_general_libre_a15`");
    const j1 = await pool.query("SELECT * FROM `futbolce_zon58`.`ed_jor_libre_a15` ORDER BY `Jornada` DESC");
    const equipos = await pool.query("SELECT * FROM `futbolce_zon58`.`ed_jor_libre_a15` ORDER BY `Equipo` DESC, `Jornada` DESC");
    const goles = await pool.query("SELECT * FROM `ed_tablagoleo_libre_a15` LIMIT 10");

    res.render('partials/index/edlibre' , { vistas ,j1 , equipos,goles})

})

router.get('/edlibre2014', async (req, res) => {
    const vistas = await pool.query("SELECT * FROM `ed_general_libre_14`");
    const j1 = await pool.query("SELECT * FROM `futbolce_zon58`.`ed_jor_libre_a14` ORDER BY `Jornada` DESC");
    const equipos = await pool.query("SELECT * FROM `futbolce_zon58`.`ed_jor_libre_a14` ORDER BY `Equipo` DESC, `Jornada` DESC");
    const goles = await pool.query("SELECT * FROM `ed_tablagoleo_libre_14` LIMIT 10");

    res.render('partials/index/edlibre' , { vistas ,j1 , equipos,goles})

})
///// 
/////
/////
/////
/////
/////
/////Inicia ed femenil historicos
/////
/////
/////
/////
/////
/////

router.get('/edfemenilc19', async (req, res) => {
    const vistas = await pool.query("SELECT * FROM `ed_general_feme_c19`");
    const goles = await pool.query("SELECT * FROM `ed_tablagoleo_fm_c19` LIMIT 10");

    const j1 = await pool.query("SELECT * FROM `futbolce_zon58`.`ed_jor_feme_c19` ORDER BY `Jornada` DESC");
    const equipos = await pool.query("SELECT * FROM `futbolce_zon58`.`ed_jor_feme_c19` ORDER BY `Equipo` DESC, `Jornada` DESC");
    res.render('partials/index/edlibre' , { vistas ,j1 , equipos, goles})

})

router.get('/edfemenila19', async (req, res) => {
    const vistas = await pool.query("SELECT * FROM `ed_general_feme_a19`");
    const j1 = await pool.query("SELECT * FROM `futbolce_zon58`.`ed_jor_feme_a19` ORDER BY `Jornada` DESC");
    const equipos = await pool.query("SELECT * FROM `futbolce_zon58`.`ed_jor_feme_a19` ORDER BY `Equipo` DESC, `Jornada` DESC");
    res.render('partials/index/edlibre' , { vistas ,j1 , equipos})

})

router.get('/edfemenilc18', async (req, res) => {
    const vistas = await pool.query("SELECT * FROM `ed_general_feme_c18`");
    const j1 = await pool.query("SELECT * FROM `futbolce_zon58`.`ed_jor_feme_c18` ORDER BY `Jornada` DESC");
    const equipos = await pool.query("SELECT * FROM `futbolce_zon58`.`ed_jor_feme_c18` ORDER BY `Equipo` DESC, `Jornada` DESC");
    res.render('partials/index/edlibre' , { vistas ,j1 , equipos})

})

router.get('/edfemenila17', async (req, res) => {
    const vistas = await pool.query("SELECT * FROM `ed_general_feme_a17`");
    const j1 = await pool.query("SELECT * FROM `futbolce_zon58`.`ed_jor_feme_a17` ORDER BY `Jornada` DESC");
    const equipos = await pool.query("SELECT * FROM `futbolce_zon58`.`ed_jor_feme_a17` ORDER BY `Equipo` DESC, `Jornada` DESC");
    res.render('partials/index/edlibre' , { vistas ,j1 , equipos})

})

router.get('/edfemenilc17', async (req, res) => {
    const vistas = await pool.query("SELECT * FROM `ed_general_feme_c17`");
    const j1 = await pool.query("SELECT * FROM `futbolce_zon58`.`ed_jor_feme_c17` ORDER BY `Jornada` DESC");
    const equipos = await pool.query("SELECT * FROM `futbolce_zon58`.`ed_jor_feme_c17` ORDER BY `Equipo` DESC, `Jornada` DESC");
    const goles = await pool.query("SELECT * FROM `ed_tablagoleo_17` LIMIT 10");

    res.render('partials/index/edlibre' , { vistas ,j1 , equipos,goles})

})

router.get('/edfemenil16', async (req, res) => {
    const vistas = await pool.query("SELECT * FROM `ed_general_feme_16`");
    const j1 = await pool.query("SELECT * FROM `futbolce_zon58`.`ed_jor_feme_16` ORDER BY `Jornada` DESC");
    const equipos = await pool.query("SELECT * FROM `futbolce_zon58`.`ed_jor_feme_16` ORDER BY `Equipo` DESC, `Jornada` DESC");
    res.render('partials/index/edlibre' , { vistas ,j1 , equipos})

})


///// 
/////
/////
/////
/////
/////
/////Inicia ed mixto historicos
/////
/////
/////
/////
/////
/////

router.get('/edmixtoc19', async (req, res) => {
    const vistas = await pool.query("SELECT * FROM `ed_general_mixto_c19`");
    const j1 = await pool.query("SELECT * FROM `futbolce_zon58`.`ed_jor_mix_c19` ORDER BY `Jornada` DESC");
    const equipos = await pool.query("SELECT * FROM `futbolce_zon58`.`ed_jor_mix_c19` ORDER BY `Equipo` DESC, `Jornada` DESC");
    res.render('partials/index/edlibre' , { vistas ,j1 , equipos})

})

router.get('/edmixtoc18', async (req, res) => {
    const vistas = await pool.query("SELECT * FROM `ed_general_mixto_c18`");
    const j1 = await pool.query("SELECT * FROM `futbolce_zon58`.`ed_jor_mix_c18` ORDER BY `Jornada` DESC");
    const equipos = await pool.query("SELECT * FROM `futbolce_zon58`.`ed_jor_mix_c18` ORDER BY `Equipo` DESC, `Jornada` DESC");
    res.render('partials/index/edlibre' , { vistas ,j1 , equipos})

})

router.get('/edmixtoa18', async (req, res) => {
    const vistas = await pool.query("SELECT * FROM `ed_general_mixto_a18`");
    const j1 = await pool.query("SELECT * FROM `futbolce_zon58`.`ed_jor_mixta_a18` ORDER BY `Jornada` DESC");
    const equipos = await pool.query("SELECT * FROM `futbolce_zon58`.`ed_jor_mixta_a18` ORDER BY `Equipo` DESC, `Jornada` DESC");
    res.render('partials/index/edlibre' , { vistas ,j1 , equipos})

})
router.get('/edmixto17', async (req, res) => {
    const vistas = await pool.query("SELECT * FROM `ed_general_mixto_17`");
    const j1 = await pool.query("SELECT * FROM `futbolce_zon58`.`ed_jor_mix_17` ORDER BY `Jornada` DESC");
    const equipos = await pool.query("SELECT * FROM `futbolce_zon58`.`ed_jor_mix_17` ORDER BY `Equipo` DESC, `Jornada` DESC");
    res.render('partials/index/edlibre' , { vistas ,j1 , equipos})

})
///// 
/////
/////
/////
/////
/////
/////termina mixtos historicos
/////
/////
/////
/////
/////
/////

///// 
/////
/////
/////
/////
/////
/////inicia  S-23 historicos
/////
/////
/////
/////
/////
/////
router.get('/eds23c19', async (req, res) => {
    const vistas = await pool.query("SELECT * FROM `ed_general_s23_c19`");
    
    res.render('partials/index/edlibre' , { vistas })

})

///// 
/////
/////
/////
/////
/////
/////termina s23 historicos
/////
/////
/////
/////
/////
/////

///// 
/////
/////
/////
/////
/////
/////inicia  S-20 historicos
/////
/////
/////
/////
/////
/////

router.get('/eds20i19', async (req, res) => {
    const vistas = await pool.query("SELECT * FROM `ed_general_s20_I19`");
    
    res.render('partials/index/edlibre' , { vistas })

})


router.get('/eds20a19', async (req, res) => {
    const vistas = await pool.query("SELECT * FROM `ed_general_a19`");
    
    res.render('partials/index/edlibre' , { vistas })

})

router.get('/eds20c19', async (req, res) => {
    const vistas = await pool.query("SELECT * FROM `ed_general_sub20_c10`");
    
    res.render('partials/index/edlibre' , { vistas })

})

router.get('/eds20c18', async (req, res) => {
    const vistas = await pool.query("SELECT * FROM `ed_general_s20_c18`");
    
    res.render('partials/index/edlibre' , { vistas })

})

///// 
/////
/////
/////
/////
/////
/////termina s20 historicos
/////
/////
/////
/////
/////
/////

///// 
/////
/////
/////
/////
/////
/////inicia  S-17 historicos
/////
/////
/////
/////
/////
/////

router.get('/eds17a16', async (req, res) => {
    const vistas = await pool.query("SELECT * FROM `ed_general_sub17_a16`");
    
    res.render('partials/index/edlibre' , { vistas })

})

router.get('/eds1717', async (req, res) => {
    const vistas = await pool.query("SELECT * FROM `ed_general_sub17_17`");
    
    res.render('partials/index/edlibre' , { vistas })

})

router.get('/eds1718', async (req, res) => {
    const vistas = await pool.query("SELECT * FROM `ed_general_sub17_2018`");
    
    res.render('partials/index/edlibre' , { vistas })

})

///// 
/////
/////
/////
/////
/////
/////termina s17 historico
/////
/////
/////
/////
/////
/////

///// 
/////
/////
/////
/////
/////
/////inician globales
/////
/////
/////
/////
/////
router.get('/edfemeglobal', async (req, res) => {
    const vistas = await pool.query("SELECT * FROM `ed_general_historico_femenil_20`");
    const goles = await pool.query("SELECT * FROM `ed_goleohistorico_femenil` LIMIT 15");

    res.render('partials/index/edlibre' , { vistas,goles })

})
router.get('/edmixtaglobal', async (req, res) => {
    const vistas = await pool.query("SELECT * FROM `ed_general_historico_mixto`");
    
    res.render('partials/index/edlibre' , { vistas })

})
router.get('/eds23global', async (req, res) => {
    const vistas = await pool.query("SELECT * FROM `ed_s23_historica_20`");
    
    res.render('partials/index/edlibre' , { vistas })

})
router.get('/eds20global', async (req, res) => {
    const vistas = await pool.query("SELECT * FROM `ED_S20_HISTORICA_2020`");
    
    res.render('partials/index/edlibre' , { vistas })

})
router.get('/eds17global', async (req, res) => {
    const vistas = await pool.query("SELECT * FROM `ed_historico_17`");
    
    res.render('partials/index/edlibre' , { vistas })

})

router.get('/edlibreglobal', async (req, res) => {
    const vistas = await pool.query("SELECT * FROM `ed_libre_tabla_historica_2020`");
    const goles = await pool.query("SELECT * FROM `ed_goleohistorico_libre` LIMIT 15");

    res.render('partials/index/edlibre' , { vistas,goles })

})
///// 
/////
/////
/////
/////
/////
/////Terminan globales
/////
/////
/////
/////
/////

///// 
/////
/////
/////
/////
/////
/////inician globales todo liga ed
/////
/////
/////
/////
/////

router.get('/edhistorico', async (req, res) => {
    const vistas = await pool.query("SELECT * FROM `ed_puntoshistoricos`");
    
    res.render('partials/index/edlibre' , { vistas })

})

router.get('/edinferiores', async (req, res) => {
    const vistas = await pool.query("SELECT * FROM `ED_HISTORICO_INFERIORES`");
    
    res.render('partials/index/edlibre' , { vistas })

})

router.get('/edmayores', async (req, res) => {
    const vistas = await pool.query("SELECT * FROM `ED_HISTORICOS_MAYORES`");
    
    res.render('partials/index/edlibre' , { vistas })

})


module.exports = router