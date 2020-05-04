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
    const vistas = await pool.query("SELECT * FROM `jor_mx_ed_20` ORDER BY `jor_mx_ed_20`.`ID` DESC");
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

/// editar goles liga ed

router.get('/goles', async  (req, res) => {
    const opciones = await pool.query("SELECT * FROM `registros global equipo heroes`");
    const jugadores = await pool.query("SELECT * FROM `registro global heroes`");
    const mixtagol = await pool.query("SELECT * FROM `goleo_feme_20_ed` WHERE 1 GROUP by `id` ORDER BY `goleo_feme_20_ed`.`Equipo` ASC");
    const mixtagolind = await pool.query("SELECT * FROM `goleo_feme_20_ed` ORDER BY `goleo_feme_20_ed`.`id_registro` DESC");

    res.render('links/goleo' ,{ opciones , jugadores , mixtagol,mixtagolind})
    });

    router.post('/goles', async  (req, res) => {
       console.log
       const {Jornada,Fecha,Hora,Equipo1,Rival,idl,idv,nam1,namv,dor1,dorv,gl,gv,id2,idv2,nam2,namv2,dor2,dorv2,gl2,gv2,idl3,idv3,naml3,namv3,dor3,dorv3,gl3,gv3} = req.body;
       const Regisedit = {
        id :idl,
        nombre :nam1,
        Dorsal:dor1,
        Equipo: Equipo1,
        Goles: gl,
        Jornada,
        Rival,
       Fecha,
       Hora
    };
    const Regiseditv = {
        id :idv,
        nombre :namv,
        Dorsal:dorv,
        Equipo: Rival,
        Goles: gv,
        Jornada,
        Rival:Equipo1,
       Fecha,
       Hora
    };

    const Regisedit2 = {
        id :id2,
        nombre :nam2,
        Dorsal:dor2,
        Equipo: Equipo1,
        Goles: gl2,
        Jornada,
        Rival,
       Fecha,
       Hora
    };
    const Regiseditv2 = {
        id :idv2,
        nombre :namv2,
        Dorsal:dorv2,
        Equipo: Rival,
        Goles: gv2,
        Jornada,
        Rival:Equipo1,
       Fecha,
       Hora
    };
    const Regisedit3 = {
        id :idl3,
        nombre :naml3,
        Dorsal:dor3,
        Equipo: Equipo1,
        Goles: gl3,
        Jornada,
        Rival,
       Fecha,
       Hora
    };
    const Regiseditv3 = {
        id :idv3,
        nombre :namv3,
        Dorsal:dorv3,
        Equipo: Rival,
        Goles: gv3,
        Jornada,
        Rival:Equipo1,
       Fecha,
       Hora
    };

    console.log(Regisedit)
    await pool.query("INSERT INTO `goleo_feme_20_ed` set ?",[Regisedit])
    await pool.query("INSERT INTO `goleo_feme_20_ed` set ?",[Regisedit2])
    await pool.query("INSERT INTO `goleo_feme_20_ed` set ?",[Regisedit3])

    await pool.query("INSERT INTO `goleo_feme_20_ed` set ?",[Regiseditv])
    await pool.query("INSERT INTO `goleo_feme_20_ed` set ?",[Regiseditv2])
    await pool.query("INSERT INTO `goleo_feme_20_ed` set ?",[Regisedit3])

       res.redirect('/admin/goles' )
    });

    router.get('/borrargoleadores/:ID', async  (req, res) => {
        const {ID} = req.params;
        console.log(ID);
 await pool.query("Delete From `goleo_feme_20_ed` WHERE id_registro = ?" , [ID])
        res.redirect('/admin/goles' )
            });

     router.get('/editgoleadores/:ID', async  (req, res) => {
         const {ID} = req.params;
            console.log(ID)
 const ediciones = await pool.query("Select * From `goleo_feme_20_ed` WHERE id_registro = ?" , [ID])

     res.render('links/editgoleadores', {ediciones})
                });


                router.post('/ediciongoleadores/:ID', async  (req, res) => {
                    const {ID} = req.params;

                    const {Jornada,Fecha,hora,id,nombre,Equipo,Dorsal,Rival,Goles,id_registro} = req.body;

                    const editgol1 = {
                        Jornada ,
                        Fecha  ,
                        hora,
                        id,
                        nombre,
                        Equipo,
                        Dorsal,
                        Rival,
                        Goles
    
                    };

                    console.log(ID)
                    await pool.query("UPDATE `goleo_feme_20_ed` set ? Where id_registro = ?",[editgol1,ID]);

                  res.redirect('/admin/goles' )
                           });


module.exports = router