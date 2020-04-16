const dotenv = require('dotenv')
dotenv.config()

var path = require('path')

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
    res.sendFile('dist/index.html')
    //res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

const tripsData = []

app.get('/all', (request, response) => {
    response.send(tripsData);
});

// This endpoint saves each trip.
app.post('/save-trip', (req, res) => {
    let data = req.body;
    console.log(data);
    tripsData.push(data);
    res.send(data)
})