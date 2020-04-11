const { fetchSentiment } = require('./fetchData');
const fetchMock = require('fetch-mock');
import "@babel/polyfill";


describe('fetch', () =>{

    it('can fetch', async () => {
        const value = 'https://www.techspot.com/news/84674-app-spending-hits-record-levels-people-look-break.html'

        fetchMock.post('http://localhost:8081/check', {value});
        const result = await  fetchSentiment('http://localhost:8081/check', {value});
        expect(result).toEqual({value});
    });
});