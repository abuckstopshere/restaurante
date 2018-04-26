// inits
    const log = console.log
    const express = require('express')
    const app = express()
    const fs = require('fs')
    const port = process.env.PORT || 3030
    const router = express.Router()
    const TABLESI = './tables.html'
    const RESERVEI = './reserve.html'
    const HOMIE = './home.html'

// read pages
    const tablesi = () => {
        fs.readFileSync(TABLES , 'utf8' , (error , response) => {response})
    }

    const reservei = () => {
        fs.readFileSync(RESERVEI , 'utf8' , (error , response) => {response})
    }

    const homie = () => {
        fs.readFileSync(HOMIE , 'utf8' , (error , response) => {response})
    }

// route html endpoints
    router.get('/' , function(req , res) {
        res.send(homie())
    })

    router.get('/home' , function(req , res) {
        res.send(homie())
    })

    router.get('/tables' , function(req , res) {
        res.send(tablesi())
    })

    router.get('/reserve' , function(req , res) {
        res.send(reservei())
    })

// server on 
    app.use('/' , router)
    app.listen(port)
    log(`magic happens on port : ${port}`)