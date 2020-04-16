import { formatToDate, getTravelDaysLeft, replaceSpaces } from "./utils";
import { saveTrip, getGeoNamesCity, getWeatherCondition, getImage} from "./fetchData";
import { createTravelCard, cleanResults } from './updateUI';

// The variables of the Geo Names API
const baseURLGeoNames = 'http://api.geonames.org/searchJSON?'
const username = 'emiliodna';
const maxRows = 10;
// The variables of the Weather Bit API
const baseURLWeatherBit = 'https://api.weatherbit.io/v2.0/forecast/daily?'
const keyWeatherBit =  'bc1f8fab0a30404a8a17c25b34557487'
// The variables of the Pixabay API
const baseURLPixabay = 'https://pixabay.com/api/?'
const keyPixabay = '16031172-e933a0919ad581284c63d4a63';
const type = 'photo';
const orientation = 'horizontal';
const category = 'background';

// This function handles the form submitting 
function handleSubmit(event) {
    event.preventDefault()
    let city = document.getElementById('name').value; // Get the city from the input field.
    const date = document.getElementById('date').value; // Get the date from the input field.
    // This conditional evaluates if the inputs are empty.
    if (city.length === 0 || date.length === 0) {
            alert("Please introduce a valid city and/or date");
        } else {
            console.log("::: Form Submitted :::")

            
    
            cleanResults(); // If the travel list contains children , clean them.
            city =  replaceSpaces(city);
            let currentDate =  new Date();
            let travelDate = formatToDate(date);
            let daysDifference = getTravelDaysLeft(currentDate, travelDate); // Calculate the days left from today to the desired date.
            // Get the city names from the API
            getGeoNamesCity(baseURLGeoNames, city, maxRows, username)
                .then((data) => {
                    let counter = 0;
                    for (let geoname of data.geonames) {
                        // Get the weather condition of each geo name
                        getWeatherCondition(baseURLWeatherBit, geoname.lat, geoname.lng, keyWeatherBit)
                            .then((data) => {
                                const obj = { // Create an object with the needed information
                                    high_temp: data.data[daysDifference].high_temp,
                                    low_temp: data.data[daysDifference].low_temp,
                                    description: data.data[daysDifference].weather.description,
                                    icon: data.data[daysDifference].weather.icon
                                }
                                return obj 
                            }).then((obj) => {
                                // Get a random image to full each card
                                getImage(baseURLPixabay, city, type, orientation, category, keyPixabay)
                                .then((data) => {
                                    const imgURL = data.hits[counter].webformatURL
                                    createTravelCard(daysDifference, geoname.name, geoname.countryName, obj.high_temp, obj.low_temp, obj.description, obj.icon, imgURL);
                                    counter += 1;
                                }) 
                            })  
                    }
                })
            
        }

}
// This function handles the button to save trips.
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


// Export functions
export { handleSubmit, handleClick }
