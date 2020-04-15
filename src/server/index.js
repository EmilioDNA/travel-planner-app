const dotenv = require('dotenv')
dotenv.config()

var path = require('path')
const mockAPIResponse = require('./mockAPI.js')
const aylien = require('aylien_textapi')

//For testing
const fetch = require('node-fetch')


// set aylien API credentials
const textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
});


// Require Express to run server and routes
const express = require('express');


// Start up an instance of app
const app = express();

/* Dependencies */
const bodyParser = require('body-parser');

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

app.use(express.static('dist'))


console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

const tripsData = []



app.get('/test', function (req, res) {
    textapi.sentiment({
        'text': 'John Wick'
    }, function(error, response) {
        if (error === null) {
            console.log(response);
            res.send(response);
        } else {
            console.log(error);
        }
    });
})

app.get('/all', (request, response) => {
    response.send(tripsData);
});

app.post('/save-trip', (req, res) => {
    let data = req.body;
    console.log(data);
    tripsData.push(data);
    res.send(data)
})