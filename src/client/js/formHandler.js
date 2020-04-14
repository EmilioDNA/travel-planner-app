function handleSubmit(event) {
    event.preventDefault()

    
    const baseURL = 'http://api.geonames.org/searchJSON?'
    const username = 'emiliodna';
    const city = 'Paris';
    const maxRows = 10;

    const baseURL2 = 'https://api.weatherbit.io/v2.0/forecast/daily?'
    const key =  'bc1f8fab0a30404a8a17c25b34557487'

    const baseURL3 = 'https://pixabay.com/api/?'
    const key2 = '16031172-e933a0919ad581284c63d4a63';
    const q = 'Paris';
    const type = 'photo';
    const orientation = 'horizontal';
    const category = 'background';


    Client.getGeoNamesCity(baseURL, city, maxRows, username)
        .then((data) => {
            const arrayGeonames = data.geonames;
            for (let geoname of arrayGeonames) {
                Client.getWeatherCondition(baseURL2, geoname.lat, geoname.lng, key)
                    .then((data) => {
                        const arrayPlaces = data.data;  
                        const obj = {
                            high_temp: arrayPlaces[0].high_temp,
                            low_temp: arrayPlaces[0].low_temp,
                            description: arrayPlaces[0].weather.description
                        }
                        return obj 
                    }).then((obj) => {
                        
                        Client.getImage(baseURL3, q, type, orientation, category, key2)
                        .then((data) => {
                            const arrayImages = data.hits;
                            const imgURL = arrayImages[0].webformatURL
                            console.log(arrayImages[0].webformatURL);
                            Client.createTravelCard(geoname.name, geoname.countryName, obj.high_temp, obj.low_temp, obj.description, imgURL);
                        }) 
                    })
                
                
            }
            
        })


}



export { handleSubmit }



// check what text was put into the form field
    // const url = 'http://localhost:8081/check';
    // let formText = document.getElementById('name').value;

    // if (formText.length === 0 || !Client.isValidURL(formText)) {
    //     alert("Please introduce a valid URL in the field");
    // } else {
    //     console.log("::: Form Submitted :::")

    //     Client.fetchSentiment(url, {formText})
    //     .then(function(res) {
    //         Client.cleanResults();
    //         Client.addResults(res.polarity, res.subjectivity, res.text);
    //         return res.polarity;
    //     })
    // }