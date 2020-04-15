import { formatToDate } from "./utils";
import { saveTrip } from "./fetchData";


const baseURLGeoNames = 'http://api.geonames.org/searchJSON?'
const username = 'emiliodna';
const maxRows = 10;

const baseURLWeatherBit = 'https://api.weatherbit.io/v2.0/forecast/daily?'
const keyWeatherBit =  'bc1f8fab0a30404a8a17c25b34557487'

const baseURLPixabay = 'https://pixabay.com/api/?'
const keyPixabay = '16031172-e933a0919ad581284c63d4a63';
const type = 'photo';
const orientation = 'horizontal';
const category = 'background';


function handleSubmit(event) {
    event.preventDefault()

    let city = document.getElementById('name').value;
    const date = document.getElementById('date').value;

    if (city.length === 0 || date.length === 0) {
            alert("Please introduce a valid city and/or date");
        } else {
            console.log("::: Form Submitted :::")
            
            Client.cleanResults();
            city =  Client.replaceSpaces(city);
            let currentDate =  new Date();
            let travelDate = formatToDate(date);
            let daysDifference = Client.getTravelDaysLeft(currentDate, travelDate);
            
            Client.getGeoNamesCity(baseURLGeoNames, city, maxRows, username)
                .then((data) => {
                    let counter = 0;
                    for (let geoname of data.geonames) {
                        Client.getWeatherCondition(baseURLWeatherBit, geoname.lat, geoname.lng, keyWeatherBit)
                            .then((data) => {
                                const obj = {
                                    high_temp: data.data[daysDifference].high_temp,
                                    low_temp: data.data[daysDifference].low_temp,
                                    description: data.data[daysDifference].weather.description,
                                    icon: data.data[daysDifference].weather.icon
                                }
                                return obj 
                            }).then((obj) => {
                                Client.getImage(baseURLPixabay, city, type, orientation, category, keyPixabay)
                                .then((data) => {
                                    const imgURL = data.hits[counter].webformatURL
                                    Client.createTravelCard(daysDifference, geoname.name, geoname.countryName, obj.high_temp, obj.low_temp, obj.description, obj.icon, imgURL);
                                    counter += 1;
                                }) 
                            })  
                    }
                })
            
        }

}

function handleClick(event) {
    event.preventDefault()
    const city = document.getElementById('city').textContent;
    const country = document.getElementById('country').textContent;
    const high = document.getElementById('high').textContent;
    const low = document.getElementById('low').textContent;
    const description = document.getElementById('description').textContent;
    const days = document.getElementById('days').textContent;
    const imgURL = document.getElementById('travel-img').getAttribute('src');
    console.log(imgURL);
    saveTrip('http://localhost:8081/save-trip', {days, city, country, high, low, description, imgURL})
}



export { handleSubmit, handleClick }
