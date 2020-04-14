// /* Global Variables */


// http://api.geonames.org/searchJSON?name_equals=Paris&maxRows=10&username=emiliodna
// https://api.weatherbit.io/v2.0/forecast/daily?lat=48.85341&lon=2.3488&key=bc1f8fab0a30404a8a17c25b34557487	
// https://pixabay.com/api/?key=16031172-e933a0919ad581284c63d4a63&q=Paris&image_type=photo&orientation=horizontal&category=background

const getGeoNamesCity =  async (url, city, maxRows, username) => {

    const finalURL = `${url}name_equals=${city}&maxRows=${maxRows}&username=${username}`;
    console.log(finalURL);
    const result = await fetch(finalURL)
    try {
        const data = await result.json();
        console.log(data);
        return data;
    } catch(error) {
        console.log("error", error);
    }
}

const getWeatherCondition = async (url, lat, lon, key) => {

    const finalURL = `${url}lat=${lat}&lon=${lon}&key=${key}`;
    console.log(finalURL);
    const result = await fetch(finalURL)
    try {
        const data = await result.json();
        console.log(data);
        return data;
    } catch(error) {
        console.log("error", error);
    }
} 

const getImage = async (url, q, type, orientation, category, key ) => {

    const finalURL = `${url}key=${key}&q=${q}&image_type=${type}&orientation=${orientation}&category=${category}`;
    console.log(finalURL);
    const result = await fetch(finalURL)
    try {
        const data = await result.json();
        console.log(data);
        return data;
    } catch(error) {
        console.log("error", error);
    }
}

// const updateUI = async () => {
//     const request = await fetch('/all');
//     try {
//         const allData = await request.json();
//         document.getElementById('date').innerHTML = `Date: ${allData.date}`;
//         document.getElementById('temp').innerHTML = `Temperature: ${allData.temperature}`;
//         document.getElementById('content').innerHTML = `Feeling: ${allData.feelings}`; 
//     } catch(error) {
//         console.log("error", error);
//     }
// }

const updateCitiesUI = async (data) => {
    
    try {

    } catch(error) {
        console.log("error", error);
    }
}

export {getGeoNamesCity, getWeatherCondition, getImage, updateCitiesUI}

// // Helper methods
// const handleClick = (e) => {
//     const zipCode = document.getElementById('zip').value;
    
//     getOpenWeather(baseURL, zipCode, apiKey)
//     .then((data) => {
//         const feelings = document.getElementById('feelings').value;
//         postData('/add', {temperature: data.main.temp, date: newDate, feelings})
//     })
//     .then(() => {
//         updateUI()
//     })
// }

// // Async functions 
// const getOpenWeather = async (baseURL, zipCode, key) => {
//     const urlRequest = baseURL + `zip=${zipCode},us&appid=${key}`;
//     console.log(urlRequest);
//     const res = await fetch(urlRequest)
//     try {
//         const data = await res.json();
//         return data;
//     } catch(error) {
//         console.log("error", error);
//     }
// }

// const postData = async (url = '', data = {}) => {
//     const response = await fetch(url, {
//         method: 'POST',
//         credentials: 'same-origin',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(data)
//     });

//     try {
//         const newData = await response.json();
//         console.log(newData);
//         return newData;
//     } catch(error) {
//         console.log("error", error);
//     }

// }

// const updateUI = async () => {
//     const request = await fetch('/all');
//     try {
//         const allData = await request.json();
//         document.getElementById('date').innerHTML = `Date: ${allData.date}`;
//         document.getElementById('temp').innerHTML = `Temperature: ${allData.temperature}`;
//         document.getElementById('content').innerHTML = `Feeling: ${allData.feelings}`; 
//     } catch(error) {
//         console.log("error", error);
//     }
// }