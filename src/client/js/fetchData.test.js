const { saveTrip } = require('./fetchData');
const fetchMock = require('fetch-mock');
import "@babel/polyfill";

// Test that the fetch query is performed correctly.
describe('fetch', () =>{
    const data = {
        days:'3', 
        city: 'Paris', 
        country: 'France', 
        high: '30.5', 
        low: '10.6', 
        description: 'Cloudy',  
        imgURL:'https://pixabay.com/get/57e0d74b4e52_640.jpg'
    }
    it('can fetch', async () => {
        fetchMock.post('http://localhost:8081/check', data);
        const result = await  saveTrip('http://localhost:8081/check', data);
        expect(result).toEqual(data);
    });
});