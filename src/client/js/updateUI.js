



const createTravelCard =  async (days, city, country, high, low, description, icon, imgURL) => {
    const list = document.getElementById('travel-planner-list');
    const card = `
        <div class="card">
            <figure>
                <img id="travel-img" src="${imgURL}" alt="">
            </figure>
            <div class="card-body">
                <h2><span id="city">${city}</span>, <span id="country">${country}</span> is <span id="days">${days}</span> days away</h2>
                <span>
                    <button class="card-button" onclick="Client.handleClick(event)">Save trip</button>
                    <button class="card-button">Remove trip</button>
                </span>
                <p>Typical weather for then is:</p>
                <span>High - <span id="high">${high}</span> | Low - <span id="low">${low}<span></span> 
                <span class="weather-description">
                    <p id="description">${description}.</p>
                    <img class="img-icon" src="/src/client/media/${icon}.png" >
                </span>
            </div>
        </div>`;
    const fragment = document.createRange().createContextualFragment(card);
    list.appendChild(fragment);
}




const cleanResults = () => {
    const results = document.getElementById('travel-planner-list');
    while (results.firstChild) {
        console.log("Cleaning children");
        results.removeChild(results.firstChild);
    }

}

export { createTravelCard, cleanResults } 