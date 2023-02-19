//Set up a basic Express Router that listens for GET requests to the root route of a web server and responds with string.

//import the Express module and create a new router instance using the 'Router()' function that will define routes for the web server.
const router = require('express').Router()

//set up a route for the root path of the web server that will listen for GET requests. When GET request is received, excecute the callback function that will send the response t the client with the string "GET/places"

router.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: 'http://placekitten.com/250/250'
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: 'http://placekitten.com/250/250'
      }]
      
    res.render('places/index', {places})
})

router.get('/new', (req, res) => {
    res.render('places/new')
});

//export the router instance so that it can be used by other parts of the application.
module.exports = router