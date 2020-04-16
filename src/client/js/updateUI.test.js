const {cleanResults, createTravelCard} = require('./updateUI');
import "@babel/polyfill";



// Test that the data is cleaned correctly
test('test that "The data is cleaned', async () => {
     // Set up our document body
    document.body.innerHTML =
    '<div id="travel-planner-list"></div>';
    const results = document.getElementById('travel-planner-list');
    createTravelCard('3', 'Paris', 'France', '30.5', '10.6', 'Cloudy', 'a06d', 'https://pixabay.com/get/57e0d74b4e52b10ff3d8992cc62e377d143ed9e74e50744173267ad3974cc4_640.jpg')
    .then(() => {
        cleanResults();
        expect(results.hasChildNodes()).toBe(false);
    })
    
});


// Test that the data is added correctly
test('test that "The data is filled', async () => {
    document.body.innerHTML =
    '<div id="travel-planner-list"></div>';
    const results = document.getElementById('travel-planner-list');
    createTravelCard('3', 'Paris', 'France', '30.5', '10.6', 'Cloudy', 'a06d', 'https://pixabay.com/get/57e0d74b4e52b10ff3d8992cc62e377d143ed9e74e50744173267ad3974cc4_640.jpg')
    .then(() => {
        expect(results.hasChildNodes()).toBe(true);
    })
    
});