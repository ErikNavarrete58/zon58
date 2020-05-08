var express = require('express')
var router = express.Router()
const pool = require('../database');


router.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now())
    next()
})

router.get('/rap', async (req, res) => {

    
    res.render('rap/inicio')
   })

   router.get('/warriors', async (req, res) => {

    
    res.render('rap/inicio')
   })

   router.get('/spartanbattles', async (req, res) => {

    
    res.render('rap/inicio')
   })
module.exports = router