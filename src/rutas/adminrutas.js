var express = require('express')
var router = express.Router()
const pool = require('../database');
const {isLoggenIn} = require('../lib/aut');

//no tocar
// middleware que es específico para este enrutador
router.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now())
    next()
})
// define la ruta de la página principal
///no tocar




///Ruta de formulario resultados de equipos
router.get('/add',isLoggenIn, async (req, res) => {
const opciones = await pool.query("SELECT * FROM `registros global equipo heroes`");
console.log(opciones)
    res.render('links/add' , {opciones : opciones} )
})

router.post('/add', async (req, res) => {
 const {Jornada,Fecha,hora,Equipo,Rival,Equipo2,Rival2,Equipo3,Rival3,Equipo4,Rival4,Equipo5,Rival5,hora2,hora3,hora4,hora5} = req.body;
 const Regis1 = {
     Jornada ,
     Fecha  ,
     hora,
     Equipo,
     Rival,
 };
 
const Regis3 = {
    Jornada ,
    Fecha  ,
    hora: hora2,
    Equipo : Equipo2,
    Rival: Rival2,
};


const Regis5 = {
    Jornada ,
    Fecha  ,
    hora : hora3,
    Equipo : Equipo3,
    Rival : Rival3
};


const Regis7 = {
   Jornada ,
   Fecha  ,
   hora : hora4 ,
   Equipo : Equipo4,
   Rival: Rival4,
};

const Regis9 = {
    Jornada ,
    Fecha  ,
    hora: hora5,
    Equipo : Equipo5,
    Rival: Rival5,
 };
 
await pool.query("INSERT INTO `mixto 2020 apertura ed` set ?",[Regis1])
await pool.query("INSERT INTO `mixto 2020 apertura ed` set ?",[Regis3])
await pool.query("INSERT INTO `mixto 2020 apertura ed` set ?",[Regis5])
await pool.query("INSERT INTO `mixto 2020 apertura ed` set ?",[Regis7])
await pool.query('INSERT INTO `mixto 2020 apertura ed` set ?',[Regis9])

res.redirect('./vista')
})
///Ruta de formulario resultados de equipos



///Ruta de visualizacion de resultados
router.get('/vista',isLoggenIn, async  (req, res) => {
    const vistas = await pool.query("SELECT * FROM `pruebamixto20` ORDER BY `ID` DESC");
     res.render('links/vistas', { vistas } )
    });
///Ruta de visualizacion de resultados


///Ruta de eliminacion de resultados
router.get('/delete/:ID', async  (req, res) => {
const {ID} = req.params;
await pool.query("Delete From `mixto 2020 apertura ed` WHERE ID = ?" , [ID])
    res.redirect('/admin/vista' )
    });
///Ruta de eliminacion de resultados

///Edicion de las vistas
router.get('/edit/:ID',isLoggenIn, async  (req, res) => {
    const {ID} = req.params;
    const ediciones = await pool.query("Select * From `mixto 2020 apertura ed` WHERE ID = ?" , [ID])
    const opciones = await pool.query("SELECT * FROM `registros global equipo heroes`");

    res.render('links/edit', {ediciones: ediciones[0], opciones:opciones})
        });
///edicion de las vistas
router.post('/edit/:ID', async  (req, res) => {
    const {ID} = req.params;
const {Jornada,Fecha,hora,Equipo,Rival,GF,GC,pt1,pt2} = req.body;
const Regisedit = {
    Jornada ,
    Fecha  ,
    hora,
    Equipo,
    Rival,
    GF,
    GC,
   Puntos: pt1
};
const Regisedit2 = {
    Jornada ,
    Fecha  ,
    hora,
    Equipo :Rival,
    Rival: Equipo,
    GF: GC,
    GC: GF,
    Puntos: pt2
};
await pool.query("UPDATE `mixto 2020 apertura ed` set ? Where id = ?",[Regisedit,ID]);
await pool.query("INSERT INTO `mixto 2020 apertura ed` set ?",[Regisedit2]);

res.redirect('/admin/vista' )

        });






module.exports = router