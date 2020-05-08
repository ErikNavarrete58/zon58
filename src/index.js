var express = require('express');
var app = express();
var passport = require("passport");
const passportLocal = require("passport-local").Strategy ;
const cookieParser = require("cookie-parser");
const session = require("express-session")
const pool = require('./database');


//enrutadores
var adminrt = require('./rutas/adminrutas')
var pag = require('./rutas/pag')
var ligasid = require('./rutas/ligasId')
var kids = require('./rutas/rutaskids')
var copafb = require('./rutas/rutascopafb')
var rap = require('./rutas/rap')


//fin enrutadores
const morgan = require('morgan')
const exhbs = require('express-handlebars')
const path = require('path')

///seting hbs
app.set('views', path.join(__dirname, 'views'))
app.engine('.hbs', exhbs ({
defaultLayout: 'main',
layoutsDir: path.join(app.get('views'), 'layouts'),
partialsDir: path.join(app.get('views'), 'partials' ),
extname: '.hbs' ,
helpers: require('./lib/handlebars')
}))
app.set('view engine','.hbs');
///seting hbs

///enrutador morgan
app.use(morgan('dev'))
///

/// Datos para solo recibir datos simples desde otro servidor
app.use(express.urlencoded({extended: false}))
app.use(express.json());
/// fin

///loguin y sesion
app.use(cookieParser('mi secreto'));
app.use(session({
secret: 'mi secreto',
resave: true,
saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());



passport.use (new passportLocal(async (username,password,done) =>{

  const sl = await pool.query("SELECT * FROM `usuarios`");

  if(username === sl[0].username && password === sl[0].password)
return done(null,{ id: 1, name: "zon"});
done(null, false);
}))
passport.serializeUser(function(user,done){
  done(null,user.id)})

  passport.deserializeUser(function(id,done){
    done(null, { id:1, name: "zon"});
  })

///loguin y session

//variables globales , req,res,next
app.use((req, res , next) => {
  app.locals.user = req.user;
  next();
});
///

///enrutadores
app.use('/admin', adminrt);
app.use(pag); //ruta vistas ligaed
app.use(ligasid); //ruta futbol, vistas id de jugadores , equipos , dt
app.use(kids); //ruta liga futbol champions kids
app.use(copafb); //ruta liga futbol copafb
app.use(rap); //ruta ligas de rap
///enrutadores

///carpeta public
app.use(express.static(path.join(__dirname,'public')));
///carpeta public


/// loguin de administrador 
app.get("/login",(req,res)=>{
res.render("auth/login")

} )

app.post("/login", passport.authenticate("local",{
  successRedirect: "/admin/add" ,
  failureRedirect: "/login"
  }))

/// loguin de administrador 

app.get('/logout', (req, res) => {
  req.logOut();
res.redirect('/login')
});

/// instalacion e iniciacion del modulo exprees para crear servidor
app.listen(3000, function () {
  console.log('Servidor listo escuchando por el puerto 3000');
});
//direccion y puerto principal del que escucha nuestro navegador

