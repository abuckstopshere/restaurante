// inits
const log = console.log
const express = require('express')
const app = express()
const fs = require('fs')
const bodyParser = require('body-parser')
const port = process.env.PORT || 3030
const router = express.Router()
const TABLESI = './tables.html'
const RESERVEI = './reserve.html'
const HOMIE = './home.html'

// read pages
const tablesi = () => {
    return fs.readFileSync(TABLESI, 'utf8', (error, response) => {
        response
    })
}

const reservei = () => {
    return fs.readFileSync(RESERVEI, 'utf8', (error, response) => {
        response
    })
}

const homie = () => {
    return fs.readFileSync(HOMIE, 'utf8', (error, response) => {
        response
    })
}

// route html endpoints
router.get('/', function (req, res) {
    res.send(homie())
})

router.get('/home', function (req, res) {
    res.send(homie())
})

router.get('/tables', function (req, res) {
    res.send(tablesi())
})

router.get('/reserve', function (req, res) {
    res.send(reservei())
})

// route get table reservation information
router.get("/api/:reservations?", function (req, res) {
    let chosen = req.params.reservations
    if (chosen) {
        for (let i = 0; i < reservations.length; i++) {
            if (chosen === reservations[i].routeName) {
                return res.json(reservations[i])
            }
        }
        return res.json(false)
    }
    return res.json(reservations)
})

// route get reservation waitlist
router.get("/api/waitlist?", function (req, res) {
    let chosen = req.params.waitlist
    if (chosen) {
        for (let i = 0; i < waitlist.length; i++) {
            if (chosen === waitlist[i].routeName) {
                return res.json(waitlist[i])
            }
        }
        return res.json(false)
    }
    return res.json(waitlist)
})

// route post new reservations
router.post("/api/new", function (req, res) {
    let newReservation = req.body
    newReservation.routeName = newReservation.name.replace(/\s+/g, "").toLowerCase()
    reservations.push(newReservation)
    res.json(newReservation)
})

// server on 
app.use('/', router)
app.listen(port)
log(`magic happens on port : ${port}`)