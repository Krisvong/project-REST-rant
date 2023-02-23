//Set up a basic Express Router that listens for GET requests to the root route of a web server and responds with string.

//import the Express module and create a new router instance using the 'Router()' function that will define routes for the web server.
const router = require('express').Router()
const places = require("../models/places.js")

router.post('/', (req, res) => {
    console.log(req.body)
    if (!req.body.pic) {
    //Default image if one is not provided
    req.body.pic = 'http://placekitten.com/400/400'
    }
    if (!req.body.city) {
        req.body.city = 'Anytown'
    }
    if (!req.body.state) {
        req.body.state = 'USA'
    }
    places.push(req.body)
    res.redirect('/places')
})
  
//set up a route for the root path of the web server that will listen for GET requests. When GET request is received, excecute the callback function that will send the response t the client with the string "GET/places
router.get('/', (req, res) => { 
    res.render('places/index', {places})
})

router.get('/new', (req, res) => {
    res.render('places/new')
})

router.get('/show', (req, res) => {
    res.render('places/show')
})

router.get('/edit', (req, res) => {
    res.render('places/edit')
})
//export the router instance so that it can be used by other parts of the application.
module.exports = router