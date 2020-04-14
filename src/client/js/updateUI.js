
const createTravelCard = (city, country, high, low, description, imgURL) => {
    const list = document.getElementById('travel-planner-list');
    const card = document.createElement('DIV');
    card.classList.add('card');
    const figure = document.createElement('FIGURE');
    const img = document.createElement('IMG');
    img.setAttribute('src', imgURL);
    const cardBody = document.createElement('DIV');
    cardBody.classList.add('card-body');
    const title = document.createElement('H2');
    title.innerHTML = `${city}, ${country}`
    const spanButtons = document.createElement('SPAN');
    const buttonSave = document.createElement('BUTTON');
    buttonSave.innerHTML = 'Save trip';
    const buttonRemove = document.createElement('BUTTON');
    buttonRemove.innerHTML = 'Remove trip';
    buttonSave.classList.add('card-button');
    buttonRemove.classList.add('card-button');
    const weatherIntro = document.createElement('P');
    weatherIntro.innerHTML = 'Typical weather for then is:'
    const highLow = document.createElement('SPAN');
    highLow.innerHTML = `High - ${high} | Low - ${low}`;
    const temperatureDescription = document.createElement('P');
    temperatureDescription.innerHTML = description;
    spanButtons.appendChild(buttonSave);
    spanButtons.appendChild(buttonRemove);
    cardBody.appendChild(title);
    cardBody.appendChild(spanButtons);
    cardBody.appendChild(weatherIntro);
    cardBody.appendChild(highLow);
    cardBody.appendChild(temperatureDescription);
    figure.appendChild(img);
    card.appendChild(figure);
    card.appendChild(cardBody);
    list.appendChild(card);
}


const cleanResults = () => {
    const results = document.getElementById('results');
    while (results.firstChild) {
        console.log("Cleaning children");
        results.removeChild(results.firstChild);
    }

}

export { createTravelCard, cleanResults } 